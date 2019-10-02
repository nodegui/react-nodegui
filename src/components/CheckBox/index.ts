import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNCheckBox, CheckBoxProps } from "./RNCheckBox";
import { AppContainer } from "../../reconciler";

class CheckBoxConfig extends ComponentConfig {
  tagName = RNCheckBox.tagName;
  shouldSetTextContent(nextProps: CheckBoxProps): boolean {
    return true;
  }
  createInstance(
    newProps: CheckBoxProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNCheckBox {
    const widget = new RNCheckBox();
    widget.setProps(newProps, {});
    return widget;
  }
  finalizeInitialChildren(
    instance: RNCheckBox,
    newProps: CheckBoxProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: RNCheckBox,
    newProps: CheckBoxProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNCheckBox,
    updatePayload: any,
    oldProps: CheckBoxProps,
    newProps: CheckBoxProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const CheckBox = registerComponent<CheckBoxProps>(new CheckBoxConfig());
