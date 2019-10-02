import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNScrollArea, ScrollAreaProps } from "./RNScrollArea";
import { AppContainer } from "../../reconciler";

class ScrollAreaConfig extends ComponentConfig {
  tagName = RNScrollArea.tagName;
  shouldSetTextContent(nextProps: ScrollAreaProps): boolean {
    return false;
  }
  createInstance(
    newProps: ScrollAreaProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNScrollArea {
    const widget = new RNScrollArea();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNScrollArea,
    newProps: ScrollAreaProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNScrollArea,
    updatePayload: any,
    oldProps: ScrollAreaProps,
    newProps: ScrollAreaProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const ScrollArea = registerComponent<ScrollAreaProps>(
  new ScrollAreaConfig()
);
