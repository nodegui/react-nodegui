import { QCheckBox, NodeWidget } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";
import {
  AbstractButtonProps,
  setAbstractButtonProps
} from "../AbstractComponents/RNAbstractButton";

/**
 * The CheckBox component provides ability to add and manipulate native button widgets. It is based on
 * [NodeGui's QCheckBox](https://docs.nodegui.org/docs/api/QCheckBox).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, CheckBox, Window } from "@nodegui/react-nodegui";
 * const App = () => {
 *   return (
 *     <Window>
 *       <CheckBox style={checkboxStyle} text={"Hello World"} checked={true} />
 *     </Window>
 *   );
 * };
 * const checkboxStyle = `
 *   color: white;
 * `;
 * Renderer.render(<App />);
 *
 * ```
 */
export interface CheckBoxProps extends AbstractButtonProps {
  /**
   * This property holds whether the button is checked. [QCheckBox: setChecked](https://docs.nodegui.org/docs/api/QCheckBox/#checkboxsetcheckedcheck)
   */
  checked?: boolean;
}

const setCheckBoxProps = (
  widget: RNCheckBox,
  newProps: CheckBoxProps,
  oldProps: CheckBoxProps
) => {
  const setter: CheckBoxProps = {
    set checked(isChecked: boolean) {
      widget.setChecked(isChecked);
    }
  };
  Object.assign(setter, newProps);
  setAbstractButtonProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNCheckBox extends QCheckBox implements RNWidget {
  setProps(newProps: CheckBoxProps, oldProps: CheckBoxProps): void {
    setCheckBoxProps(this, newProps, oldProps);
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
  static tagName = "checkbox";
}
