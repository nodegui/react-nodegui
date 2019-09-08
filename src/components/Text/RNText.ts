import { QLabel } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";

export class RNText extends QLabel {
  static tagName = "text";
}

export interface TextProps extends ViewProps {
  children?: string | number;
  wordWrap?: boolean;
}

export const setProps = (
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
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
