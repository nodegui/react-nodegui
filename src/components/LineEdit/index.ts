import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { LineEditProps, RNLineEdit } from "./RNLineEdit";
import { AppContainer } from "../../reconciler";
class LineEditConfig extends ComponentConfig {
  tagName = RNLineEdit.tagName;
  shouldSetTextContent(nextProps: LineEditProps): boolean {
    return true;
  }
  createInstance(
    newProps: LineEditProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNLineEdit {
    const widget = new RNLineEdit();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNLineEdit,
    newProps: LineEditProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNLineEdit,
    updatePayload: any,
    oldProps: LineEditProps,
    newProps: LineEditProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const LineEdit = registerComponent<LineEditProps>(new LineEditConfig());
