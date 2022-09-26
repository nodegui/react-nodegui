import {
  QProgressBar,
  Orientation,
  QWidget,
  QProgressBarSignals
} from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

 /**
 * The ProgressBar component provides ability to add and manipulate native progress bar widgets. It is based on
 * [NodeGui's QProgressBar](https://docs.nodegui.org/docs/api/generated/classes/qprogressbar/).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, ProgressBar, Window } from "@nodegui/react-nodegui";
 * const App = () => {
 *   return (
 *    <Window>
 *      <ProgressBar value={45} />
 *   </Window>
 *  );
 * };
 * Renderer.render(<App />);
 * ```
 */
export interface ProgressBarProps extends ViewProps<QProgressBarSignals> {
  value?: number;
  minimum?: number;
  maximum?: number;
  orientation?: Orientation;
}

const setProgressBarProps = (
  widget: RNProgressBar,
  newProps: ProgressBarProps,
  oldProps: ProgressBarProps
) => {
  const setter: ProgressBarProps = {
    set value(val: number) {
      widget.setValue(val);
    },
    set minimum(min: number) {
      widget.setMinimum(min);
    },
    set maximum(max: number) {
      widget.setMaximum(max);
    },
    set orientation(orientation: Orientation) {
      widget.setOrientation(orientation);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNProgressBar extends QProgressBar implements RNWidget {
  setProps(newProps: ProgressBarProps, oldProps: ProgressBarProps): void {
    setProgressBarProps(this, newProps, oldProps);
  }
  appendInitialChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: QWidget<any>, beforeChild: QWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "progressbar";
}
