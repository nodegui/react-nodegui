import { registerComponent } from "../config";
import { QPushButton } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface ButtonProps extends ViewProps {
  text?: string;
  isFlat?: boolean;
}

const setProps = (
  widget: QPushButton,
  newProps: ButtonProps,
  oldProps: ButtonProps
) => {
  const setter: ButtonProps = {
    set text(buttonText: string) {
      widget.setText(buttonText);
    },
    set isFlat(isFlat: boolean) {
      widget.setFlat(isFlat);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export const Button = registerComponent<ButtonProps>({
  id: "button",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: newProps => {
    const widget = new QPushButton();
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
    setProps(instance as QPushButton, newProps, oldProps);
  }
});
