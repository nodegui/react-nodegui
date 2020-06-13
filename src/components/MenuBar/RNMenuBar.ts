import { NodeWidget, QMenu, QMenuBar, QMenuBarSignals } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface MenuBarProps extends ViewProps<QMenuBarSignals> {
  nativeMenuBar?: boolean;
}

const setMenuBarProps = (
  widget: RNMenuBar,
  newProps: MenuBarProps,
  oldProps: MenuBarProps
) => {
  const setter: MenuBarProps = {
    set nativeMenuBar(shouldBeNative: boolean) {
      widget.setNativeMenuBar(shouldBeNative);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export class RNMenuBar extends QMenuBar implements RNWidget {
  setProps(newProps: MenuBarProps, oldProps: MenuBarProps): void {
    setMenuBarProps(this, newProps, oldProps);
  }
  appendInitialChild(child: QMenu): void {
    if (child instanceof QMenu) {
      this.addMenu(child);
    } else {
      console.warn("MenuBar only supports Menu as its children");
    }
  }
  appendChild(child: QMenu): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    console.warn(
      "Updating menubar is not yet supported. Please help by raising a PR"
    );
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    console.warn(
      "Updating menubar is not yet supported. Please help by raising a PR"
    );
    throwUnsupported(this);
  }
  static tagName = "menubar";
}
