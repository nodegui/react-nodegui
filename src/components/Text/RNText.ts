import { QLabel, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface TextProps extends ViewProps {
  children?: string | number;
  wordWrap?: boolean;
  scaledContents?: boolean;
}

/**
 * @ignore
 */
export const setTextProps = (
  widget: RNText,
  newProps: TextProps,
  oldProps: TextProps
) => {
  const setter: TextProps = {
    set children(text: string | number) {
      widget.setText(text);
    },
    set wordWrap(shouldWrap: boolean) {
      widget.setWordWrap(shouldWrap);
    },
    set scaledContents(scaled: boolean) {
      widget.setProperty("scaledContents", scaled);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNText extends QLabel implements RNWidget {
  setProps(newProps: TextProps, oldProps: TextProps): void {
    setTextProps(this, newProps, oldProps);
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
  static tagName = "text";
}
