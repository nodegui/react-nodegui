import { Fiber } from "react-reconciler";
import { GridColumnProps, RNGridColumn } from "./RNGridColumn";
import { AppContainer } from "../../../reconciler";
import { registerComponent, ComponentConfig } from "../../config";

class GridColumnConfig extends ComponentConfig {
  tagName = RNGridColumn.tagName;
  shouldSetTextContent(nextProps: GridColumnProps): boolean {
    return false;
  }
  createInstance(
    newProps: GridColumnProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNGridColumn {
    const widget = new RNGridColumn();
    widget.setProps(newProps, newProps);
    return widget;
  }
  finalizeInitialChildren(
    instance: RNGridColumn,
    newProps: GridColumnProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: RNGridColumn,
    newProps: GridColumnProps,
    internalInstanceHandle: any
  ): void {
    return;
  }
  commitUpdate(
    instance: RNGridColumn,
    updatePayload: any,
    oldProps: GridColumnProps,
    newProps: GridColumnProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const GridColumn = registerComponent<GridColumnProps>(
  new GridColumnConfig()
);
