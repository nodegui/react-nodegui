import { ViewProps, setProps as setViewProps } from "../View/RNView";
import { QCheckBox, NodeWidget } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export class RNCheckBox extends QCheckBox implements RNWidget {
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
  static tagName = "checkbox";
}

export interface CheckBoxProps extends ViewProps {
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
