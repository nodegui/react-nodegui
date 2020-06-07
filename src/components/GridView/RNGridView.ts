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

  setProps(newProps: GridViewProps, oldProps: GridViewProps): void {
    setGridViewProps(this, newProps, oldProps);
  }
  appendInitialChild(child: RNGridRow): void {
    this.appendChild(child);
  }
  appendChild(child: RNGridRow): void {
    if (this.layout) {
      // Update child before bailing, just in case
      child.setParentGridAndUpdateProps(this);

      return;
    }

    const layout = new QGridLayout();
    this.setLayout(layout);
    this.layout = layout;

    child.setParentGridAndUpdateProps(this);
  }
  insertBefore(child: RNGridRow, beforeChild: RNGridRow): void {
    this.appendChild(child);
  }
  removeChild(child: RNGridRow): void {
    child.parentGrid = undefined;
  }
  static tagName: string = "gridview";
}

// export class RNGridView extends QWidget implements RNWidget {
//   setProps(newProps: ViewProps<any>, oldProps: ViewProps<any>): void {
//     setViewProps(this, newProps, oldProps);
//   }
//   insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
//     if (!this.layout) {
//       console.warn("parent has no layout to insert child before another child");
//       return;
//     }
//     (this.layout as any).insertChildBefore(child, beforeChild);
//   }
//   static tagName = "gridview";
//   appendInitialChild(child: NodeWidget<any>): void {
//     console.log("View initial");
//     this.appendChild(child);
//   }
//   appendChild(child: NodeWidget<any>): void {
//     if (!child) {
//       return;
//     }
//     if (!this.layout) {
//       const flexLayout = new FlexLayout();
//       flexLayout.setFlexNode(this.getFlexNode());
//       this.setLayout(flexLayout);
//       this.layout = flexLayout;
//     }
//     this.layout.addWidget(child);
//   }
//   removeChild(child: NodeWidget<any>) {
//     if (!this.layout) {
//       console.warn("parent has no layout to remove child from");
//       return;
//     }
//     this.layout.removeWidget(child);
//     child.close();
//   }
// }
