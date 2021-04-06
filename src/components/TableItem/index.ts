import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNTableItem, TableItemProps } from "./RNTableItem";
import { AppContainer } from "../../reconciler";

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
/**
 * React implementation of nodegui's [QTableWidgetItem](https://docs.nodegui.org/docs/api/generated/classes/qtablewidgetitem)
 * 
 * Can only be used as a child of `<Table/>`
 * @property `cellPosition` valid position of the item in the Table
 */

export const TableItem = registerComponent<TableItemProps>(new TableItemConfig());
