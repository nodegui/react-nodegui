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
/**
 * React implementation of nodegui's [QTableWidget](https://docs.nodegui.org/docs/api/generated/classes/qtablewidget/)
 * @property `cellRange` define the number of rows & columns to create
 * @example
 * ```javascriptreact
 * return (
 *    <Table
          cellRange={{ row: 2, column: 2 }} // 2 x 2 = 4 cells
          style="flex: 1;"
          horizontalHeaderLabels={["What", "How", "When"]}
          verticalHeaderLabels={["yes", "this", "later"]}
          hideRows={[0]} //hides 0 indexed rows
        >
          <TableItem cellPosition={[0, 0]} text="1" toolTip="Tooltip"/>
          <TableItem cellPosition={[0, 1]} text="2"/>
          <TableItem cellPosition={[1, 0]} text="3"/>
          <TableItem cellPosition={[1, 1]} text="4"/>
      </Table>
 * )
 * ```
 */

export const Table = registerComponent<TableProps>(new TableConfig());
