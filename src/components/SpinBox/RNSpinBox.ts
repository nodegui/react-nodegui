import { QSpinBox, NodeWidget, QSpinBoxSignals } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

/**
 * The SpinBox component provides the ability to add and manipulate native spin box widgets. It is based on
 * [NodeGui's QSpinBox](https://docs.nodegui.org/docs/api/generated/classes/qspinbox/).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, SpinBox, Window } from "@nodegui/react-nodegui";
 * const App = () => {
 *  const handleValuehanged = {
 *    valueChanged: (newValue) => {
 *       console.log(newValue);
 *    },
 *   };
 *   return (
 *    <Window>
 *       <SpinBox on={handleValuehanged} value={10} />
 *    </Window>
 *   );
 * };
 * Renderer.render(<App />);
 * 
 * ```
 */
export interface SpinBoxProps extends ViewProps<QSpinBoxSignals> {
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
  appendInitialChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "spinbox";
}

type Range = {
  minimum: number;
  maximum: number;
};
