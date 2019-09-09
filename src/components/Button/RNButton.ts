import { QIcon, QPushButton, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export class RNButton extends QPushButton implements RNWidget {
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
  static tagName = "button";
}
export interface ButtonProps extends ViewProps {
  text?: string;
  flat?: boolean;
  icon?: QIcon;
}

export const setProps = (
  widget: RNButton,
  newProps: ButtonProps,
  oldProps: ButtonProps
) => {
  const setter: ButtonProps = {
    set text(buttonText: string) {
      widget.setText(buttonText);
    },
    set flat(isFlat: boolean) {
      widget.setFlat(isFlat);
    },
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
