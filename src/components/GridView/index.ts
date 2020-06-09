import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { RNGridView, GridViewProps } from "./RNGridView";

class GridViewConfig extends ComponentConfig {
  tagName = RNGridView.tagName;
  shouldSetTextContent(nextProps: GridViewProps): boolean {
    return false;
  }
  createInstance(
    newProps: GridViewProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNGridView {
    const widget = new RNGridView();
    widget.setProps(newProps, {
      children: [],
    });
    return widget;
  }
  finalizeInitialChildren(
    instance: RNGridView,
    newProps: GridViewProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: RNGridView,
    newProps: GridViewProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
  }
  commitUpdate(
    instance: RNGridView,
    updatePayload: any,
    oldProps: GridViewProps,
    newProps: GridViewProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const GridView = registerComponent<GridViewProps>(new GridViewConfig());
