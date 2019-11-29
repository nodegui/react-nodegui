import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNAnimatedImage, AnimatedImageProps } from "./RNAnimatedImage";
import { AppContainer } from "../../reconciler";
import { QLabelEvents } from "@nodegui/nodegui";

class AnimatedImageConfig extends ComponentConfig {
  tagName = RNAnimatedImage.tagName;
  shouldSetTextContent(nextProps: AnimatedImageProps): boolean {
    return true;
  }
  createInstance(
    newProps: AnimatedImageProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNAnimatedImage {
    const widget = new RNAnimatedImage();
    widget.setProps(newProps, {});
    widget.movie()?.start();
    widget.addEventListener(QLabelEvents.Resize, () => {
      widget.scaleMovie(widget.size());
    });
    return widget;
  }
  commitMount(
    instance: RNAnimatedImage,
    newProps: AnimatedImageProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNAnimatedImage,
    updatePayload: any,
    oldProps: AnimatedImageProps,
    newProps: AnimatedImageProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const AnimatedImage = registerComponent<AnimatedImageProps>(
  new AnimatedImageConfig()
);
