import { ViewProps, setProps as setViewProps } from "../View/RNView";
import { QCheckBox } from "@nodegui/nodegui";

export class RNCheckBox extends QCheckBox {
  static tagName = "checkbox";
}

export interface CheckBoxProps extends ViewProps {
  children?: string;
  text?: string;
  checked?: boolean;
}

export const setProps = (
  widget: RNCheckBox,
  newProps: CheckBoxProps,
  oldProps: CheckBoxProps
) => {
  const setter: CheckBoxProps = {
    set text(checkboxText: string) {
      widget.setText(checkboxText);
    },
    set checked(isChecked: boolean) {
      widget.setChecked(isChecked);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
