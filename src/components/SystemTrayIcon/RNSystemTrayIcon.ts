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
    set tooltip(tooltip: string) {
      widget.setToolTip(tooltip);
    },
    set visible(shouldShow: boolean) {
      shouldShow ? widget.show() : widget.hide();
    },
  };
  Object.assign(setter, newProps);
  // setViewProps(widget, newProps, oldProps);
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
