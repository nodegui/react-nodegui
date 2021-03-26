import { NodeWidget, QProgressDialog, QProgressDialogSignals } from "@nodegui/nodegui";
import { throwUnsupported } from "../../utils/helpers";
import { RNWidget } from "../config";
import { DialogProps, setDialogProps } from "../Dialog/RNDialog";

interface ProgressBarRange {
  max: number;
  min: number;
}

export interface ProgressDialogProps extends DialogProps<QProgressDialogSignals> {
  autoClose?: boolean;
  autoReset?: boolean;
  cancelButtonText?: string;
  labelText?: string;
  maxValue?: number;
  minValue?: number;
  /**
   * This property holds the time(`in milliseconds`) that must pass before the dialog appears.
   * 
   * https://doc.qt.io/qt-5/qprogressdialog.html#minimumDuration-prop
   * @default 4
   */
  minDuration?: number;
  range?: ProgressBarRange;
  value?: number;
  /**
   * Set this to `false` to allow the progress dialog opening
   * automatically when window first mounts
   */
  shouldReset?: boolean;
}

function setProgressDialogProps(widget: RNProgressDialog, newProps: ProgressDialogProps, oldProps: ProgressDialogProps) {
  const setter: ProgressDialogProps = {
    set shouldReset(shouldReset: boolean) {
      shouldReset && widget.reset();
    },
    set autoClose(autoClose: boolean) {
      widget.setAutoClose(autoClose);
    },
    set autoReset(autoReset: boolean) {
      widget.setAutoReset(autoReset);
    },
    set cancelButtonText(cancelButtonText: string) {
      widget.setCancelButtonText(cancelButtonText);
    },
    set labelText(labelText: string) {
      widget.setLabelText(labelText);
    },
    set maxValue(maxValue: number) {
      widget.setMaximum(maxValue);
    },
    set minValue(minValue: number) {
      widget.setMinimum(minValue);
    },
    set minDuration(minDuration: number) {
      widget.setMinimumDuration(minDuration);
    },
    set range({ max, min }: ProgressBarRange) {
      widget.setRange(min, max);
    },
    set value(value: number) {
      widget.setValue(value);
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}

export class RNProgressDialog extends QProgressDialog implements RNWidget {
  setProps(newProps: ProgressDialogProps, oldProps: ProgressDialogProps): void {
    setProgressDialogProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "progress-dialog";
}
