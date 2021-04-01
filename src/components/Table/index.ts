import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNTable, TableProps } from "./RNTable";
import { AppContainer } from "../../reconciler";

class TableConfig extends ComponentConfig {
  tagName = RNTable.tagName;
  shouldSetTextContent(nextProps: TableProps): boolean {
    return false;
  }
  createInstance(newProps: TableProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNTable {
    const widget = new RNTable(newProps.cellRange.row, newProps.cellRange.column);
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(instance: RNTable, newProps: TableProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNTable, updatePayload: any, oldProps: TableProps, newProps: TableProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Table = registerComponent<TableProps>(new TableConfig());
