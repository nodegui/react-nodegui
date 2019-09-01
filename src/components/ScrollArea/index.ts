import { registerComponent, ComponentConfig } from "../config";
import { QScrollArea, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";
import { ReactElement } from "react";
import { Fiber } from "react-reconciler";

export interface ScrollAreaProps extends ViewProps {
  children?: ReactElement;
}

export const setProps = (
  widget: QScrollArea,
  newProps: ScrollAreaProps,
  oldProps: ScrollAreaProps
) => {
  const setter: ScrollAreaProps = {
    set children(childWidget: ReactElement) {
      console.log(childWidget, "childWidget");
      // widget.setWidget(childWidget);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

class ScrollAreaConfig extends ComponentConfig {
  id = "scrollarea";
  shouldSetTextContent(nextProps: object): boolean {
    return false;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QScrollArea();
    setProps(widget, newProps, {});
    return widget;
  }
  commitUpdate(
    instance: NodeWidget,
    updatePayload: any,
    oldProps: object,
    newProps: object,
    finishedWork: Fiber
  ): void {
    setProps(instance as QScrollArea, newProps, oldProps);
  }
}

export const ScrollArea = registerComponent<ScrollAreaProps>(
  new ScrollAreaConfig()
);
