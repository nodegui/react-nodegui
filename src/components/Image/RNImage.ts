import {
  QLabel,
  QPixmap,
  AspectRatioMode,
  NodeWidget,
  QSize
} from "@nodegui/nodegui";
import { TextProps, setTextProps } from "../Text/RNText";
import { RNWidget } from "../config";
import { throwUnsupported, isValidUrl } from "../../utils/helpers";
import phin from "phin";

export interface ImageProps extends TextProps {
  src?: string;
  aspectRatioMode?: AspectRatioMode;
  buffer?: Buffer;
}

const setImageProps = (
  widget: RNImage,
  newProps: ImageProps,
  oldProps: ImageProps
) => {
  const setter: ImageProps = {
    set src(imageUrlOrPath: string) {
      if (!imageUrlOrPath) {
        return;
      }
      getLoadedPixmap(imageUrlOrPath)
        .then(pixmap => widget.setPixmap(pixmap))
        .catch(console.warn);
    },
    set buffer(imageBuffer: Buffer) {
      const pixMap = new QPixmap();
      pixMap.loadFromData(imageBuffer);
      widget.setPixmap(pixMap);
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
  setAspectRatioMode(mode: AspectRatioMode) {
    // react:✓ TODO://getter
    this.aspectRatioMode = mode;
  }
  scalePixmap(size: QSize) {
    if (this.originalPixmap) {
      return super.setPixmap(
        this.originalPixmap.scaled(
          size.width(),
          size.height(),
          this.aspectRatioMode
        )
      );
    }
  }
}

async function getLoadedPixmap(imageUrlOrPath: string): Promise<QPixmap> {
  const pixMap = new QPixmap();
  if (isValidUrl(imageUrlOrPath)) {
    const res = await phin(imageUrlOrPath);
    const imageBuffer = Buffer.from(res.body);
    pixMap.loadFromData(imageBuffer);
  } else {
    pixMap.load(imageUrlOrPath);
  }
  return pixMap;
}
