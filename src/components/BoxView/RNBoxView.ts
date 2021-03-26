import {
  QWidget,
  QBoxLayoutSignals,
  QBoxLayout,
  NodeWidget,
  Direction,
} from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { NodeDialog } from "@nodegui/nodegui/dist/lib/QtWidgets/QDialog";

export interface BoxViewProps extends ViewProps<QBoxLayoutSignals> {
  direction?: Direction;
}

const setBoxViewProps = (
  widget: RNBoxView,
  newProps: BoxViewProps,
  oldProps: BoxViewProps
) => {
  const setter: BoxViewProps = {
    set direction(direction: Direction) {
      widget.layout?.setDirection(direction);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNBoxView extends QWidget implements RNComponent {
  native: any;
  initialProps?: BoxViewProps;
  children: Array<NodeWidget<any>> = [];
  get layout() {
    return super.layout as QBoxLayout | undefined;
  }
  set layout(l: QBoxLayout | undefined) {
    super.layout = l;
  }
  setProps(newProps: BoxViewProps, oldProps: BoxViewProps): void {
    if (this.layout) {
      setBoxViewProps(this, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }
  appendInitialChild(child: NodeWidget<any>): void {
    this.appendChild(child);
  }
  appendChild(child: NodeWidget<any>): void {
    if (child instanceof NodeDialog) {
      return;
    }
    const updateChild = () => {
      this.layout?.addWidget(child);
      this.children.push(child);
    };

    if (this.layout) {
      updateChild();

      return;
    }

    const layout = new QBoxLayout(Direction.LeftToRight);
    this.setLayout(layout);
    this.layout = layout;

    // Newly created layout, so set initial props
    if (this.initialProps) {
      setBoxViewProps(this, this.initialProps, {});
    }

    updateChild();
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    if (child instanceof NodeDialog) {
      return;
    }
    const prevIndex = this.children.indexOf(beforeChild);

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child Node before nonexistent child"
      );
    }

    this.children.splice(prevIndex, 0, child);
    this.layout?.insertWidget(prevIndex, child);
  }
  removeChild(child: NodeWidget<any>): void {
    const prevIndex = this.children.indexOf(child);

    if (prevIndex !== -1) {
      this.children.splice(prevIndex, 1);
    }

    child.close();
  }
  static tagName: string = "boxview";
}
