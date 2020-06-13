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

export interface SystemTrayIconProps extends ViewProps<QSystemTrayIconSignals> {
  contextMenu?: QMenu;
  icon?: QIcon;

  /**
   * Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)
   */
  id?: string;

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
