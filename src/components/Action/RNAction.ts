import {
  QAction,
  QIcon,
  QActionSignals,
  Component,
  QFont,
  QShortcut,
  QKeySequence,
  ShortcutContext,
} from "@nodegui/nodegui";
import { RNComponent, RNProps } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface ActionProps extends RNProps {
  /**
   * Sets whether the action is a checkable action. [QAction: setCheckable](https://docs.nodegui.org/docs/api/generated/classes/qaction#setcheckable)
   */
  checkable?: boolean;

  /**
   * Sets whether the action is checked. [QAction: setChecked](https://docs.nodegui.org/docs/api/generated/classes/qaction#setchecked)
   */
  checked?: boolean;

  /**
   * Sets whether the action is enabled. [QAction: setEnabled](https://docs.nodegui.org/docs/api/generated/classes/qaction#setenabled)
   */
  enabled?: boolean;

  /**
   * Sets a font for the action. [QAction: setFont](https://docs.nodegui.org/docs/api/generated/classes/qaction#setfont)
   */
  font?: QFont;

  /**
   * Sets an icon for the action. [QSystemTrayIcon: setIcon](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#seticon)
   */
  icon?: QIcon;

  /**
   * Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/generated/classes/QWidget#widgetsetobjectnameobjectname)
   */
  id?: string;

  /**
   * Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)
   */
  on?: Partial<QActionSignals>;

  /**
   * Sets whether this action will be considered a separator. [QAction: setSeparator](https://docs.nodegui.org/docs/api/generated/classes/qaction#setseparator)
   */
  separator?: boolean;

  /**
   * Sets the action's primary shortcut key. [QAction: setShortcut](https://docs.nodegui.org/docs/api/generated/classes/qaction#setshortcut)
   */
  shortcut?: QKeySequence;

  /**
   * Sets the context for action's shortcut. [QAction: setShortcutContext](https://docs.nodegui.org/docs/api/generated/classes/qaction#setshortcutcontext)
   */
  shortcutContext?: ShortcutContext;

  /**
   * Sets descriptive text. [QAction: setText](https://docs.nodegui.org/docs/api/generated/classes/qaction#settext)
   */
  text?: string;
}

const setActionProps = (
  widget: RNAction,
  newProps: ActionProps,
  oldProps: ActionProps
) => {
  const setter: ActionProps = {
    set checkable(isCheckable: boolean) {
      widget.setCheckable(isCheckable);
    },
    set checked(isChecked: boolean) {
      widget.setChecked(isChecked);
    },
    set enabled(isEnabled: boolean) {
      widget.setEnabled(isEnabled);
    },
    set font(font: QFont) {
      widget.setFont(font);
    },
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    },
    set id(id: string) {
      widget.setObjectName(id);
    },
    set on(listenerMap: Partial<QActionSignals>) {
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
    set separator(isSeparator: boolean) {
      widget.setSeparator(isSeparator);
    },
    set shortcut(shortcut: QKeySequence) {
      widget.setShortcut(shortcut);
    },
    set shortcutContext(shortcutContext: ShortcutContext) {
      widget.setShortcutContext(shortcutContext);
    },
    set text(text: string) {
      widget.setText(text);
    },
  };
  Object.assign(setter, newProps);
};

export class RNAction extends QAction implements RNComponent {
  setProps(newProps: ActionProps, oldProps: ActionProps): void {
    setActionProps(this, newProps, oldProps);
  }
  appendInitialChild(child: Component) {
    throwUnsupported(this);
  }
  appendChild(child: Component): void {
    throwUnsupported(this);
  }
  insertBefore(child: Component, beforeChild: Component): void {
    throwUnsupported(this);
  }
  removeChild(child: Component): void {
    throwUnsupported(this);
  }
  static tagName = "action";
}
