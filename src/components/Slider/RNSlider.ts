import { QSlider, NodeWidget, QSliderSignals, TickPosition, Orientation } from '@nodegui/nodegui';
import { setViewProps, ViewProps } from '../View/RNView';
import { RNWidget } from '../config';
import { throwUnsupported } from '../../utils/helpers';

export interface SliderProps extends ViewProps<QSliderSignals> {
  tickInterval?: number;
  tickPosition?: TickPosition;
  orientation?: Orientation;
  minimum?: number;
  maximum?: number;
  invertedAppearance?: boolean;
  invertedControls?: boolean;
  pageStep?: number;
  singleStep?: number;
  isSliderDown?: boolean;
  sliderPosition?: number;
  hasTracking?: boolean;
  value?: number;
}

const setSliderProps = (
  widget: RNSlider,
  newProps: SliderProps,
  oldProps: SliderProps,
) => {
  const setter: SliderProps = {
    set tickInterval(tickInterval: number) {
      widget.setTickInterval(tickInterval);
    },
    set tickPosition(tickPosition: TickPosition) {
      widget.setTickPosition(tickPosition);
    },
    set invertedAppearance(inverted: boolean) {
      widget.setInvertedAppearance(inverted);
    },
    set invertedControls(inverted: boolean) {
      widget.setInvertedControls(inverted);
    },
    set maximum(maximum: number) {
      widget.setMaximum(maximum);
    },
    set minimum(minimum: number) {
      widget.setMinimum(minimum);
    },
    set orientation(orientation: Orientation) {
      widget.setOrientation(orientation);
    },
    set pageStep(step: number) {
      widget.setPageStep(step);
    },
    set singleStep(step: number) {
      widget.setSingleStep(step);
    },
    set isSliderDown(down: boolean) {
      widget.setSliderDown(down);
    },
    set sliderPosition(position: number) {
      widget.setSliderPosition(position);
    },
    set hasTracking(enable: boolean) {
      widget.setTracking(enable);
    },
    set value(value: number) {
      widget.setValue(value);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNSlider extends QSlider implements RNWidget {
  setProps(newProps: SliderProps, oldProps: SliderProps): void {
    setSliderProps(this, newProps, oldProps);
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

  static tagName = 'slider';
}
