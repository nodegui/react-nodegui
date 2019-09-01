import { QLabel, NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { ViewProps, setProps as setViewProps } from "../View";
import { registerComponent, ComponentConfig } from "../config";
export interface TextProps extends ViewProps {
  children?: string | number;
  wordWrap?: boolean;
}

export const setProps = (
  widget: QLabel,
  newProps: TextProps,
  oldProps: TextProps
) => {
  const setter: TextProps = {
    set children(text: string | number) {
      widget.setText(text);
    },
    set wordWrap(shouldWrap: boolean) {
      widget.setWordWrap(shouldWrap);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

class TextConfig extends ComponentConfig {
  id = "text";
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QLabel();
    setProps(widget, newProps, {});
    return widget;
  }
  commitUpdate(
    instance: NodeWidget,
    updatePayload: any,
    oldProps: object,
    newProps: object,
    finishedWork: Fiber
  ): void {
    setProps(instance as QLabel, newProps, oldProps);
  }
}

export const Text = registerComponent<TextProps>(new TextConfig());
