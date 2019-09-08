import { QPlainTextEdit } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";

export class RNPlainTextEdit extends QPlainTextEdit {
  static tagName = "plaintextedit";
}

export interface PlainTextEditProps extends ViewProps {
  children?: string;
  text?: string;
  readOnly?: boolean;
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
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
