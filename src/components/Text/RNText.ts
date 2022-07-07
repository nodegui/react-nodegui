import { QLabel, NodeWidget, QLabelSignals, TextInteractionFlag, QFontMetrics, TextElideMode, WidgetEventTypes } from '@nodegui/nodegui';
import { ViewProps, setViewProps } from '../View/RNView';
import { RNWidget } from '../config';
import { throwUnsupported } from '../../utils/helpers';

export interface TextProps extends ViewProps<QLabelSignals> {
  children?: string | number | Array<string | number>;
  wordWrap?: boolean;
  elideMode?: TextElideMode;
  scaledContents?: boolean;
  openExternalLinks?: boolean;
  textInteractionFlags?: TextInteractionFlag;
}

function elideTextListener(widget: RNText, elideMode: TextElideMode) {
  const metrics = new QFontMetrics(widget.font());
  return () => {
    const lines = widget.wordWrap() ? Math.floor(widget.size().height() / metrics.lineSpacing()) : 1;
    const text = metrics.elidedText(`${widget.textOfChildren}`,
      elideMode,
      (widget.size().width() - metrics.maxWidth()) * lines);
    widget.setText(text);
  }
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

      // Empty Text fields should not write "undefined"
      if (text === undefined) {
        widget.textOfChildren = "";
      } else {
        widget.textOfChildren = `${text}`;
      }
      widget.setText(widget.textOfChildren);
    },
    set elideMode(mode: TextElideMode) {
      if (oldProps.elideMode !== mode && widget.resizeListener !== undefined) {
        widget.removeEventListener(WidgetEventTypes.Resize, widget.resizeListener);
      }
      if (oldProps.elideMode !== mode && mode !== undefined) {
        widget.resizeListener = elideTextListener(widget, mode);
        widget.addEventListener(WidgetEventTypes.Resize, widget.resizeListener);
        widget.resizeListener();
      }
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
    set textInteractionFlags(interactionFlag: TextInteractionFlag) {
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
  textOfChildren?: string;
  resizeListener?: () => void;

  setProps(newProps: TextProps, oldProps: TextProps): void {
    setTextProps(this, newProps, oldProps);
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
  static tagName = 'text';
}
