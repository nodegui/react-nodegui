import { QLabel, QPixmap } from "@nodegui/nodegui";

export class ImageLabel extends QLabel {
  originalPixmap?: QPixmap;
  setPixmap = (pixmap: QPixmap) => {
    super.setPixmap(pixmap);
    this.originalPixmap = pixmap;
  };
  scalePixmap = (width: number, height: number) => {
    if (this.originalPixmap) {
      return super.setPixmap(this.originalPixmap.scaled(width, height));
    }
  };
}
