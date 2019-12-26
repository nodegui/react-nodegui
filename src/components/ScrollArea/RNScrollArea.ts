import { QScrollArea, NodeWidget, QScrollAreaSignals } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";

export interface ScrollAreaProps extends ViewProps<QScrollAreaSignals> {
  widgetResizable?: boolean;
}

const setScrollAreaProps = (
  widget: RNScrollArea,
  newProps: ScrollAreaProps,
  oldProps: ScrollAreaProps
) => {
  const setter: ScrollAreaProps = {
    set widgetResizable(resizable: boolean) {
      widget.setWidgetResizable(resizable);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNScrollArea extends QScrollArea implements RNWidget {
  setProps(newProps: ScrollAreaProps, oldProps: ScrollAreaProps): void {
    setScrollAreaProps(this, newProps, oldProps);
  }
  removeChild(child: NodeWidget<any>): void {
    const removedChild = this.takeWidget();
    if (removedChild) {
      removedChild.close();
    }
    child.close();
  }
  appendInitialChild(child: NodeWidget<any>): void {
    if (this.contentWidget) {
      console.warn("ScrollView can't have more than one child node");
      return;
    }
    this.setWidget(child);
  }
  appendChild(child: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  static tagName = "scrollarea";
}
