import { registerComponent } from "../config";
import { QSpinBox } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

type Range = {
  minimum: number;
  maximum: number;
};

export interface SpinBoxProps extends ViewProps {
  prefix?: string;
  suffix?: string;
  singleStep?: number;
  range?: Range;
  value?: number;
}

export const setProps = (
  widget: QSpinBox,
  newProps: SpinBoxProps,
  oldProps: SpinBoxProps
) => {
  const setter: SpinBoxProps = {
    set prefix(prefix: string) {
      widget.setPrefix(prefix);
    },
    set suffix(suffix: string) {
      widget.setSuffix(suffix);
    },
    set singleStep(step: number) {
      widget.setSingleStep(step);
    },
    set range(range: Range) {
      widget.setRange(range.minimum, range.maximum);
    },
    set value(value: number) {
      widget.setValue(value);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export const SpinBox = registerComponent<SpinBoxProps>({
  id: "SpinBox",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const widget = new QSpinBox();
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
    setProps(instance as QSpinBox, newProps, oldProps);
  }
});
