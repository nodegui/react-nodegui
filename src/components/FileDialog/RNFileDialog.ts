import { QWidget, QFileDialog, DialogLabel, QFileDialogSignals, Option } from "@nodegui/nodegui";
import { throwUnsupported } from "../../utils/helpers";
import { RNWidget } from "../config";
import { DialogProps, setDialogProps } from "../Dialog/RNDialog";

export interface FileDialogLabelText{
  label: DialogLabel,
  text: string
}

export interface DialogOption<T=Option> {
  option: T;
  on: boolean;
}

export interface FileDialogProps extends DialogProps<QFileDialogSignals>{
  defaultSuffix?: string;
  supportedSchemes?: string[];
  labelText?: FileDialogLabelText;
  option?: DialogOption,
  options?: Option
}

function setFileDialogProps(widget: RNFileDialog, newProps: FileDialogProps, oldProps: FileDialogProps) {
  const setter: FileDialogProps = {
    set defaultSuffix(defaultSuffix: string) {
      widget.setDefaultSuffix(defaultSuffix);
    },
    set supportedSchemes(supportedSchemes: string[]) {
      widget.setSupportedSchemes(supportedSchemes);
    },
    set labelText(labelText: FileDialogLabelText) {
      widget.setLabelText(labelText.label, labelText.text);
    },
    set option({option, on}: DialogOption) {
      widget.setOption(option, on)
    },
    set options(options: Option) {
      widget.setOptions(options);
    }
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}

export class RNFileDialog extends QFileDialog implements RNWidget {
  setProps(newProps: FileDialogProps, oldProps: FileDialogProps): void {
    setFileDialogProps(this, newProps, oldProps);
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
  static tagName = "file-dialog";
}
