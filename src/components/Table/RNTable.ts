import { FlexLayout, QWidget, QTableWidget, QTableWidgetItem, QTableWidgetSignals, SortOrder } from "@nodegui/nodegui";
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
  widget: QWidget<any>;
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

function verifyRanges({ row: rowCount, column: columnCount }: CellRange, { row, column }: Partial<CellRange>) {
  if (row && (row < 0 || row > rowCount - 1)) {
    console.warn(`Row "${row}" is out of range "${rowCount - 1}"`);
  }
  if (column && (column < 0 || column > columnCount - 1)) {
    console.warn(`Column "${column}" is out range "${columnCount - 1}"`);
  }
}

/**
 * @ignore
 */
export const setTableProps = (widget: RNTable, newProps: CustomTableProps, oldProps: CustomTableProps) => {
  const cellRange: CellRange = {
    row: widget.rowCount(),
    column: widget.columnCount(),
  };

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
      for (const { row, item } of items) {
        verifyRanges(cellRange, { row });
        widget.setVerticalHeaderItem(row, item);
      }
    },
    set verticalHeaderLabels(labels: string[]) {
      widget.setVerticalHeaderLabels(labels);
    },
    set cellWidgets(cellWidgets: CellWidget[]) {
      for (const { column, row, widget: cellWidget } of cellWidgets) {
        verifyRanges(cellRange, { row, column });
        widget.setCellWidget(row, column, cellWidget);
      }
    },
    set currentCell({ row, column }: CellRange) {
      verifyRanges(cellRange, { row, column });
      widget.setCurrentCell(row, column);
    },
    set sortItems({ column, order }: Sort) {
      verifyRanges(cellRange, { column });
      widget.sortItems(column, order);
    },
    set selectedColumn(column: number) {
      verifyRanges(cellRange, { column });
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
        verifyRanges(cellRange, { column });
        widget.setColumnWidth(column, width);
      }
    },
    set rowHeight(sizes: RowSize[]) {
      for (const { row, width } of sizes) {
        verifyRanges(cellRange, { row });
        widget.setRowHeight(row, width);
      }
    },
    set sortingEnabled(sortingEnabled: boolean) {
      widget.setSortingEnabled(sortingEnabled);
    },
    set hideColumns(columns: number[]) {
      for (const column of columns) {
        verifyRanges(cellRange, { column });
        widget.hideColumn(column);
      }
    },
    set hideRows(rows: number[]) {
      for (const row of rows) {
        verifyRanges(cellRange, { row });
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
  removeChild(child: QWidget<any>): void {
    child.close();
  }
  appendInitialChild(child: RNTableItem): void {
    const { cellPosition } = child;
    if (!this.layout()) {
      this.setLayout(new FlexLayout());
    }
    const row = this.rowCount();
    const column = this.columnCount();
    verifyRanges({ row, column }, { row: cellPosition[0], column: cellPosition[1] });
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
