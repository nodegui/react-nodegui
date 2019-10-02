import { QRadioButton, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface RadioButtonProps extends ViewProps {
  text?: string;
}

const setRadioButtonProps = (
  widget: RNRadioButton,
  newProps: RadioButtonProps,
  oldProps: RadioButtonProps
) => {
  const setter: RadioButtonProps = {
    set text(checkboxText: string) {
      widget.setText(checkboxText);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNRadioButton extends QRadioButton implements RNWidget {
  setProps(newProps: RadioButtonProps, oldProps: RadioButtonProps): void {
    setRadioButtonProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget, beforeChild: NodeWidget): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
  static tagName = "radiobutton";
}
