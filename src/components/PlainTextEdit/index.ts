import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNPlainTextEdit, PlainTextEditProps } from "./RNPlainTextEdit";
import { AppContainer } from "../../reconciler";

class PlainTextEditConfig extends ComponentConfig {
  tagName = RNPlainTextEdit.tagName;
  shouldSetTextContent(nextProps: PlainTextEditProps): boolean {
    return true;
  }
  createInstance(
    newProps: PlainTextEditProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNPlainTextEdit {
    const widget = new RNPlainTextEdit();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNPlainTextEdit,
    newProps: PlainTextEditProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNPlainTextEdit,
    updatePayload: any,
    oldProps: PlainTextEditProps,
    newProps: PlainTextEditProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const PlainTextEdit = registerComponent<PlainTextEditProps>(
  new PlainTextEditConfig()
);
