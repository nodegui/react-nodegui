import { QLabel, QPixmap, AspectRatioMode, NodeWidget } from "@nodegui/nodegui";
import { TextProps, setTextProps } from "../Text/RNText";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface ImageProps extends TextProps {
  src?: string;
  aspectRatioMode?: AspectRatioMode;
}

const setImageProps = (
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

/**
 * @ignore
 */
export class RNImage extends QLabel implements RNWidget {
  setProps(newProps: ImageProps, oldProps: ImageProps): void {
    setImageProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget, beforeChild: NodeWidget): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget): void {
    throwUnsupported(this);
  }
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
