import { registerComponent } from "../config";
import { QDial } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";

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

export const Dial = registerComponent<DialProps>({
  id: "dial",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const widget = new QDial();
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
    setProps(instance as QDial, newProps, oldProps);
  }
});
