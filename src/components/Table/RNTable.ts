import { FlexLayout, NodeWidget, QTableWidget, QTableWidgetItem, QTableWidgetSignals, SortOrder } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { RNTableItem } from "../TableItem/RNTableItem";

export interface CellRange {
  row: number;
  column: number;
}
interface HorizontalHeader extends Omit<CellRange, "row"> {
  item: QTableWidgetItem;
}
interface VerticalHeader extends Omit<CellRange, "column"> {
  item: QTableWidgetItem;
}

interface CellWidget extends CellRange {
  widget: NodeWidget<any>;
}

interface Sort extends Omit<CellRange, "row"> {
  order?: SortOrder;
}

interface ColumnSize extends Omit<CellRange, "row"> {
  width: number;
}

interface RowSize extends Omit<CellRange, "column"> {
  width: number;
}

export interface TableProps extends ViewProps<QTableWidgetSignals> {
  cellRange: CellRange;
  horizontalHeaderItems?: HorizontalHeader[];
  horizontalHeaderLabels?: string[];
  verticalHeaderItems?: VerticalHeader[];
  verticalHeaderLabels?: string[];
  cellWidgets?: CellWidget[];
  currentCell?: CellRange;
  sortItems?: Sort;
  selectedColumn?: number;
  selectedRow?: number;
  showGrid?: boolean;
  columnWidth?: ColumnSize[];
  rowHeight?: RowSize[];
  sortingEnabled?: boolean;
  hideColumns?: number[];
  hideRows?: number[];
}

type CustomTableProps = Omit<TableProps, "cellRange">;

/**
 * @ignore
 */
export const setTableProps = (widget: RNTable, newProps: CustomTableProps, oldProps: CustomTableProps) => {
  const setter: CustomTableProps = {
    set horizontalHeaderItems(items: HorizontalHeader[]) {
      for (const item of items) {
        widget.setHorizontalHeaderItem(item.column, item.item);
      }
    },
    set horizontalHeaderLabels(labels: string[]) {
      widget.setHorizontalHeaderLabels(labels);
    },
    set verticalHeaderItems(items: VerticalHeader[]) {
      for (const item of items) {
        widget.setVerticalHeaderItem(item.row, item.item);
      }
    },
    set verticalHeaderLabels(labels: string[]) {
      widget.setVerticalHeaderLabels(labels);
    },
    set cellWidgets(cellWidgets: CellWidget[]) {
      for (const cellWidget of cellWidgets) {
        widget.setCellWidget(cellWidget.row, cellWidget.column, cellWidget.widget);
      }
    },
    set currentCell({ row, column }: CellRange) {
      widget.setCurrentCell(row, column);
    },
    set sortItems({ column, order }: Sort) {
      widget.sortItems(column, order);
    },
    set selectedColumn(column: number) {
      widget.selectColumn(column);
    },
    set selectedRow(row: number) {
      widget.selectRow(row);
    },
    set showGrid(showGrid: boolean) {
      widget.setShowGrid(showGrid);
    },
    set columnWidth(sizes: ColumnSize[]) {
      for (const { column, width } of sizes) {
        widget.setColumnWidth(column, width);
      }
    },
    set rowHeight(sizes: RowSize[]) {
      for (const { row, width } of sizes) {
        widget.setRowHeight(row, width);
      }
    },
    set sortingEnabled(sortingEnabled: boolean) {
      widget.setSortingEnabled(sortingEnabled);
    },
    set hideColumns(columns: number[]) {
      const totalColumns = widget.columnCount();
      for (const column of columns) {
        if (column > totalColumns || column < totalColumns) {
          console.warn(`${column} isn't within the range`);
        }
        widget.hideColumn(column);
      }
    },
    set hideRows(rows: number[]) {
      const totalRows = widget.rowCount();
      for (const row of rows) {
        if (row > totalRows || row < totalRows) {
          console.warn(`${row} isn't within the range`);
        }
        widget.hideRow(row);
      }
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNTable extends QTableWidget implements RNComponent {
  setProps(newProps: CustomTableProps, oldProps: CustomTableProps): void {
    setTableProps(this, newProps, oldProps);
  }
  removeChild(child: NodeWidget<any>): void {
    child.close();
  }
  appendInitialChild(child: RNTableItem): void {
    const { cellPosition } = child;
    if (!this.layout) {
      this.setLayout(new FlexLayout());
    }
    const row = this.rowCount();
    const column = this.columnCount();
    if (cellPosition[0] > row || cellPosition[1] > column) {
      console.warn("position of this TableItem isn't valid");
      return;
    }
    this.setItem(cellPosition[0], cellPosition[1], child);
  }
  appendChild(child: RNTableItem): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: RNTableItem, beforeChild: RNTableItem): void {
    this.appendInitialChild(child);
  }
  static tagName = "table";
}
