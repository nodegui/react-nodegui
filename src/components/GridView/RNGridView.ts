import { FunctionComponentElement } from "react";
import { QGridLayoutSignals, QGridLayout, QWidget } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { RNGridRow, GridRowProps } from "./GridRow/RNGridRow";
import {
  DataWithOffset,
  offsetForIndex,
  updateDisplacedChildren,
} from "./utils";

export interface GridViewProps extends ViewProps<QGridLayoutSignals> {
  children:
    | Array<FunctionComponentElement<GridRowProps>>
    | FunctionComponentElement<GridRowProps>;
}

const setGridViewProps = (
  widget: RNGridView,
  newProps: GridViewProps,
  oldProps: GridViewProps
) => {
  const setter: GridViewProps = {
    set children(
      children:
        | Array<FunctionComponentElement<GridRowProps>>
        | FunctionComponentElement<GridRowProps>
    ) {},
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNGridView extends QWidget implements RNComponent {
  native: any;
  layout?: QGridLayout;
  childRows: Array<DataWithOffset<RNGridRow>> = [];

  updateChildren(startIndex = 0): void {
    updateDisplacedChildren<RNGridRow, RNGridView>(
      startIndex,
      this.childRows,
      this,
      "height",
      "setParentGridAndUpdateProps"
    );
  }

  /* RNComponent */

  setProps(newProps: GridViewProps, oldProps: GridViewProps): void {
    setGridViewProps(this, newProps, oldProps);
  }
  appendInitialChild(child: RNGridRow): void {
    this.appendChild(child);
  }
  appendChild(child: RNGridRow): void {
    if (!(child instanceof RNGridRow)) {
      throw new Error("GridRow is the only supported child of GridView");
    }

    const updateChild = () => {
      const offset = offsetForIndex<RNGridRow>(
        this.childRows.length,
        this.childRows,
        "height"
      );

      child.setParentGridAndUpdateProps(this, offset);

      this.childRows.push({
        offset,
        data: child,
      });
    };

    if (this.layout) {
      updateChild();

      return;
    }

    const layout = new QGridLayout();
    this.setLayout(layout);
    this.layout = layout;

    updateChild();
  }
  insertBefore(child: RNGridRow, beforeChild: RNGridRow): void {
    const prevIndex = this.childRows.findIndex(
      ({ data }) => data === beforeChild
    );

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child GridRow before nonexistent row"
      );
    }

    const offset = offsetForIndex<RNGridRow>(
      prevIndex,
      this.childRows,
      "height"
    );

    this.childRows.splice(prevIndex, 0, {
      offset,
      data: child,
    });
    // Update displaced children
    this.updateChildren(prevIndex);
  }
  removeChild(child: RNGridRow): void {
    const prevIndex = this.childRows.findIndex(({ data }) => data === child);

    if (prevIndex !== -1) {
      this.childRows.splice(prevIndex, 1);
      this.updateChildren(prevIndex);
    }

    child.parentGrid = undefined;
  }
  static tagName: string = "gridview";
}
