import { QProgressBar, NodeWidget, Orientation } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { ViewProps, setProps as setViewProps } from "../View";
import { registerComponent, ComponentConfig } from "../config";

interface ProgressBarProps extends ViewProps {
  value?: number;
  minimum?: number;
  maximum?: number;
  orientation?: Orientation;
}

const setProps = (
  widget: QProgressBar,
  newProps: ProgressBarProps,
  oldProps: ProgressBarProps
) => {
  const setter: ProgressBarProps = {
    set value(val: number) {
      widget.setValue(val);
    },
    set minimum(min: number) {
      widget.setMinimum(min);
    },
    set maximum(max: number) {
      widget.setMaximum(max);
    },
    set orientation(orientation: Orientation) {
      widget.setOrientation(orientation);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

class ProgressBarConfig extends ComponentConfig {
  id = "progressbar";
  shouldSetTextContent(nextProps: object): boolean {
    return false;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QProgressBar();
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
    setProps(instance as QProgressBar, newProps, oldProps);
  }
}

export const ProgressBar = registerComponent<ProgressBarProps>(
  new ProgressBarConfig()
);
