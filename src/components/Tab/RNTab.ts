import {
  QTabWidget,
  QTabWidgetSignals,
  TabPosition,
  QIcon
} from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { RNTabItem } from "../TabItem/RNTabItem";

export interface TabProps extends ViewProps<QTabWidgetSignals> {
  tabPosition?: TabPosition;
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
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNTab extends QTabWidget implements RNComponent {
  setProps(newProps: TabProps, oldProps: TabProps): void {
    setTabProps(this, newProps, oldProps);
  }
  appendInitialChild(tabItem: RNTabItem): void {
    if (!(tabItem instanceof RNTabItem)) {
      throw new Error("Children of tab should be of type TabItem");
    }
    const icon = tabItem.icon || new QIcon();
    const title = tabItem.title || "";
    if (tabItem.actualTabWidget) {
      this.addTab(tabItem.actualTabWidget, icon, title);
    }
  }
  appendChild(child: RNTabItem): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: RNTabItem, beforeChild: RNTabItem): void {
    if (!(child instanceof RNTabItem)) {
      throw new Error("Children of tab should be of type TabItem");
    }
    //TODO: implement tabwidget indexof in nodegui before
    this.appendInitialChild(child);
  }
  removeChild(child: RNTabItem): void {
    // this.removeTab()
    //TODO: implement tabwidget indexOf first.
  }
  static tagName = "tabwidget";
}