import { QSpinBox, NodeWidget } from "@nodegui/nodegui";
import { registerComponent, ComponentConfig } from "../config";
import { ViewProps, setProps as setViewProps } from "../View";
import { Fiber } from "react-reconciler";

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

class SpinBoxConfig extends ComponentConfig {
  id = "spinbox";
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QSpinBox();
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
    setProps(instance as QSpinBox, newProps, oldProps);
  }
}

export const SpinBox = registerComponent<SpinBoxProps>(new SpinBoxConfig());
