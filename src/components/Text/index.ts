import { registerComponent } from "../config";
import { QLabel } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface TextProps extends ViewProps {
  children?: string;
  wordWrap?: boolean;
}

const setProps = (widget: QLabel, newProps: TextProps, oldProps: TextProps) => {
  const setter: TextProps = {
    set children(text: string) {
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
    return { name: "text" };
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const label = new QLabel();
    setProps(label, newProps, {});
    return label;
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
    setProps(instance as QLabel, newProps, oldProps);
  }
});
