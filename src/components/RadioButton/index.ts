import { registerComponent } from "../config";
import { QRadioButton } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface RadioButtonProps extends ViewProps {
  text?: string;
}

const setProps = (
  widget: QRadioButton,
  newProps: RadioButtonProps,
  oldProps: RadioButtonProps
) => {
  const setter: RadioButtonProps = {
    set text(checkboxText: string) {
      widget.setText(checkboxText);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export const RadioButton = registerComponent<RadioButtonProps>({
  id: "radiobutton",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const widget = new QRadioButton();
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
    setProps(instance as QRadioButton, newProps, oldProps);
  }
});
