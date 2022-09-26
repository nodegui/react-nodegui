import { Fiber } from "react-reconciler";
import { AppContainer } from "../../../reconciler";
import { registerComponent, ComponentConfig } from "../../config";
import { RNGridRow, GridRowProps } from "./RNGridRow";

class GridRowConfig extends ComponentConfig {
  tagName = RNGridRow.tagName;
  shouldSetTextContent(nextProps: GridRowProps): boolean {
    return false;
  }
  createInstance(
    newProps: GridRowProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNGridRow {
    const widget = new RNGridRow(null!);
    widget.setProps(newProps, newProps);
    return widget;
  }
  finalizeInitialChildren(
    instance: RNGridRow,
    newProps: GridRowProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: RNGridRow,
    newProps: GridRowProps,
    internalInstanceHandle: any
  ): void {
    return;
  }
  commitUpdate(
    instance: RNGridRow,
    updatePayload: any,
    oldProps: GridRowProps,
    newProps: GridRowProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const GridRow = registerComponent<GridRowProps>(new GridRowConfig());
