import { Fiber } from 'react-reconciler';
import { RNSlider, SliderProps } from './RNSlider';
import { ComponentConfig, registerComponent } from '../config';
import { AppContainer } from '../../reconciler';

class SliderConfig extends ComponentConfig {
  tagName = RNSlider.tagName;

  shouldSetTextContent(nextProps: SliderProps): boolean {
    return true;
  }

  createInstance(
    newProps: SliderProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber,
  ): RNSlider {
    const widget = new RNSlider();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(
    instance: RNSlider,
    newProps: SliderProps,
    internalInstanceHandle: any,
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }

  commitUpdate(
    instance: RNSlider,
    updatePayload: any,
    oldProps: SliderProps,
    newProps: SliderProps,
    finishedWork: Fiber,
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Slider = registerComponent<SliderProps>(new SliderConfig());
