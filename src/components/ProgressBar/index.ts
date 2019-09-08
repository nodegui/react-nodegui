import { NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNProgressBar, setProps, ProgressBarProps } from "./RNProgressBar";
class ProgressBarConfig extends ComponentConfig {
  tagName = RNProgressBar.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return false;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNProgressBar();
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
    setProps(instance as RNProgressBar, newProps, oldProps);
  }
}

export const ProgressBar = registerComponent<ProgressBarProps>(
  new ProgressBarConfig()
);
