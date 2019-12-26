import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNView, ViewProps } from "./RNView";
import { AppContainer } from "../../reconciler";
import { QWidgetSignals } from "@nodegui/nodegui";
class ViewConfig extends ComponentConfig {
  tagName = RNView.tagName;
  shouldSetTextContent() {
    return false;
  }
  createInstance(
    newProps: ViewProps<QWidgetSignals>,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNView {
    const widget = new RNView();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNView,
    newProps: ViewProps<QWidgetSignals>,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNView,
    updatePayload: any,
    oldProps: ViewProps<QWidgetSignals>,
    newProps: ViewProps<QWidgetSignals>,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const View = registerComponent<ViewProps<QWidgetSignals>>(
  new ViewConfig()
);
