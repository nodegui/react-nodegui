import { QCheckBox, NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { ViewProps, setProps as setViewProps } from "../View";
import { registerComponent, ComponentConfig } from "../config";

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

class CheckBoxConfig extends ComponentConfig {
  id = "checkbox";
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QCheckBox();
    setProps(widget, newProps, {});
    return widget;
  }
  commitUpdate(
    instance: NodeWidget,
    updatePayload: any,
    oldProps: object,
    newProps: object,
    finishedWork: Fiber
  ): void {
    setProps(instance as QCheckBox, newProps, oldProps);
  }
}

export const CheckBox = registerComponent<CheckBoxProps>(new CheckBoxConfig());
