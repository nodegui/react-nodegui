import { FunctionComponentElement } from "react";
import { QGridLayoutSignals, QGridLayout, QWidget } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { RNGridRow, GridRowProps } from "./GridRow/RNGridRow";

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
  childRows: RNGridRow[] = [];

  updateChildren(startIndex = 0): void {
    for (let i = startIndex; i < this.childRows.length; i++) {
      const displacedChild = this.childRows[i];

      displacedChild.setParentGridAndUpdateProps(this, i);
    }
  }

  /* RNComponent */

  setProps(newProps: GridViewProps, oldProps: GridViewProps): void {
    setGridViewProps(this, newProps, oldProps);
  }
  appendInitialChild(child: RNGridRow): void {
    this.appendChild(child);
  }
  appendChild(child: RNGridRow): void {
    const updateChild = () => {
      child.setParentGridAndUpdateProps(this, this.childRows.length);

      this.childRows.push(child);
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
    const prevIndex = this.childRows.indexOf(beforeChild);

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child GridRow before nonexistent row"
      );
    }

    this.childRows.splice(prevIndex, 0, child);
    // Update displaced children
    this.updateChildren(prevIndex);
  }
  removeChild(child: RNGridRow): void {
    const prevIndex = this.childRows.indexOf(child);

    if (prevIndex !== -1) {
      this.childRows.splice(prevIndex, 1);
      this.updateChildren(prevIndex);
    }

    child.parentGrid = undefined;
  }
  static tagName: string = "gridview";
}
