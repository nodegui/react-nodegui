import { Fiber } from "react-reconciler";
import { NodeWidget } from "@nodegui/nodegui";
import { registerComponent, ComponentConfig } from "../config";
import { RNDial, setProps, DialProps } from "./RNDial";
class DialConfig extends ComponentConfig {
  tagName = RNDial.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNDial();
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
    setProps(instance as RNDial, newProps, oldProps);
  }
}

export const Dial = registerComponent<DialProps>(new DialConfig());
