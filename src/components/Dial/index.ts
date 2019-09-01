import { Fiber } from "react-reconciler";
import { QDial, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";
import { registerComponent, ComponentConfig } from "../config";

export interface DialProps extends ViewProps {
  notchesVisible?: boolean;
  wrapping?: boolean;
  notchTarget?: number;
}

export const setProps = (
  widget: QDial,
  newProps: DialProps,
  oldProps: DialProps
) => {
  const setter: DialProps = {
    set notchesVisible(notchesVisible: boolean) {
      widget.setNotchesVisible(notchesVisible);
    },
    set wrapping(wrapping: boolean) {
      widget.setWrapping(wrapping);
    },
    set notchTarget(notchTarget: number) {
      widget.setNotchTarget(notchTarget);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

class DialConfig extends ComponentConfig {
  id = "dial";
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QDial();
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
    setProps(instance as QDial, newProps, oldProps);
  }
}

export const Dial = registerComponent<DialProps>(new DialConfig());
