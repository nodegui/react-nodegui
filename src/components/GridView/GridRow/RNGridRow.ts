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
  childColumns: RNGridColumn[] = [];
  rowIndex?: number;

  setParentGridAndUpdateProps(parentGrid: RNGridView, index: number): void {
    this.parentGrid = parentGrid;
    this.rowIndex = index;
    setGridRowProps(
      this,
      parentGrid,
      this.initialProps ?? {
        children: [],
      },
      { children: [] }
    );

    this.updateChildren();
  }

  updateChildren(startIndex = 0): void {
    for (let i = startIndex; i < this.childColumns.length; i++) {
      const displacedChild = this.childColumns[i];

      console.log(displacedChild);
      displacedChild.setParentRowAndUpdateProps(this, i);
    }
  }

  /* RNComponent */

  setProps(newProps: GridRowProps, oldProps: GridRowProps): void {
    if (this.parentGrid) {
      setGridRowProps(this, this.parentGrid, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }
  appendInitialChild(child: RNGridColumn): void {
    this.appendChild(child);
  }
  appendChild(child: RNGridColumn): void {
    child.setParentRowAndUpdateProps(this, this.childColumns.length);

    this.childColumns.push(child);
  }
  insertBefore(child: RNGridColumn, beforeChild: RNGridColumn): void {
    const prevIndex = this.childColumns.indexOf(beforeChild);

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child GridColumn before nonexistent column"
      );
    }

    this.childColumns.splice(prevIndex, 0, child);
    // Update displaced children
    this.updateChildren(prevIndex);
  }
  removeChild(child: RNGridColumn): void {
    const prevIndex = this.childColumns.indexOf(child);

    if (prevIndex !== -1) {
      this.childColumns.splice(prevIndex, 1);
      this.updateChildren(prevIndex);
    }

    child.parentRow = undefined;
  }
  static tagName: string = "gridrow";
}
