import { registerComponent, ComponentConfig } from "../config";
import { QMainWindow, QWidget, FlexLayout, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";
import { Fiber } from "react-reconciler";
interface WindowProps extends ViewProps {
  centralWidgetProps?: ViewProps;
}

const setProps = (
  window: QMainWindow,
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

class WindowConfig extends ComponentConfig {
  id = "window";
  shouldSetTextContent(nextProps: object): boolean {
    return false;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const window = new QMainWindow();
    const rootView = new QWidget();
    const rootViewLayout = new FlexLayout();
    rootViewLayout.setFlexNode(rootView.getFlexNode());
    rootView.setLayout(rootViewLayout);
    window.setCentralWidget(rootView);
    setProps(window, newProps, {});
    return window;
  }
  finalizeInitialChildren(
    instance: NodeWidget,
    newProps: object,
    rootContainerInstance: Set<NodeWidget>,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: NodeWidget,
    newProps: WindowProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: NodeWidget,
    updatePayload: any,
    oldProps: object,
    newProps: object,
    finishedWork: Fiber
  ): void {
    setProps(instance as QMainWindow, newProps, oldProps);
  }
}

export const Window = registerComponent<WindowProps>(new WindowConfig());
