import { NodeWidget, QMenu, QMenuBar, QMenuBarSignals } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface MenuBarProps extends ViewProps<QMenuBarSignals> {}

const setMenuBarProps = (
  widget: RNMenuBar,
  newProps: MenuBarProps,
  oldProps: MenuBarProps
) => {
  const setter: MenuBarProps = {

  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export class RNMenuBar extends QMenuBar implements RNWidget {
  setProps(newProps: MenuBarProps, oldProps: MenuBarProps): void {
    setMenuBarProps(this, newProps, oldProps);
  }
  appendInitialChild(child: QMenu): void {
    this.addMenu(child);
  }
  appendChild(child: QMenu ): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "menubar";
};
