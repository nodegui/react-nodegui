import { QSpinBox } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";

export class RNSpinBox extends QSpinBox {
  static tagName = "spinbox";
}
type Range = {
  minimum: number;
  maximum: number;
};

export interface SpinBoxProps extends ViewProps {
  prefix?: string;
  suffix?: string;
  singleStep?: number;
  range?: Range;
  value?: number;
}

export const setProps = (
  widget: RNSpinBox,
  newProps: SpinBoxProps,
  oldProps: SpinBoxProps
) => {
  const setter: SpinBoxProps = {
    set prefix(prefix: string) {
      widget.setPrefix(prefix);
    },
    set suffix(suffix: string) {
      widget.setSuffix(suffix);
    },
    set singleStep(step: number) {
      widget.setSingleStep(step);
    },
    set range(range: Range) {
      widget.setRange(range.minimum, range.maximum);
    },
    set value(value: number) {
      widget.setValue(value);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
