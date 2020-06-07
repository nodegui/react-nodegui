import { FunctionComponentElement } from "react";
import { GridColumnProps, RNGridColumn } from "../GridColumn/RNGridColumn";
import { Component } from "@nodegui/nodegui";
import { RNComponent } from "../../config";
import { RNGridView } from "../RNGridView";

export type GridRowProps = {
  children:
    | Array<FunctionComponentElement<GridColumnProps>>
    | FunctionComponentElement<GridColumnProps>;

  /**
   * The number of vertical units to occupy
   */
  height?: number;
};

const setGridRowProps = (
  widget: RNGridRow,
  parentGrid: RNGridView,
  newProps: GridRowProps,
  oldProps: GridRowProps
) => {
  const setter: GridRowProps = {
    set children(
      children:
        | Array<FunctionComponentElement<GridColumnProps>>
        | FunctionComponentElement<GridColumnProps>
    ) {},
  };
  Object.assign(setter, newProps);
};

export class RNGridRow extends Component implements RNComponent {
  native: any;
  parentGrid?: RNGridView;
  initialProps?: GridRowProps;
  childColumns: Set<RNGridColumn> = new Set();

  setParentGridAndUpdateProps(parentGrid: RNGridView): void {
    this.parentGrid = parentGrid;
    setGridRowProps(
      this,
      parentGrid,
      this.initialProps ?? {
        children: [],
      },
      { children: [] }
    );

    console.log(this.childColumns);
    this.childColumns.forEach((child) =>
      child.setParentRowAndUpdateProps(this)
    );
  }

  /* RNComponent */

  setProps(newProps: GridRowProps, oldProps: GridRowProps): void {
    console.log("Set row");
    if (this.parentGrid) {
      setGridRowProps(this, this.parentGrid, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }
  appendInitialChild(child: RNGridColumn): void {
    this.childColumns.add(child);

    console.log("Grid row initial child");
    child.setParentRowAndUpdateProps(this);
  }
  appendChild(child: RNGridColumn): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: RNGridColumn, beforeChild: RNGridColumn): void {
    this.appendInitialChild(child);
  }
  removeChild(child: RNGridColumn): void {
    child.parentRow = undefined;
    this.childColumns.delete(child);
  }
  static tagName: string = "gridrow";
}
