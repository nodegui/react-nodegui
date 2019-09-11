import { NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { setProps, ButtonProps, RNButton } from "./RNButton";

class ButtonConfig extends ComponentConfig {
  tagName = RNButton.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNButton();
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
    setProps(instance as RNButton, newProps, oldProps);
  }
}

export const Button = registerComponent<ButtonProps>(new ButtonConfig());
