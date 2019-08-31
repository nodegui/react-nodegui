import { registerComponent } from "../config";
import { QCheckBox } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface CheckBoxProps extends ViewProps {
  children?: string;
  text?: string;
  checked?: boolean;
}

const setProps = (
  widget: QCheckBox,
  newProps: CheckBoxProps,
  oldProps: CheckBoxProps
) => {
  const setter: CheckBoxProps = {
    set text(checkboxText: string) {
      widget.setText(checkboxText);
    },
    set checked(isChecked: boolean) {
      widget.setChecked(isChecked);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export const CheckBox = registerComponent<CheckBoxProps>({
  id: "checkbox",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const widget = new QCheckBox();
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
    setProps(instance as QCheckBox, newProps, oldProps);
  }
});
