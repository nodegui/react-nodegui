import { WidgetEventListeners } from "../View/RNView";
import {
  QSystemTrayIconSignals,
  QSystemTrayIcon,
  NodeWidget,
  QIcon,
  QMenu,
} from "@nodegui/nodegui";
import { RNComponent, RNProps } from "../config";
import { throwUnsupported } from "../../utils/helpers";

/**
 * The SystemTrayIcon component provides the ability to add and manipulate a native system tray icon.
 * [NodeGui's QSystemTrayIcon](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { QIcon, QAction } from "@nodegui/nodegui";
 * import { Menu, Renderer, SystemTrayIcon, Window } from "@nodegui/react-nodegui";
 * import path from "path";
 *
 * const icon = new QIcon(path.join(__dirname, "../extras/assets/nodegui.png"));
 * const action = new QAction();
 * action.setText("Hello");
 * action.addEventListener("triggered", () => {
 *   console.log("hello");
 * });
 *
 * const App = () => {
 *   return (
 *     <Window>
 *       <SystemTrayIcon icon={icon} tooltip="Hello World" visible>
 *         <Menu actions={[action]} />
 *       </SystemTrayIcon>
 *     </Window>
 *   );
 * };
 *
 * Renderer.render(<App />);
 *
 * ```
 */
export interface SystemTrayIconProps extends RNProps {
  /**
   * Sets an icon for the system tray. [QSystemTrayIcon: setIcon](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#seticon)
   */
  icon?: QIcon;

  /**
   * Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)
   */
  id?: string;

  /**
   * Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)
   */
  on?: Partial<WidgetEventListeners | QSystemTrayIconSignals>;

  /**
   * Sets a tooltip for the system tray. [QSystemTrayIcon: setTooltip](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#settooltip)
   */
  tooltip?: string;

  /**
   * Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/NodeWidget#widgetshow)
   */
  visible?: boolean;
}

const setSystemTrayIconProps = (
  widget: RNSystemTrayIcon,
  newProps: SystemTrayIconProps,
  oldProps: SystemTrayIconProps
) => {
  const setter: SystemTrayIconProps = {
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    },
    set id(id: string) {
      widget.setObjectName(id);
    },
    set on(
      listenerMap: Partial<WidgetEventListeners | QSystemTrayIconSignals>
    ) {
      const listenerMapLatest: any = Object.assign({}, listenerMap);
      const oldListenerMap = Object.assign({}, oldProps.on);
      Object.entries(oldListenerMap).forEach(([eventType, oldEvtListener]) => {
        const newEvtListener = listenerMapLatest[eventType];
        if (oldEvtListener !== newEvtListener) {
          widget.removeEventListener(eventType as any, oldEvtListener);
        } else {
          delete listenerMapLatest[eventType];
        }
      });

      Object.entries(listenerMapLatest).forEach(
        ([eventType, newEvtListener]) => {
          widget.addEventListener(eventType as any, newEvtListener);
        }
      );
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
    if (child instanceof QMenu) {
      if (!this.contextMenu) {
        this.setContextMenu(child);
      } else {
        console.warn("SystemTrayIcon can't have more than one Menu.");
      }
    } else {
      console.warn("SystemTrayIcon only supports Menu as its children");
    }
  }
  appendChild(child: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
}
