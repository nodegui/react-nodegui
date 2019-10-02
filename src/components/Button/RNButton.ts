import { QIcon, QPushButton, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
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
export interface ButtonProps extends ViewProps {
  /**
   * Sets the given text to the button. [QPushButton: setText](https://docs.nodegui.org/docs/api/QPushButton#buttonsettexttext)
   */
  text?: string;
  /**
   * Sets whether the button border is raised. [QPushButton: setFlat](https://docs.nodegui.org/docs/api/QPushButton#buttonsetflatisflat)
   */
  flat?: boolean;
  /**
   * Sets an icon in the button. [QPushButton: setIcon](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonicon)
   */
  icon?: QIcon;
}

const setButtonProps = (
  widget: RNButton,
  newProps: ButtonProps,
  oldProps: ButtonProps
) => {
  const setter: ButtonProps = {
    set text(buttonText: string) {
      widget.setText(buttonText);
    },
    set flat(isFlat: boolean) {
      widget.setFlat(isFlat);
    },
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
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
