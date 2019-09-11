import { NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { setProps, LineEditProps, RNLineEdit } from "./RNLineEdit";
class LineEditConfig extends ComponentConfig {
  tagName = RNLineEdit.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNLineEdit();
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
    setProps(instance as RNLineEdit, newProps, oldProps);
  }
}

export const LineEdit = registerComponent<LineEditProps>(new LineEditConfig());
