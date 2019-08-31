import { registerComponent } from "../config";
import { QProgressBar, Orientation } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

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

export const ProgressBar = registerComponent<ProgressBarProps>({
  id: "progressbar",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: newProps => {
    const widget = new QProgressBar();
    setProps(widget, newProps, {});
    return widget;
  },
  finalizeInitialChildren: () => {
    return false;
  },
  commitMount: (instance, newProps, internalInstanceHandle) => {
    return;
  },
  prepareUpdate: (
    instance,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) => {
    return true;
  },
  commitUpdate: (instance, updatePayload, oldProps, newProps, finishedWork) => {
    setProps(instance as QProgressBar, newProps, oldProps);
  }
});
