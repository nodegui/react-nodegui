import { QTabWidget, NodeWidget, QTabWidgetSignals, TabPosition, QIcon } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget, getComponentByTagName } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export type TabsContent = {
    title: string,
    icon: QIcon,
    content: JSX.Element
}

export interface TabProps extends ViewProps<QTabWidgetSignals> {
  tabPosition?: TabPosition
  tabs?: TabsContent[]
}

/**
 * @ignore
 */
export const setTabProps = (
  widget: RNTab,
  newProps: TabProps,
  oldProps: TabProps
) => {
  const setter: TabProps = {
    set tabPosition(value: TabPosition) {
        widget.setTabPosition(value);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNTab extends QTabWidget implements RNWidget {
  setProps(newProps: TabProps, oldProps: TabProps): void {
    setTabProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget<any>): void {
    this.addTab(child, new QIcon(),'sample');
  }
  appendChild(child: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    //TODO: implement tabwidget indexof in nodegui before
    this.appendInitialChild(child);

  }
  removeChild(child: NodeWidget<any>): void {
    // this.removeTab()
    //TODO: implement tabwidget indexOf first.
  }
  static tagName = "tab";
}
