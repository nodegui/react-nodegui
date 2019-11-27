import { QIcon, QSize } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { QAbstractButton } from "@nodegui/nodegui";

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
export interface AbstractButtonProps extends ViewProps {
  /**
   * Sets the given text to the button. [QPushButton: setText](https://docs.nodegui.org/docs/api/QPushButton#buttonsettexttext)
   */
  text?: string;
  /**
   * Sets an icon in the button. [QPushButton: setIcon](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonicon)
   */
  icon?: QIcon;
  /**
   * Sets an icon size in the button. [QPushButton: setIconSize](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonsize)
   */
  iconSize?: QSize;
}

export const setAbstractButtonProps = (
  widget: QAbstractButton,
  newProps: AbstractButtonProps,
  oldProps: AbstractButtonProps
) => {
  const setter: AbstractButtonProps = {
    set text(buttonText: string) {
      widget.setText(buttonText);
    },
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    },
    set iconSize(iconSize: QSize) {
      widget.setIconSize(iconSize);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
