import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNProgressBar, ProgressBarProps } from "./RNProgressBar";
import { AppContainer } from "../../reconciler";
class ProgressBarConfig extends ComponentConfig {
  tagName = RNProgressBar.tagName;
  shouldSetTextContent(nextProps: ProgressBarProps): boolean {
    return false;
  }
  createInstance(
    newProps: ProgressBarProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNProgressBar {
    const widget = new RNProgressBar();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNProgressBar,
    newProps: ProgressBarProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNProgressBar,
    updatePayload: any,
    oldProps: ProgressBarProps,
    newProps: ProgressBarProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const ProgressBar = registerComponent<ProgressBarProps>(
  new ProgressBarConfig()
);
