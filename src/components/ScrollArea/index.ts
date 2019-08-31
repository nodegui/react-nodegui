import { registerComponent } from "../config";
import { QScrollArea } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";
import { ReactElement } from "react";

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

export const ScrollArea = registerComponent<ScrollAreaProps>({
  id: "ScrollArea",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: newProps => {
    const widget = new QScrollArea();
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
    setProps(instance as QScrollArea, newProps, oldProps);
  }
});
