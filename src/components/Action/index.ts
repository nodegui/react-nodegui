import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNAction, ActionProps } from "./RNAction";
import { AppContainer } from "../../reconciler";

class ActionConfig extends ComponentConfig {
  tagName = RNAction.tagName;
  shouldSetTextContent(nextProps: ActionProps): boolean {
    return false;
  }
  createInstance(
    newProps: ActionProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNAction {
    const widget = new RNAction();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNAction,
    newProps: ActionProps,
    internalInstanceHandle: any
  ): void {}
  commitUpdate(
    instance: RNAction,
    updatePayload: any,
    oldProps: ActionProps,
    newProps: ActionProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Action = registerComponent<ActionProps>(new ActionConfig());
