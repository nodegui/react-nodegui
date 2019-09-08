import { QLineEdit } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";

export class RNLineEdit extends QLineEdit {
  static tagName = "linedit";
}

export interface LineEditProps extends ViewProps {
  children?: string;
  text?: string;
  placeholderText?: string;
  readOnly?: boolean;
}

export const setProps = (
  widget: RNLineEdit,
  newProps: LineEditProps,
  oldProps: LineEditProps
) => {
  const setter: LineEditProps = {
    set text(text: string) {
      text ? widget.setText(text) : widget.clear();
    },
    set placeholderText(text: string) {
      widget.setPlaceholderText(text);
    },
    set readOnly(isReadOnly: boolean) {
      widget.setReadOnly(isReadOnly);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
