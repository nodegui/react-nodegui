import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNDial, DialProps } from "./RNDial";
import { AppContainer } from "../../reconciler";
class DialConfig extends ComponentConfig {
  tagName = RNDial.tagName;
  shouldSetTextContent(nextProps: DialProps): boolean {
    return true;
  }
  createInstance(
    newProps: DialProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNDial {
    const widget = new RNDial();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNDial,
    newProps: DialProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNDial,
    updatePayload: any,
    oldProps: DialProps,
    newProps: DialProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Dial = registerComponent<DialProps>(new DialConfig());
