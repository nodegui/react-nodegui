import { registerComponent } from "../config";
import { QLabel } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface TextProps extends ViewProps {
  children?: string | number;
  wordWrap?: boolean;
}

const setProps = (widget: QLabel, newProps: TextProps, oldProps: TextProps) => {
  const setter: TextProps = {
    set children(text: string | number) {
      widget.setText(text);
    },
    set wordWrap(shouldWrap: boolean) {
      widget.setWordWrap(shouldWrap);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export const Text = registerComponent<TextProps>({
  id: "text",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const widget = new QLabel();
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
    setProps(instance as QLabel, newProps, oldProps);
  }
});
