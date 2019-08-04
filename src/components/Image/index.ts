import { registerComponent } from "../config";
import { QPixmap } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";
import { ImageLabel } from "./ImageLabel";

interface ImageProps extends ViewProps {
  src?: string;
}

const setProps = (
  widget: ImageLabel,
  newProps: ImageProps,
  oldProps: ImageProps
) => {
  const setter: ImageProps = {
    set src(imageUrl: string) {
      const pixMap = new QPixmap(imageUrl);
      widget.setPixmap(pixMap);
      widget.scalePixmap(320, 120);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

export const Image = registerComponent<ImageProps>({
  id: "image",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: newProps => {
    const widget = new ImageLabel();
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
    setProps(instance as ImageLabel, newProps, oldProps);
  }
});
