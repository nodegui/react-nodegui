import { QRadioButton } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";

export class RNRadioButton extends QRadioButton {
  static tagName = "radiobutton";
}

export interface RadioButtonProps extends ViewProps {
  text?: string;
}

export const setProps = (
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
