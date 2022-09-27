import {
  QMainWindow,
  QWidget,
  QMainWindowSignals,
  QMenuBar,
} from "@nodegui/nodegui";
import { setViewProps, ViewProps } from "../View/RNView";
import { RNWidget } from "../config";

export interface WindowProps extends ViewProps<QMainWindowSignals> {
  menuBar?: QMenuBar;
}

const setWindowProps = (
  window: RNWindow,
  newProps: WindowProps,
  oldProps: WindowProps
) => {
  const setter: WindowProps = {
    set menuBar(menubar: QMenuBar) {
      window.setMenuBar(menubar);
      console.log("menubar was set");
    },
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
  removeChild(child: QWidget<any>) {
    const removedChild = this.takeCentralWidget();
    if (removedChild) {
      removedChild.close();
    }
    child.close();
  }
  appendInitialChild(child: QWidget<any> | QMenuBar): void {
    if (child instanceof QMenuBar) {
      if (!this.menuBar()) {
        this.setMenuBar(child);
      } else {
        console.warn("MainWindow can't have more than one menubar.");
      }
      return;
    }

    if (!this.centralWidget()) {
      this.setCentralWidget(child);
    } else {
      console.warn("MainWindow can't have more than one child node");
    }
  }
  appendChild(child: QWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: QWidget<any>, beforeChild: QWidget<any>): void {
    this.appendInitialChild(child);
  }
  static tagName = "mainwindow";
}
