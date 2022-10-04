import { QWidget, QIcon, Component } from "@nodegui/nodegui";
import { RNComponent, RNProps } from "../config";
import { RNTab } from "../Tab/RNTab";

export interface TabItemProps {
  title?: string;
  icon?: QIcon;
}

/**
 * @ignore
 */
export const setTabItemProps = (
  tabItem: RNTabItem,
  parentTab: RNTab,
  newProps: TabItemProps,
  oldProps: TabItemProps
) => {
  if (!tabItem.actualTabWidget) {
    return;
  }
  const tabIndex = parentTab.indexOf(tabItem.actualTabWidget);
  if (tabIndex < 0) {
    console.error("TabItem is not part of the parent tab it references to");
    return;
  }

  const setter: TabItemProps = {
    set title(text: string) {
      parentTab.setTabText(tabIndex, text);
    },
    set icon(qicon: QIcon) {
      parentTab.setTabIcon(tabIndex, qicon);
    }
  };
  Object.assign(setter, newProps);
};

/**
 * @ignore
 */
export class RNTabItem extends Component implements RNComponent {
  native: any;
  actualTabWidget?: QWidget<any>;
  initialProps: TabItemProps = {};
  parentTab?: RNTab;

  setProps(newProps: TabItemProps, oldProps: TabItemProps): void {
    if (this.parentTab) {
      setTabItemProps(this, this.parentTab, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }
  appendInitialChild(child: QWidget<any>): void {
    if (this.actualTabWidget) {
      throw new Error("Tab Item can have only one child");
    }
    this.actualTabWidget = child;
  }
  appendChild(child: QWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: QWidget<any>, beforeChild: QWidget<any>): void {
    this.appendInitialChild(child);
  }
  removeChild(child: QWidget<any>): void {
    child.close();
    delete this.actualTabWidget;
  }
  static tagName: string = "tabitem";
}
