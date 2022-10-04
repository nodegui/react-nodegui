import { QWidget, QErrorMessage, QErrorMessageSignals } from "@nodegui/nodegui";
import { throwUnsupported } from "../../utils/helpers";
import { RNWidget } from "../config";
import { DialogProps, setDialogProps } from "../Dialog/RNDialog";

export interface ErrorPromptProps extends DialogProps<QErrorMessageSignals> {
  message: string;
}

function setErrorPromptProps(widget: RNErrorPrompt, newProps: ErrorPromptProps, oldProps: ErrorPromptProps) {
  const setter: ErrorPromptProps = {
    set message(message: string) {
      widget.showMessage(message);
      widget.close();
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}

export class RNErrorPrompt extends QErrorMessage implements RNWidget {
  setProps(newProps: ErrorPromptProps, oldProps: ErrorPromptProps): void {
    setErrorPromptProps(this, newProps, oldProps);
  }
  appendInitialChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: QWidget<any>, beforeChild: QWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "error-prompt";
}
