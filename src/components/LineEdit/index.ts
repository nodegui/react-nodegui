import { registerComponent } from "../config";
import { QLineEdit } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface LineEditProps extends ViewProps {
  children?: string;
  text?: string;
  placeholderText?: string;
  readOnly?: boolean;
}

const setProps = (
  widget: QLineEdit,
  newProps: LineEditProps,
  oldProps: LineEditProps
) => {
  const setter: LineEditProps = {
    set text(text: string) {
      text ? widget.setText(text) : widget.clear();
    },
    set placeholderText(text: string) {
      widget.setPlaceholderText(text);
    },
    set readOnly(isReadOnly: boolean) {
      widget.setReadOnly(isReadOnly);
    }
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
