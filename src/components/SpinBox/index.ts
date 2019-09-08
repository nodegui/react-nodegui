import { NodeWidget } from "@nodegui/nodegui";
import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNSpinBox, setProps, SpinBoxProps } from "./RNSpinBox";
class SpinBoxConfig extends ComponentConfig {
  tagName = RNSpinBox.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNSpinBox();
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
    setProps(instance as RNSpinBox, newProps, oldProps);
  }
}

export const SpinBox = registerComponent<SpinBoxProps>(new SpinBoxConfig());
