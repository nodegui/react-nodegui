import { registerComponent } from "../config";
import { QLabel } from "@nodegui/nodegui";
import { categorizeProps } from "../../utils/helpers";
import {
  ViewProps,
  setProps as setViewProps,
  removeProps as removeViewProps
} from "../View";

interface TextProps extends ViewProps {
  children?: string;
  wordWrap?: boolean;
}

const setProps = (widget: QLabel, props: TextProps) => {
  const setter: TextProps = {
    set children(text: string) {
      widget.setText(text);
    },
    set wordWrap(shouldWrap: boolean) {
      widget.setWordWrap(shouldWrap);
    }
  };
  Object.assign(setter, props);
  setViewProps(widget, props);
};

const removeProps = (widget: QLabel, props: TextProps) => {
  const remover: TextProps = {
    set children(oldText: string) {
      widget.setText(``);
    },
    set wordWrap(oldShouldWrap: boolean) {
      //noop
    }
  };
  Object.assign(remover, props);
  removeViewProps(widget, props);
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
    setProps(label, newProps);
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
    const { removed, updated } = categorizeProps(oldProps, newProps);
    setProps(instance as QLabel, updated);
    removeProps(instance as QLabel, removed);
  }
});
