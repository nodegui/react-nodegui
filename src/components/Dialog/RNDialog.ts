import { FlexLayout, FocusReason, NodeWidget, QDialog, QDialogSignals, QFont } from "@nodegui/nodegui";
import { NodeDialog } from "@nodegui/nodegui/dist/lib/QtWidgets/QDialog";
import { RNWidget } from "../config";
import { setViewProps, ViewProps } from "../View/RNView";

export interface DialogProps<T = QDialogSignals> extends ViewProps<T> {
  open?: boolean;
  font?: QFont;
  focus?: FocusReason;
  modal?: boolean;
  result?: number;
  reject?: boolean;
  enableSizeGrip?: boolean;
}

export function setDialogProps(widget: RNDialog, newProps: DialogProps, oldProps: DialogProps) {
  const setter: DialogProps = {
    set open(open: boolean) {
      open ? widget.open() : widget.close();
    },
    set font(font: QFont) {
      widget.setFont(font);
    },
    set focus(focus: FocusReason) {
      widget.setFocus(focus);
    },
    set modal(modal: boolean) {
      widget.setModal(modal);
    },
    set reject(reject: boolean) {
      reject && widget.reject();
    },
    set result(result: number) {
      widget.setResult(result);
    },
    set enableSizeGrip(sizeGrip: boolean) {
      widget.setSizeGripEnabled(sizeGrip);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
}

export class RNDialog extends QDialog implements RNWidget {
  setProps(newProps: DialogProps, oldProps: DialogProps): void {
    setDialogProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget<any>): void {
    this.appendChild(child);
  }
  appendChild(child: NodeWidget<any>): void {
    if (!child || child instanceof NodeDialog) {
      return;
    }
    if (!this.layout) {
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(this.getFlexNode());
      this.setLayout(flexLayout);
      this.layout = flexLayout;
    }
    this.layout.addWidget(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    if (child! instanceof NodeDialog) {
      this.appendChild(child);
    }
  }
  removeChild(child: NodeWidget<any>): void {
    if (!this.layout) {
      console.warn("parent has no layout to remove child from");
      return;
    }
    this.layout.removeWidget(child);
    child.close();
  }
  static tagName = "dialog";
}
