import { QLabel, NodeWidget, QMovie, QSize } from "@nodegui/nodegui";
import { TextProps, setTextProps } from "../Text/RNText";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface AnimatedImageProps extends TextProps {
  src?: string;
}

const setAnimatedImageProps = (
  widget: RNAnimatedImage,
  newProps: AnimatedImageProps,
  oldProps: AnimatedImageProps
) => {
  const setter: AnimatedImageProps = {
    set src(imageUrl: string) {
      if (!imageUrl) {
        return;
      }
      const movie = new QMovie();
      movie.setFileName(imageUrl);
      widget.setMovie(movie);
      const size = widget.size();
      movie.setScaledSize(size);
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
  static tagName = "animatedimage";
  scaleMovie(size: QSize) {
    const movie = this.movie();
    movie?.setScaledSize(size);
  }
}
