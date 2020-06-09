import { ComponentConfig, registerComponent } from "../config";
import { RNBoxView, BoxViewProps } from "./RNBoxView";
import { AppContainer } from "../../reconciler";
import { Fiber } from "react-reconciler";

class BoxViewConfig extends ComponentConfig {
  tagName = RNBoxView.tagName;
  shouldSetTextContent(nextProps: BoxViewProps): boolean {
    return false;
  }
  createInstance(
    newProps: BoxViewProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNBoxView {
    const widget = new RNBoxView();
    widget.setProps(newProps, {});
    return widget;
  }
  finalizeInitialChildren(
    instance: RNBoxView,
    newProps: BoxViewProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: RNBoxView,
    newProps: BoxViewProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
  }
  commitUpdate(
    instance: RNBoxView,
    updatePayload: any,
    oldProps: BoxViewProps,
    newProps: BoxViewProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const BoxView = registerComponent<BoxViewProps>(new BoxViewConfig());
