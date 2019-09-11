import { QMainWindow, NodeWidget, FlexLayout } from "@nodegui/nodegui";
import { setProps as setViewProps, ViewProps } from "../View/RNView";
import { RNWidget } from "../config";

export class RNWindow extends QMainWindow implements RNWidget {
  static tagName = "mainwindow";
  appendInitialChild(child: NodeWidget): void {
    this.appendChild(child);
  }
  appendChild(child: NodeWidget): void {
    if (!child) {
      return;
    }
    (this.layout as FlexLayout).addWidget(child);
  }
  insertBefore(child: NodeWidget, beforeChild: NodeWidget): void {
    if (!this.layout) {
      console.warn("window has no layout to insert child before another child");
      return;
    }
    (this.layout as FlexLayout).insertChildBefore(child, beforeChild);
  }
  removeChild(child: NodeWidget) {
    if (!this.layout) {
      console.warn("parent has no layout to remove child from");
      return;
    }
    (this.layout as FlexLayout).removeWidget(child);
    child.close();
  }
}

export interface WindowProps extends ViewProps {
  centralWidgetProps?: ViewProps;
}

export const setProps = (
  window: RNWindow,
  newProps: WindowProps,
  oldProps: WindowProps
) => {
  const setter: WindowProps = {
    set centralWidgetProps(centralWidgetProps: object) {
      if (window.centralWidget) {
        const oldcentralWidgetProps = oldProps.centralWidgetProps || {};
        setViewProps(
          window.centralWidget,
          centralWidgetProps,
          oldcentralWidgetProps
        );
      } else {
        console.warn(
          "Trying to set viewProps for main window but no central widget set."
        );
      }
    }
  };
  Object.assign(setter, newProps);
  setViewProps(window, newProps, oldProps);
};
