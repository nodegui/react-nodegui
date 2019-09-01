import { QRadioButton, NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { ViewProps, setProps as setViewProps } from "../View";
import { registerComponent, ComponentConfig } from "../config";
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

class RadioButtonConfig extends ComponentConfig {
  id = "radiobutton";
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QRadioButton();
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
    setProps(instance as QRadioButton, newProps, oldProps);
  }
}

export const RadioButton = registerComponent<RadioButtonProps>(
  new RadioButtonConfig()
);
