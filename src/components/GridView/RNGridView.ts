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

export type GridViewColumnProps = {
  [ColumnIndex: number]: {
    stretch?: number;
    minWidth?: number;
  };
};

export type GridViewRowProps = {
  [RowIndex: number]: {
    stretch?: number;
    minHeight?: number;
  };
};

export interface GridViewProps extends ViewProps<QGridLayoutSignals> {
  children:
    | Array<FunctionComponentElement<GridRowProps>>
    | FunctionComponentElement<GridRowProps>;

  columnProps?: GridViewColumnProps;
  rowProps?: GridViewRowProps;

  horizontalSpacing?: number;
  verticalSpacing?: number;
}

const setGridViewProps = (
  widget: RNGridView,
  newProps: Omit<GridViewProps, "children">,
  oldProps: Omit<GridViewProps, "children">
) => {
  const setter: Omit<GridViewProps, "children"> = {
    set horizontalSpacing(spacing: number) {
      widget.layout?.setHorizontalSpacing(spacing);
    },
    set verticalSpacing(spacing: number) {
      widget.layout?.setVerticalSpacing(spacing);
    },
    set columnProps(props: GridViewColumnProps) {
      for (const indexString of Object.keys(props)) {
        const index = parseInt(indexString, 10);
        const { stretch, minWidth } = props[index];

        widget.layout?.setColumnStretch(index, stretch ?? 0);
        widget.layout?.setColumnMinimumWidth(index, minWidth ?? 0);
      }
    },
    set rowProps(props: GridViewRowProps) {
      for (const indexString of Object.keys(props)) {
        const index = parseInt(indexString, 10);
        const { stretch, minHeight } = props[index];

        widget.layout?.setRowStretch(index, stretch ?? 0);
        widget.layout?.setRowMinimumHeight(index, minHeight ?? 0);
      }
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNGridView extends QWidget implements RNComponent {
  native: any;
  _layout?: QGridLayout;
  initialProps?: GridViewProps;
  childRows: Array<DataWithOffset<RNGridRow>> = [];

  get layout() {
    return this._layout;
  }

  set layout(l: QGridLayout | undefined) {
    this._layout = l;
  }

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
    if (this.layout) {
      setGridViewProps(this, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
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

    // Newly created layout, so set initial props
    if (this.initialProps) {
      setGridViewProps(this, this.initialProps, {});
    }

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

    child.remove();
    child.parentGrid = undefined;
  }
  static tagName: string = "gridview";
}
