import { registerComponent } from "../config";
import { QLineEdit } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface LineEditProps extends ViewProps {
  children?: string;
  text?: string;
}

const setProps = (
  widget: QLineEdit,
  newProps: LineEditProps,
  oldProps: LineEditProps
) => {
  const setter: LineEditProps = {
    // set text(checkboxText: string) {
    //   widget.setText(checkboxText);
    // }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export const LineEdit = registerComponent<LineEditProps>({
  id: "linedit",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const widget = new QLineEdit();
    setProps(widget, newProps, {});
    return widget;
  },
  finalizeInitialChildren: () => {
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
    setProps(instance as QLineEdit, newProps, oldProps);
  }
});
