import { QLabel, QPixmap, AspectRatioMode } from "@nodegui/nodegui";

export class ImageLabel extends QLabel {
  originalPixmap?: QPixmap;
  aspectRatioMode?: AspectRatioMode;
  setPixmap = (pixmap: QPixmap) => {
    super.setPixmap(pixmap);
    this.originalPixmap = pixmap;
  };
  setAspectRatioMode = (mode: AspectRatioMode) => {
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
