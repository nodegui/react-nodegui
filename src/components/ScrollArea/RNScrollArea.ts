import { QScrollArea, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";
import { RNWidget } from "../config";

export class RNScrollArea extends QScrollArea implements RNWidget {
  removeChild(child: NodeWidget): void {
    throw new Error("Method not implemented.");
    //TODO: IMPLEMENT THIS
  }
  appendInitialChild(child: NodeWidget): void {
    this.setWidget(child);
  }
  appendChild(child: NodeWidget): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget, beforeChild: NodeWidget): void {
    this.appendInitialChild(child);
  }
  static tagName = "scrollarea";
}
export interface ScrollAreaProps extends ViewProps {
  // TODO add props
}

export const setProps = (
  widget: RNScrollArea,
  newProps: ScrollAreaProps,
  oldProps: ScrollAreaProps
) => {
  const setter: ScrollAreaProps = {
    //TODO add props
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
