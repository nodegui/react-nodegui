import { QMainWindow, NodeWidget, FlexLayout } from "@nodegui/nodegui";
import { setViewProps, ViewProps, RNView } from "../View/RNView";
import { RNWidget } from "../config";

export interface WindowProps extends ViewProps {
  centralWidgetProps?: ViewProps;
}

const setWindowProps = (
  window: RNWindow,
  newProps: WindowProps,
  oldProps: WindowProps
) => {
  const setter: WindowProps = {
    set centralWidgetProps(centralWidgetProps: ViewProps) {
      if (window.centralWidget) {
        const oldcentralWidgetProps = oldProps.centralWidgetProps || {};
        setViewProps(
          window.centralWidget as RNView,
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

/**
 * @ignore
 */
export class RNWindow extends QMainWindow implements RNWidget {
  setProps(newProps: WindowProps, oldProps: WindowProps): void {
    setWindowProps(this, newProps, oldProps);
  }
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
