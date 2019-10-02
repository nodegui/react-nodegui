import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNSpinBox, SpinBoxProps } from "./RNSpinBox";
import { AppContainer } from "../../reconciler";
class SpinBoxConfig extends ComponentConfig {
  tagName = RNSpinBox.tagName;
  shouldSetTextContent(nextProps: SpinBoxProps): boolean {
    return true;
  }
  createInstance(
    newProps: SpinBoxProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNSpinBox {
    const widget = new RNSpinBox();
    widget.setProps(newProps, {});
    return widget;
  }
  finalizeInitialChildren(
    instance: RNSpinBox,
    newProps: SpinBoxProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: RNSpinBox,
    newProps: SpinBoxProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNSpinBox,
    updatePayload: any,
    oldProps: SpinBoxProps,
    newProps: SpinBoxProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const SpinBox = registerComponent<SpinBoxProps>(new SpinBoxConfig());
