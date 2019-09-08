import { QProgressBar, Orientation } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";

export class RNProgressBar extends QProgressBar {
  static tagName = "progressbar";
}

export interface ProgressBarProps extends ViewProps {
  value?: number;
  minimum?: number;
  maximum?: number;
  orientation?: Orientation;
}

export const setProps = (
  widget: RNProgressBar,
  newProps: ProgressBarProps,
  oldProps: ProgressBarProps
) => {
  const setter: ProgressBarProps = {
    set value(val: number) {
      widget.setValue(val);
    },
    set minimum(min: number) {
      widget.setMinimum(min);
    },
    set maximum(max: number) {
      widget.setMaximum(max);
    },
    set orientation(orientation: Orientation) {
      widget.setOrientation(orientation);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
