import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNComboBox, ComboBoxProps } from "./RNComboBox";
import { AppContainer } from "../../reconciler";

class ComboBoxConfig extends ComponentConfig {
  tagName = RNComboBox.tagName;
  shouldSetTextContent(nextProps: ComboBoxProps): boolean {
    return true;
  }
  createInstance(
    newProps: ComboBoxProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNComboBox {
    const widget = new RNComboBox();
    widget.setProps(newProps, {});
    return widget;
  }
  finalizeInitialChildren(
    instance: RNComboBox,
    newProps: ComboBoxProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: RNComboBox,
    newProps: ComboBoxProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNComboBox,
    updatePayload: any,
    oldProps: ComboBoxProps,
    newProps: ComboBoxProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const ComboBox = registerComponent<ComboBoxProps>(new ComboBoxConfig());
