import { QLabelEvents } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNImage, ImageProps } from "./RNImage";
import { AppContainer } from "../../reconciler";
class ImageConfig extends ComponentConfig {
  tagName = RNImage.tagName;
  shouldSetTextContent(nextProps: ImageProps): boolean {
    return true;
  }
  createInstance(
    newProps: ImageProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNImage {
    const widget = new RNImage();
    widget.setProps(newProps, {});
    widget.addEventListener(QLabelEvents.Resize, () => {
      const size = widget.size();
      widget.scalePixmap(size.width(), size.height());
    });
    return widget;
  }
  commitMount(
    instance: RNImage,
    newProps: ImageProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNImage,
    updatePayload: any,
    oldProps: ImageProps,
    newProps: ImageProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Image = registerComponent<ImageProps>(new ImageConfig());
