import { registerComponent, ComponentConfig } from "../config";
import { QScrollArea, NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { RNScrollArea, setProps, ScrollAreaProps } from "./RNScrollArea";

class ScrollAreaConfig extends ComponentConfig {
  tagName = RNScrollArea.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return false;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNScrollArea();
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
    setProps(instance as QScrollArea, newProps, oldProps);
  }
}

export const ScrollArea = registerComponent<ScrollAreaProps>(
  new ScrollAreaConfig()
);
