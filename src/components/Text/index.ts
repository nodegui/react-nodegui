import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNText, TextProps } from "./RNText";
import { AppContainer } from "../../reconciler";
class TextConfig extends ComponentConfig {
  tagName = RNText.tagName;
  shouldSetTextContent(nextProps: TextProps): boolean {
    return true;
  }
  createInstance(
    newProps: TextProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNText {
    const widget = new RNText();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNText,
    newProps: TextProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  finalizeInitialChildren(
    instance: RNText,
    newProps: TextProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitUpdate(
    instance: RNText,
    updatePayload: any,
    oldProps: TextProps,
    newProps: TextProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Text = registerComponent<TextProps>(new TextConfig());
