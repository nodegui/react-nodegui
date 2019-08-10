import { registerComponent } from "../config";
import { QPixmap, QLabelEvents, AspectRatioMode } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";
import { ImageLabel } from "./ImageLabel";
interface ImageProps extends ViewProps {
  src?: string;
  aspectRatioMode?: AspectRatioMode;
}

const setProps = (
  widget: ImageLabel,
  newProps: ImageProps,
  oldProps: ImageProps
) => {
  const setter: ImageProps = {
    set src(imageUrl: string) {
      if (!imageUrl) {
        return;
      }
      const pixMap = new QPixmap(imageUrl);
      widget.setPixmap(pixMap);
      const size = widget.size();
      widget.scalePixmap(size.width, size.height);
    },
    set aspectRatioMode(mode: AspectRatioMode) {
      widget.setAspectRatioMode(mode);
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
    widget.addEventListener(QLabelEvents.Resize, () => {
      const size = widget.size();
      widget.scalePixmap(size.width, size.height);
    });
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
