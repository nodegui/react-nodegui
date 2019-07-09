import { QWidget, NodeWidget } from "@nodegui/nodegui";
import { registerComponent } from "../config";

export interface ViewProps {
  id?: string;
  styleSheet?: string;
  visible?: boolean;
  ref?: any;
}

export const setProps = (
  widget: NodeWidget,
  newProps: ViewProps,
  oldProps: ViewProps
) => {
  const setter: ViewProps = {
    set visible(shouldShow: boolean) {
      shouldShow ? widget.show() : widget.hide();
    },
    set styleSheet(styleSheet: string) {
      widget.setStyleSheet(styleSheet);
    },
    set id(id: string) {
      widget.setObjectName(id);
    }
  };
  Object.assign(setter, newProps);
};

export const View = registerComponent<ViewProps>({
  id: "view",
  getContext() {
    return { name: "view" };
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: (
    newProps,
    rootInstance,
    currentHostContext,
    workInProgress
  ) => {
    const widget = new QWidget();
    setProps(widget, newProps, {});
    return widget;
  },
  finalizeInitialChildren: (instance, newProps, rootInstance, context) => {
    return false;
  },
  commitMount: (instance, newProps, internalInstanceHandle) => {
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
    setProps(instance, newProps, oldProps);
  }
});
