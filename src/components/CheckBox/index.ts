import { NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNCheckBox, setProps, CheckBoxProps } from "./RNCheckbox";

class CheckBoxConfig extends ComponentConfig {
  tagName = RNCheckBox.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNCheckBox();
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
    setProps(instance as RNCheckBox, newProps, oldProps);
  }
}

export const CheckBox = registerComponent<CheckBoxProps>(new CheckBoxConfig());
