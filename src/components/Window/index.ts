import { registerComponent } from "../config";
import { QMainWindow, QWidget, FlexLayout } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";
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

export const Window = registerComponent<WindowProps>({
  id: "window",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: newProps => {
    const window = new QMainWindow();
    const rootView = new QWidget();
    const rootViewLayout = new FlexLayout();
    rootViewLayout.setFlexNode(rootView.getFlexNode());
    rootView.setLayout(rootViewLayout);
    window.setCentralWidget(rootView);
    setProps(window, newProps, {});
    return window;
  },
  finalizeInitialChildren: () => {
    return true;
  },
  commitMount: (instance, newProps: WindowProps, internalInstanceHandle) => {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  },
  prepareUpdate: (
    instance,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) => {
    return true;
  },
  commitUpdate: (instance, updatePayload, oldProps, newProps, finishedWork) => {
    setProps(instance as QMainWindow, newProps, oldProps);
  }
});
