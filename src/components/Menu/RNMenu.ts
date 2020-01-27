import { NodeWidget, QAction, QMenu, QMenuSignals } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface MenuProps extends ViewProps<QMenuSignals> {
  title?: string;
  actions?: QAction[];
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
    set actions(actions: QAction[]) {
      actions.forEach(action => {
        widget.addAction(action);
      });
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export class RNMenu extends QMenu implements RNWidget {
  setProps(newProps: MenuProps, oldProps: MenuProps): void {
    setMenuProps(this, newProps, oldProps);
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
  static tagName = "menu";
};
