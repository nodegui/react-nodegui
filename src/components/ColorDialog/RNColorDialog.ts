import { QWidget, QColor, QColorDialog, QColorDialogSignals } from "@nodegui/nodegui";
import { ColorDialogOption } from "@nodegui/nodegui/dist/lib/QtWidgets/QColorDialog";
import { throwUnsupported } from "../../utils/helpers";
import { RNWidget } from "../config";
import { DialogProps, setDialogProps } from "../Dialog/RNDialog";
import { DialogOption } from "../FileDialog/RNFileDialog";

export interface ColorDialogProps extends DialogProps<QColorDialogSignals> {
  currentColor?: QColor;
  option?: DialogOption<ColorDialogOption>;
  options?: ColorDialogOption;
}

function setColorDialogProps(widget: RNColorDialog, newProps: ColorDialogProps, oldProps: ColorDialogProps) {
  const setter: ColorDialogProps = {
    set currentColor(currentColor: QColor) {
      widget.setCurrentColor(currentColor);
    },
    set option({ option, on }: DialogOption<ColorDialogOption>) {
      widget.setOption(option, on);
    },
    set options(options: ColorDialogOption) {
      widget.setOptions(options);
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}

export class RNColorDialog extends QColorDialog implements RNWidget {
  setProps(newProps: ColorDialogProps, oldProps: ColorDialogProps): void {
    setColorDialogProps(this, newProps, oldProps);
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
  static tagName = "color-dialog";
}
