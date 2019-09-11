import { NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNRadioButton, setProps, RadioButtonProps } from "./RNRadioButton";
class RadioButtonConfig extends ComponentConfig {
  tagName = RNRadioButton.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNRadioButton();
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
    setProps(instance as RNRadioButton, newProps, oldProps);
  }
}

export const RadioButton = registerComponent<RadioButtonProps>(
  new RadioButtonConfig()
);
