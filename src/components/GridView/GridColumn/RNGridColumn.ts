import { FunctionComponentElement } from "react";
import { Component, NodeWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../config";
import { RNGridRow } from "../GridRow/RNGridRow";

export type GridColumnProps = {
  /**
   * The number of horizontal units to occupy
   */
  width?: number;
};

const setGridColumnProps = (
  widget: RNGridColumn,
  parentRow: RNGridRow,
  newProps: GridColumnProps,
  oldProps: GridColumnProps
) => {
  console.log(newProps);

  if (widget.actualWidget) {
    parentRow.parentGrid?.layout?.addWidget(widget.actualWidget, 0, 0);
  }

  const setter: GridColumnProps = {};
  Object.assign(setter, newProps);
};

export class RNGridColumn extends Component implements RNComponent {
  native: any;
  actualWidget?: NodeWidget<any>;
  parentRow?: RNGridRow;
  initialProps?: GridColumnProps;

  setParentRowAndUpdateProps(parentRow: RNGridRow): void {
    this.parentRow = parentRow;
    setGridColumnProps(this, parentRow, this.initialProps ?? {}, {});
  }

  /* RNComponent */

  setProps(newProps: GridColumnProps, oldProps: GridColumnProps): void {
    if (this.parentRow) {
      setGridColumnProps(this, this.parentRow, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }
  appendInitialChild(child: NodeWidget<any>): void {
    if (this.actualWidget) {
      throw new Error("Grid column can have only one child");
    }
    this.actualWidget = child;
  }
  appendChild(child: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  removeChild(child: NodeWidget<any>): void {
    child.close();
    this.actualWidget = undefined;
  }
  static tagName: string = "gridcolumn";
}
