import { QPlainTextEdit, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export class RNPlainTextEdit extends QPlainTextEdit implements RNWidget {
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
  static tagName = "plaintextedit";
}

export interface PlainTextEditProps extends ViewProps {
  text?: string;
  readOnly?: boolean;
  placeholderText?: string;
}

export const setProps = (
  widget: RNPlainTextEdit,
  newProps: PlainTextEditProps,
  oldProps: PlainTextEditProps
) => {
  const setter: PlainTextEditProps = {
    set text(text: string) {
      text ? widget.setPlainText(text) : widget.clear();
    },
    set readOnly(isReadOnly: boolean) {
      widget.setReadOnly(isReadOnly);
    },
    set placeholderText(text: string) {
      widget.setPlaceholderText(text);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
