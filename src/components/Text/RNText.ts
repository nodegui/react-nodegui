import { QLabel, QWidget, QLabelSignals, TextInteractionFlag } from '@nodegui/nodegui';
import { ViewProps, setViewProps } from '../View/RNView';
import { RNWidget } from '../config';
import { throwUnsupported } from '../../utils/helpers';

export interface TextProps extends ViewProps<QLabelSignals> {
  children?: string | number | Array<string | number>;
  wordWrap?: boolean;
  scaledContents?: boolean;
  openExternalLinks?: boolean;
  textInteractionFlags?: TextInteractionFlag;
}

/**
 * @ignore
 */
export const setTextProps = (
  widget: RNText,
  newProps: TextProps,
  oldProps: TextProps
) => {
  const setter: TextProps = {
    set children(text: string | number | Array<string | number>) {
      text = Array.isArray(text) ? text.join('') : text;

      widget.setText(text);
    },
    set wordWrap(shouldWrap: boolean) {
      widget.setWordWrap(shouldWrap);
    },
    set scaledContents(scaled: boolean) {
      widget.setProperty('scaledContents', scaled);
    },
    set openExternalLinks(shouldOpenExternalLinks: boolean) {
      widget.setProperty('openExternalLinks', shouldOpenExternalLinks);
    },
    set textInteractionFlags(interactionFlag: TextInteractionFlag){
      widget.setProperty('textInteractionFlags', interactionFlag);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNText extends QLabel implements RNWidget {
  setProps(newProps: TextProps, oldProps: TextProps): void {
    setTextProps(this, newProps, oldProps);
  }
  appendInitialChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: QWidget<any>, beforeChild: QWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = 'text';
}
