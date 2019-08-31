import { registerComponent } from "../config";
import { QPlainTextEdit } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface PlainTextEditProps extends ViewProps {
  children?: string;
  text?: string;
  readOnly?: boolean;
}

const setProps = (
  widget: QPlainTextEdit,
  newProps: PlainTextEditProps,
  oldProps: PlainTextEditProps
) => {
  const setter: PlainTextEditProps = {
    set text(text: string) {
      text ? widget.setPlainText(text) : widget.clear();
    },
    set readOnly(isReadOnly: boolean) {
      widget.setReadOnly(isReadOnly);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export const PlainTextEdit = registerComponent<PlainTextEditProps>({
  id: "plaintextedit",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const widget = new QPlainTextEdit();
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
    setProps(instance as QPlainTextEdit, newProps, oldProps);
  }
});
