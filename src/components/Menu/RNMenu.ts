import { QMenu, QMenuSignals, Component, QWidget } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";
import { RNAction } from "../Action/RNAction";
import { setViewProps, ViewProps } from "../View/RNView";

export interface MenuProps extends ViewProps<QMenuSignals> {
  title?: string;
}

const setMenuProps = (
  widget: RNMenu,
  newProps: MenuProps,
  oldProps: MenuProps
) => {
  const setter: MenuProps = {
    set title(title: string) {
      widget.setTitle(title);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export class RNMenu extends QMenu implements RNWidget {
  setProps(newProps: MenuProps, oldProps: MenuProps): void {
    setMenuProps(this, newProps, oldProps);
  }
  appendInitialChild(child: Component): void {
    this.appendChild(child);
  }
  appendChild(child: Component): void {
    if (!(child instanceof RNAction)) {
      console.warn("Menu only supports Action as its children");
      return;
    }

    this.addAction(child);
  }
  insertBefore(child: Component, beforeChild: Component): void {
    throwUnsupported(this);
  }
  removeChild(child: Component): void {
    if (child instanceof RNAction) {
      this.removeAction(child);
    }
  }
  static tagName = "menu";
}
