import { QPushButton, NodeWidget } from "@nodegui/nodegui";
import {
  AbstractButtonProps,
  setAbstractButtonProps
} from "../AbstractComponents/RNAbstractButton";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

/**
 * The Button component provides ability to add and manipulate native button widgets. It is based on
 * [NodeGui's QPushButton](https://docs.nodegui.org/docs/api/QPushButton).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, Button, Window } from "@nodegui/react-nodegui";
 * const App = () => {
 *   return (
 *     <Window>
 *       <Button style={buttonStyle} text={"Hello World"} />
 *     </Window>
 *   );
 * };
 * const buttonStyle = `
 *   color: white;
 * `;
 * Renderer.render(<App />);
 *
 * ```
 */
export interface ButtonProps extends AbstractButtonProps {
  /**
   * Sets whether the button border is raised. [QPushButton: setFlat](https://docs.nodegui.org/docs/api/QPushButton#buttonsetflatisflat)
   */
  flat?: boolean;
}

const setButtonProps = (
  widget: RNButton,
  newProps: ButtonProps,
  oldProps: ButtonProps
) => {
  const setter: ButtonProps = {
    set flat(isFlat: boolean) {
      widget.setFlat(isFlat);
    }
  };
  Object.assign(setter, newProps);
  setAbstractButtonProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNButton extends QPushButton implements RNWidget {
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
  setProps(newProps: ButtonProps, oldProps: ButtonProps) {
    setButtonProps(this, newProps, oldProps);
  }
  static tagName = "button";
}
