import { QLabel, NodeWidget, QMovie, QSize } from "@nodegui/nodegui";
import { TextProps, setTextProps } from "../Text/RNText";
import { RNWidget } from "../config";
import { throwUnsupported, isValidUrl } from "../../utils/helpers";
import phin from "phin";

export interface AnimatedImageProps extends TextProps {
  src?: string;
  buffer?: Buffer;
}

const setAnimatedImageProps = (
  widget: RNAnimatedImage,
  newProps: AnimatedImageProps,
  oldProps: AnimatedImageProps
) => {
  const setter: AnimatedImageProps = {
    set src(imageUrlOrPath: string) {
      if (!imageUrlOrPath) {
        return;
      }
      getLoadedQMovie(imageUrlOrPath)
        .then(movie => {
          widget.setMovie(movie);
          widget.movie()?.start();
        })
        .catch(console.warn);
    },
    set buffer(imageBuffer: Buffer) {
      const movie = new QMovie();
      movie.loadFromData(imageBuffer);
      widget.setMovie(movie);
      widget.movie()?.start();
    }
  };
  Object.assign(setter, newProps);
  setTextProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNAnimatedImage extends QLabel implements RNWidget {
  setProps(newProps: AnimatedImageProps, oldProps: AnimatedImageProps): void {
    setAnimatedImageProps(this, newProps, oldProps);
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
  static tagName = "animatedimage";
  scaleMovie(size: QSize) {
    const movie = this.movie();
    movie?.setScaledSize(size);
  }
}

async function getLoadedQMovie(imageUrlOrPath: string): Promise<QMovie> {
  const movie = new QMovie();
  if (isValidUrl(imageUrlOrPath)) {
    const res = await phin(imageUrlOrPath);
    const imageBuffer = Buffer.from(res.body);
    movie.loadFromData(imageBuffer);
  } else {
    movie.setFileName(imageUrlOrPath);
  }
  return movie;
}
