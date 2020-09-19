import { QDial, NodeWidget, QDialSignals } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

/**
 * The Dial provides ability to add and manipulate native dial slider widgets. It is based on
 * [NodeGui's QDial](https://docs.nodegui.org/docs/api/generated/classes/qdial/).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, Dial, Window } from "@nodegui/react-nodegui";
 * const App = () => {
 *   return (
 *     <Window>
 *       <Dial />
 *     </Window>
 *   );
 * };
 * Renderer.render(<App />);
 * ```
 */
export interface DialProps extends ViewProps<QDialSignals> {
  notchesVisible?: boolean;
  wrapping?: boolean;
  notchTarget?: number;
}

const setDialProps = (
  widget: RNDial,
  newProps: DialProps,
  oldProps: DialProps
) => {
  const setter: DialProps = {
    set notchesVisible(notchesVisible: boolean) {
      widget.setNotchesVisible(notchesVisible);
    },
    set wrapping(wrapping: boolean) {
      widget.setWrapping(wrapping);
    },
    set notchTarget(notchTarget: number) {
      widget.setNotchTarget(notchTarget);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNDial extends QDial implements RNWidget {
  setProps(newProps: DialProps, oldProps: DialProps): void {
    setDialProps(this, newProps, oldProps);
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
  static tagName = "dial";
}
