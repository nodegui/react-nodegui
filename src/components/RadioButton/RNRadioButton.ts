import {
  QRadioButton,
  NodeWidget,
  QRadioButtonSignals
} from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";
import {
  setAbstractButtonProps,
  AbstractButtonProps
} from "../AbstractComponents/RNAbstractButton";

export interface RadioButtonProps
  extends AbstractButtonProps<QRadioButtonSignals> {
  // More to be added
}

const setRadioButtonProps = (
  widget: RNRadioButton,
  newProps: RadioButtonProps,
  oldProps: RadioButtonProps
) => {
  const setter: RadioButtonProps = {
    // more setters to be added
  };
  Object.assign(setter, newProps);
  setAbstractButtonProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNRadioButton extends QRadioButton implements RNWidget {
  setProps(newProps: RadioButtonProps, oldProps: RadioButtonProps): void {
    setRadioButtonProps(this, newProps, oldProps);
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
  static tagName = "radiobutton";
}
