import {
  QPixmap,
  QLabelEvents,
  AspectRatioMode,
  NodeWidget
} from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { ImageLabel } from "./ImageLabel";
import { TextProps, setProps as setTextProps } from "../Text";
interface ImageProps extends TextProps {
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
  setTextProps(widget, newProps, oldProps);
};

class ImageConfig extends ComponentConfig {
  id = "image";
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new ImageLabel();
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
    setProps(instance as ImageLabel, newProps, oldProps);
  }
}

export const Image = registerComponent<ImageProps>(new ImageConfig());
