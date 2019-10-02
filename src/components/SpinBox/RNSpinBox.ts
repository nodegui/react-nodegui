import { QSpinBox, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface SpinBoxProps extends ViewProps {
  prefix?: string;
  suffix?: string;
  singleStep?: number;
  range?: Range;
  value?: number;
}

const setSpinBoxProps = (
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

/**
 * @ignore
 */
export class RNSpinBox extends QSpinBox implements RNWidget {
  setProps(newProps: SpinBoxProps, oldProps: SpinBoxProps): void {
    setSpinBoxProps(this, newProps, oldProps);
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
  static tagName = "spinbox";
}

type Range = {
  minimum: number;
  maximum: number;
};
