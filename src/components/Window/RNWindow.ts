import { QMainWindow, NodeWidget, FlexLayout } from "@nodegui/nodegui";
import { setViewProps, ViewProps, RNView } from "../View/RNView";
import { RNWidget } from "../config";

export interface WindowProps extends ViewProps {}

const setWindowProps = (
  window: RNWindow,
  newProps: WindowProps,
  oldProps: WindowProps
) => {
  const setter: WindowProps = {
    // TODO add more props
  };
  Object.assign(setter, newProps);
  setViewProps(window, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNWindow extends QMainWindow implements RNWidget {
  setProps(newProps: WindowProps, oldProps: WindowProps): void {
    setWindowProps(this, newProps, oldProps);
  }
  removeChild(child: NodeWidget) {
    const removedChild = this.takeCentralWidget();
    if (removedChild) {
      removedChild.close();
    }
    child.close();
  }
  appendInitialChild(child: NodeWidget): void {
    if (this.centralWidget) {
      console.warn("MainWindow can't have more than one child node");
      return;
    }
    this.setCentralWidget(child);
  }
  appendChild(child: NodeWidget): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget, beforeChild: NodeWidget): void {
    this.appendInitialChild(child);
  }
  static tagName = "mainwindow";
}
