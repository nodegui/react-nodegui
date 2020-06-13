import { ViewProps, setViewProps } from "../View/RNView";
import {
  QSystemTrayIconSignals,
  QSystemTrayIcon,
  NodeWidget,
  QIcon,
  QMenu,
} from "@nodegui/nodegui";
import { RNComponent } from "../config";
import { throwUnsupported } from "../../utils/helpers";

/**
 * The SystemTrayIcon component provides the ability to add and manipulate a native system tray icon.
 * [NodeGui's QSystemTrayIcon](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, SystemTrayIcon, Window } from "@nodegui/react-nodegui";
 *
 * const icon = new QIcon(path.join(__dirname, "../extras/assets/nodegui.png"));
 * const menu = new QMenu();
 * const action = new QAction();
 * action.setText("Message");
 * action.addEventListener("triggered", () => {
 *   const messageBox = new QMessageBox();
 *   messageBox.setText("Welcome to React Nodegui!");
 *   const accept = new QPushButton();
 *   accept.setText("Accept");
 *   messageBox.addButton(accept, ButtonRole.AcceptRole);
 *   messageBox.exec();
 * });
 * menu.addAction(action);
 *
 * const App = () => {
 *   return (
 *     <Window>
 *       <SystemTrayIcon contextMenu={menu} icon={icon} tooltip="Hello World" visible />
 *     </Window>
 *   );
 * };
 *
 * Renderer.render(<App />);
 *
 * ```
 */
export interface SystemTrayIconProps extends ViewProps<QSystemTrayIconSignals> {
  /**
   * Sets a context menu for the system tray. [QSystemTrayIcon: setContextMenu](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#setcontextmenu)
   */
  contextMenu?: QMenu;

  /**
   * Sets an icon for the system tray. [QSystemTrayIcon: setIcon](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#seticon)
   */
  icon?: QIcon;

  /**
   * Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)
   */
  id?: string;

  /**
   * Sets a tooltip for the system tray. [QSystemTrayIcon: setTooltip](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#settooltip)
   */
  tooltip?: string;
}

const setSystemTrayIconProps = (
  widget: RNSystemTrayIcon,
  newProps: SystemTrayIconProps,
  oldProps: SystemTrayIconProps
) => {
  const setter: SystemTrayIconProps = {
    set contextMenu(contextMenu: QMenu) {
      widget.setContextMenu(contextMenu);
    },
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    },
    set id(id: string) {
      widget.setObjectName(id);
    },
    set tooltip(tooltip: string) {
      widget.setToolTip(tooltip);
    },
    set visible(shouldShow: boolean) {
      shouldShow ? widget.show() : widget.hide();
    },
  };
  Object.assign(setter, newProps);
};

/**
 * @ignore
 */
export class RNSystemTrayIcon extends QSystemTrayIcon implements RNComponent {
  static tagName = "systemtrayicon";

  setProps(newProps: SystemTrayIconProps, oldProps: SystemTrayIconProps): void {
    setSystemTrayIconProps(this, newProps, oldProps);
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
}
