import { QLabel, QPixmap, AspectRatioMode } from "@nodegui/nodegui";
import { TextProps, setProps as setTextProps } from "../Text/RNText";

export class RNImage extends QLabel {
  static tagName = "image";
  originalPixmap?: QPixmap;
  aspectRatioMode?: AspectRatioMode;
  setPixmap = (pixmap: QPixmap) => {
    // react:✓
    super.setPixmap(pixmap);
    this.originalPixmap = pixmap;
  };
  setAspectRatioMode = (mode: AspectRatioMode) => {
    // react:✓ TODO://getter
    this.aspectRatioMode = mode;
  };
  scalePixmap = (width: number, height: number) => {
    if (this.originalPixmap) {
      return super.setPixmap(
        this.originalPixmap.scaled(width, height, this.aspectRatioMode)
      );
    }
  };
}

export interface ImageProps extends TextProps {
  src?: string;
  aspectRatioMode?: AspectRatioMode;
}

export const setProps = (
  widget: RNImage,
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
