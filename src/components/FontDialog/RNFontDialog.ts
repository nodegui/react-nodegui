import { FontDialogOption, QWidget, QFont, QFontDialog, QFontDialogSignals } from "@nodegui/nodegui";
import { throwUnsupported } from "../../utils/helpers";
import { RNWidget } from "../config";
import { DialogProps, setDialogProps } from "../Dialog/RNDialog";
import { DialogOption } from "../FileDialog/RNFileDialog";

export interface FontDialogProps extends DialogProps<QFontDialogSignals> {
  currentFont?: QFont;
  option?: DialogOption<FontDialogOption>;
  options?: FontDialogOption;
}

function setFontDialogProps(widget: RNFontDialog, newProps: FontDialogProps, oldProps: FontDialogProps) {
  const setter: FontDialogProps = {
    set currentFont(currentFont: QFont) {
      widget.setCurrentFont(currentFont);
    },
    set option({ option, on }: DialogOption<FontDialogOption>) {
      widget.setOption(option, on);
    },
    set options(options: FontDialogOption) {
      widget.setOptions(options);
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}

export class RNFontDialog extends QFontDialog implements RNWidget {
  setProps(newProps: FontDialogProps, oldProps: FontDialogProps): void {
    setFontDialogProps(this, newProps, oldProps);
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
  static tagName = "font-dialog";
}
