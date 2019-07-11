import { registerComponent } from "../config";
import { QProgressBar } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

interface ProgressBarProps extends ViewProps {}

const setProps = (
  widget: QProgressBar,
  newProps: ProgressBarProps,
  oldProps: ProgressBarProps
) => {
  const setter: ProgressBarProps = {
    // set text(checkboxText: string) {
    //   widget.setText(checkboxText);
    // }
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
