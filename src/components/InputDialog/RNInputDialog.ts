import { EchoMode, InputDialogOptions, InputMode, QWidget, QInputDialog, QInputDialogSignals } from "@nodegui/nodegui";
import { throwUnsupported } from "../../utils/helpers";
import { RNWidget } from "../config";
import { DialogProps, setDialogProps } from "../Dialog/RNDialog";

export interface InputDialogProps extends DialogProps<QInputDialogSignals>{
  cancelButtonText?: string,
  comboBoxEditable?: boolean,
  doubleDecimals?: number,
  doubleMax?: number,
  doubleMin?: number,
  doubleStep?: number,
  doubleValue?: number,
  inputMode?: InputMode,
  intMax?: number,
  intMin?: number,
  intStep?: number,
  intValue?: number,
  labelText?: string,
  okButtonText?: string,
  options?: InputDialogOptions,
  textEchoMode?: EchoMode,
  textValue?: string
}

function setInputDialogProps(widget: RNInputDialog, newProps: InputDialogProps, oldProps: InputDialogProps) {
  const setter: InputDialogProps = {
    set cancelButtonText(cancelButtonText: string){
      widget.setCancelButtonText(cancelButtonText)
    },
    set comboBoxEditable(comboBoxEditable: boolean) {
      widget.setComboBoxEditable(comboBoxEditable);
    },
    set doubleDecimals(doubleDecimals: number){
      widget.setDoubleDecimals(doubleDecimals)
    },
    set doubleMax(doubleMax: number){
      widget.setDoubleMaximum(doubleMax)
    },
    set doubleMin(doubleMin: number){
      widget.setDoubleMinimum(doubleMin)
    },
    set doubleStep(doubleStep: number){
      widget.setDoubleStep(doubleStep)
    },
    set doubleValue(doubleValue: number){
      widget.setDoubleValue(doubleValue)
    },
    set inputMode(inputMode: InputMode){
      widget.setInputMode(inputMode)
    },
    set intMax(intMax: number){
      widget.setIntMaximum(intMax)
    },
    set intMin(intMi: number){
      widget.setIntMinimum(intMi)
    },
    set intStep(intStep: number){
      widget.setIntStep(intStep)
    },
    set intValue(intValue: number){
      widget.setIntValue(intValue)
    },
    set labelText(labelText: string){
      widget.setLabelText(labelText)
    },
    set okButtonText(okButtonText: string){
      widget.setOkButtonText(okButtonText)
    },
    set options(options: InputDialogOptions){
      widget.setOptions(options)
    },
    set textEchoMode(textEchoMode: EchoMode){
      widget.setTextEchoMode(textEchoMode)
    },
    set textValue(textValue: string){
      widget.setTextValue(textValue)
    },
  };
  Object.assign(setter, newProps);
  setDialogProps(widget, newProps, oldProps);
}

export class RNInputDialog extends QInputDialog implements RNWidget {
  setProps(newProps: InputDialogProps, oldProps: InputDialogProps): void {
    setInputDialogProps(this, newProps, oldProps);
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
  static tagName = "input-dialog";
}
