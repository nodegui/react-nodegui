import { NodeWidget } from "@nodegui/nodegui";
import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNView, setProps, ViewProps } from "./RNView";
class ViewConfig extends ComponentConfig {
  tagName = RNView.tagName;
  shouldSetTextContent() {
    return false;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNView();
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
    setProps(instance, newProps, oldProps);
  }
}

export const View = registerComponent<ViewProps>(new ViewConfig());
