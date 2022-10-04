import {
  QWidget,
  QBoxLayoutSignals,
  QBoxLayout,
  Direction,
  QLayout,
  QObjectSignals,
} from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { QDialog } from "@nodegui/nodegui/dist/lib/QtWidgets/QDialog";

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
      widget.layout()?.setDirection(direction);
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
  _children: Array<QWidget<any>> = [];

  layout(): QBoxLayout | null {
    return super.layout() as any;
  }

  setLayout(layout: QBoxLayout): void {
    super.setLayout(layout);
  }

  setProps(newProps: BoxViewProps, oldProps: BoxViewProps): void {
    if (this.layout()) {
      setBoxViewProps(this, newProps, oldProps);
    } else {
      this.initialProps = newProps;
    }
  }
  appendInitialChild(child: QWidget<any>): void {
    this.appendChild(child);
  }
  appendChild(child: QWidget<any>): void {
    if (child instanceof QDialog) {
      return;
    }
    const updateChild = () => {
      this.layout()?.addWidget(child);
      this._children.push(child);
    };

    if (this.layout()) {
      updateChild();

      return;
    }

    const layout = new QBoxLayout(Direction.LeftToRight);
    this.setLayout(layout);

    // Newly created layout, so set initial props
    if (this.initialProps) {
      setBoxViewProps(this, this.initialProps, {});
    }

    updateChild();
  }
  insertBefore(child: QWidget<any>, beforeChild: QWidget<any>): void {
    if (child instanceof QDialog) {
      return;
    }
    const prevIndex = this._children.indexOf(beforeChild);

    if (prevIndex === -1) {
      throw new Error(
        "Attempted to insert child Node before nonexistent child"
      );
    }

    this._children.splice(prevIndex, 0, child);
    this.layout()?.insertWidget(prevIndex, child);
  }
  removeChild(child: QWidget<any>): void {
    const prevIndex = this._children.indexOf(child);

    if (prevIndex !== -1) {
      this._children.splice(prevIndex, 1);
    }

    child.close();
  }
  static tagName: string = "boxview";
}
