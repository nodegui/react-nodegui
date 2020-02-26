import { NodeWidget, QIcon, Component } from "@nodegui/nodegui";
import { RNComponent, RNProps } from "../config";

export interface TabItemProps {
  title?: string;
  icon?: QIcon;
}

/**
 * @ignore
 */
export const setTabItemProps = (
  widget: RNTabItem,
  newProps: TabItemProps,
  oldProps: TabItemProps
) => {
  const setter: TabItemProps = {
    set title(text: string) {
      widget.title = text;
    },
    set icon(qicon: QIcon) {
      widget.icon = qicon;
    }
  };
  Object.assign(setter, newProps);
};

/**
 * @ignore
 */
export class RNTabItem extends Component implements RNComponent {
  native: any;
  actualTabWidget?: NodeWidget<any>;
  icon?: QIcon; // TODO: check what happens when icon or title is updated after initial set
  title?: string;
  index?: number;

  notifyUpdate(tabIndex: number, newProps: RNProps, oldProps: RNProps) {};

  setProps(newProps: RNProps, oldProps: RNProps): void {
    console.log(newProps);
    setTabItemProps(this, newProps, oldProps);
    this.notifyUpdate(this.index as number, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget<any>): void {
    if (this.actualTabWidget) {
      throw new Error("Tab Item can have only one child");
    }
    this.actualTabWidget = child;
  }
  appendChild(child: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  removeChild(child: NodeWidget<any>): void {
    child.close();
    delete this.actualTabWidget;
  }
  static tagName: string = "tabitem";
}
