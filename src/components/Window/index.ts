import { registerComponent } from "../config";
import { QMainWindow, QWidget, FlexLayout } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

type WindowSize = {
  width: number;
  height: number;
};
interface WindowProps extends ViewProps {
  viewProps?: ViewProps;
  fixedSize?: WindowSize | null;
  minSize?: WindowSize;
  maxSize?: WindowSize;
}

const setProps = (
  window: QMainWindow,
  newProps: WindowProps,
  oldProps: WindowProps
) => {
  const setter: WindowProps = {
    set fixedSize(size: WindowSize | null) {
      if (size) {
        window.setFixedSize(size.width, size.height);
      } else {
        const minSize = newProps.minSize || { width: 0, height: 0 };
        const maxSize = newProps.maxSize || {
          width: 16777215,
          height: 16777215
        };
        window.setMinimumSize(minSize.width, minSize.height);
        window.setMaximumSize(maxSize.width, maxSize.height);
      }
    },
    set minSize(size: WindowSize) {
      window.setMinimumSize(size.width, size.height);
    },
    set maxSize(size: WindowSize) {
      window.setMaximumSize(size.width, size.height);
    },
    set viewProps(viewProps: object) {
      if (window.centralWidget) {
        const oldViewProps = oldProps.viewProps || {};
        setViewProps(window.centralWidget, viewProps, oldViewProps);
      } else {
        console.warn(
          "Trying to set wiewProps for main window but no central widget set."
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
