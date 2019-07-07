import { registerComponent } from "../config";
import { QLabel } from "@nodegui/nodegui";

interface TextProps {
  id?: string;
  styleSheet?: string;
  visible?: boolean;
  children?: string;
  wordWrap?: boolean;
  ref?: any;
}

const propsSetter = (label: QLabel, newProps: object) => {
  const props: TextProps = {
    set children(text: string) {
      label.setText(text);
    },
    set styleSheet(styleSheet: string) {
      label.setStyleSheet(styleSheet);
    },
    set id(id: string) {
      // console.log("label", id, " set id");
      label.setObjectName(id);
    },
    set wordWrap(shouldWrap: boolean) {
      label.setWordWrap(shouldWrap);
    }
  };
  Object.assign(props, newProps);
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
    propsSetter(label, newProps);
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
    // console.log(oldProps, newProps, "Text");
    propsSetter(instance as QLabel, newProps);
  }
});
