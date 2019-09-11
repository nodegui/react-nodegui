import { QLabelEvents, NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNImage, setProps, ImageProps } from "./RNImage";
class ImageConfig extends ComponentConfig {
  tagName = RNImage.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new RNImage();
    setProps(widget, newProps, {});
    widget.addEventListener(QLabelEvents.Resize, () => {
      const size = widget.size();
      widget.scalePixmap(size.width, size.height);
    });
    return widget;
  }
  commitUpdate(
    instance: NodeWidget,
    updatePayload: any,
    oldProps: object,
    newProps: object,
    finishedWork: Fiber
  ): void {
    setProps(instance as RNImage, newProps, oldProps);
  }
}

export const Image = registerComponent<ImageProps>(new ImageConfig());
