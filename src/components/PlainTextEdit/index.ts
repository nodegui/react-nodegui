import { NodeWidget } from "@nodegui/nodegui";
import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import {
  RNPlainTextEdit,
  setProps,
  PlainTextEditProps
} from "./RNPlainTextEdit";
class PlainTextEditConfig extends ComponentConfig {
  tagName = RNPlainTextEdit.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNPlainTextEdit();
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
    setProps(instance as RNPlainTextEdit, newProps, oldProps);
  }
}

export const PlainTextEdit = registerComponent<PlainTextEditProps>(
  new PlainTextEditConfig()
);
