import { ComponentConfig, registerComponent } from "../config";
import { Fiber } from "react-reconciler";
import { RNButton, ButtonProps } from "./RNButton";
import { AppContainer } from "../../reconciler";
class ButtonConfig extends ComponentConfig {
  tagName = RNButton.tagName;
  shouldSetTextContent(nextProps: ButtonProps): boolean {
    return true;
  }
  createInstance(
    newProps: ButtonProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNButton {
    const widget = new RNButton();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNButton,
    newProps: ButtonProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  finalizeInitialChildren(
    instance: RNButton,
    newProps: ButtonProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitUpdate(
    instance: RNButton,
    updatePayload: any,
    oldProps: ButtonProps,
    newProps: ButtonProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Button = registerComponent<ButtonProps>(new ButtonConfig());
