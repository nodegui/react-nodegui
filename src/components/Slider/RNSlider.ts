import { QSlider, NodeWidget, QSliderSignals, TickPosition, Orientation } from '@nodegui/nodegui';
import { setViewProps, ViewProps } from '../View/RNView';
import { RNWidget } from '../config';
import { throwUnsupported } from '../../utils/helpers';

export interface SliderProps extends ViewProps<QSliderSignals> {
  tickInterval?: number;
  tickPosition?: TickPosition;
  orientation?: Orientation;
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
    set orientation(orientation: Orientation) {
      widget.setOrientation(orientation);
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
