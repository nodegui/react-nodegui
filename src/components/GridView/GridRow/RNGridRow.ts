import { FunctionComponentElement } from "react";
import { GridColumnProps, RNGridColumn } from "../GridColumn/RNGridColumn";
import { Component } from "@nodegui/nodegui";
import { RNComponent } from "../../config";
import { RNGridView } from "../RNGridView";
import {
  DataWithOffset,
  updateDisplacedChildren,
  offsetForIndex,
} from "../utils";

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
  newProps: Omit<GridRowProps, "children">,
  oldProps: Omit<GridRowProps, "children">
) => {
  const setter: Omit<GridRowProps, "children"> = {
    set height(height: number) {
      widget.height = height;
    },
  };
  Object.assign(setter, newProps);
};

export class RNGridRow extends Component implements RNComponent {
  native: any;
  parentGrid?: RNGridView;
  latestProps?: GridRowProps;
  prevProps?: GridRowProps;
  childColumns: Array<DataWithOffset<RNGridColumn>> = [];
  rowIndex?: number;
  height?: number;

  setParentGridAndUpdateProps(parentGrid: RNGridView, index: number): void {
    this.parentGrid = parentGrid;
    this.rowIndex = index;
    setGridRowProps(
      this,
      parentGrid,
      this.latestProps ?? {},
      this.prevProps ?? {}
    );

    this.updateChildren();
  }

  updateChildren(startIndex = 0): void {
    updateDisplacedChildren<RNGridColumn, RNGridRow>(
      startIndex,
      this.childColumns,
      this,
      "width",
      "setParentRowAndUpdateProps"
    );
  }

  remove(): void {
    this.childColumns.forEach(({ data }) => data.remove());
  }

  /* RNComponent */

  setProps(newProps: GridRowProps, oldProps: GridRowProps): void {
    if (this.parentGrid) {
      setGridRowProps(this, this.parentGrid, newProps, oldProps);
    }

    this.latestProps = newProps;
    this.prevProps = oldProps;
  }
  appendInitialChild(child: RNGridColumn): void {
    this.appendChild(child);
  }
  appendChild(child: RNGridColumn): void {
    if (!(child instanceof RNGridColumn)) {
      throw new Error("GridColumn is the only supported child of GridRow");
    }

    const offset = offsetForIndex<RNGridColumn>(
      this.childColumns.length,
      this.childColumns,
      "width"
    );

    child.setParentRowAndUpdateProps(this, offset);

    this.childColumns.push({
      offset,
      data: child,
    });
  }
  insertBefore(child: RNGridColumn, beforeChild: RNGridColumn): void {
    const prevIndex = this.childColumns.findIndex(
      ({ data }) => data === beforeChild
    );

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child GridColumn before nonexistent column"
      );
    }

    const offset = offsetForIndex<RNGridColumn>(
      prevIndex,
      this.childColumns,
      "width"
    );

    this.childColumns.splice(prevIndex, 0, {
      offset,
      data: child,
    });
    // Update displaced children
    this.updateChildren(prevIndex);
  }
  removeChild(child: RNGridColumn): void {
    const prevIndex = this.childColumns.findIndex(({ data }) => data === child);

    if (prevIndex !== -1) {
      this.childColumns.splice(prevIndex, 1);
      this.updateChildren(prevIndex);
    }

    // Actually remove child from layout
    child.remove();
    child.parentRow = undefined;
  }
  static tagName: string = "gridrow";
}
