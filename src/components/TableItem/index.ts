import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNTableItem, TableItemProps } from "./RNTableItem";
import { AppContainer } from "../../reconciler";
import { CellRange } from "../Table/RNTable";

class TableItemConfig extends ComponentConfig {
  tagName = RNTableItem.tagName;
  shouldSetTextContent(nextProps: TableItemProps): boolean {
    return true;
  }
  createInstance(newProps: TableItemProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNTableItem {
    const widget = new RNTableItem();
    widget.setProps(newProps, { cellPosition: [0, 0] });
    return widget;
  }
  commitUpdate(instance: RNTableItem, updatePayload: any, oldProps: TableItemProps, newProps: TableItemProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}

export const TableItem = registerComponent<TableItemProps>(new TableItemConfig());
