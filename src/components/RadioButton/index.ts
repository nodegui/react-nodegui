import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNRadioButton, RadioButtonProps } from "./RNRadioButton";
import { AppContainer } from "../../reconciler";
class RadioButtonConfig extends ComponentConfig {
  tagName = RNRadioButton.tagName;
  shouldSetTextContent(nextProps: RadioButtonProps): boolean {
    return true;
  }
  createInstance(
    newProps: RadioButtonProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNRadioButton {
    const widget = new RNRadioButton();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNRadioButton,
    newProps: RadioButtonProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNRadioButton,
    updatePayload: any,
    oldProps: RadioButtonProps,
    newProps: RadioButtonProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const RadioButton = registerComponent<RadioButtonProps>(
  new RadioButtonConfig()
);
