import { QWidget, NodeWidget } from "@nodegui/nodegui";
import { registerComponent } from "../config";
import { categorizeProps } from "../../utils/helpers";
export interface ViewProps {
  id?: string;
  styleSheet?: string;
  visible?: boolean;
  ref?: any;
}

export const setProps = (widget: NodeWidget, props: ViewProps) => {
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
  Object.assign(setter, props);
};

export const removeProps = (widget: NodeWidget, props: ViewProps) => {
  const remover: ViewProps = {
    set visible(oldShouldShow: boolean) {
      // noop
    },
    set styleSheet(oldStyleSheet: string) {
      widget.setStyleSheet(``);
    },
    set id(oldId: string) {
      widget.setObjectName(``);
    }
  };
  Object.assign(remover, props);
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
    setProps(widget, newProps);
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
    const { removed, updated } = categorizeProps(oldProps, newProps);
    setProps(instance, updated);
    removeProps(instance, removed);
  }
});
