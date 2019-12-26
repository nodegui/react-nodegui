import {
  QLabel,
  QPixmap,
  AspectRatioMode,
  NodeWidget,
  QSize,
  TransformationMode
} from "@nodegui/nodegui";
import { TextProps, setTextProps } from "../Text/RNText";
import { RNWidget } from "../config";
import { throwUnsupported, isValidUrl } from "../../utils/helpers";
import phin from "phin";

export interface ImageProps extends TextProps {
  src?: string;
  aspectRatioMode?: AspectRatioMode;
  transformationMode?: TransformationMode;
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
    },
    set transformationMode(mode: TransformationMode) {
      widget.setTransformationMode(mode);
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
  appendInitialChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "image";
  originalPixmap?: QPixmap;
  aspectRatioMode?: AspectRatioMode;
  transformationMode?: TransformationMode;
  setPixmap = (pixmap: QPixmap) => {
    // react:✓
    super.setPixmap(pixmap);
    this.originalPixmap = pixmap;
  };
  setAspectRatioMode(mode: AspectRatioMode) {
    // react:✓ TODO://getter
    this.aspectRatioMode = mode;
    this.scalePixmap(this.size());
  }
  setTransformationMode(mode: TransformationMode) {
    // react:✓ TODO://getter
    this.transformationMode = mode;
    this.scalePixmap(this.size());
  }
  scalePixmap(size: QSize) {
    if (this.originalPixmap) {
      return super.setPixmap(
        this.originalPixmap.scaled(
          size.width(),
          size.height(),
          this.aspectRatioMode,
          this.transformationMode
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
