import { QPlainTextEdit, NodeWidget } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View";
import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";

interface PlainTextEditProps extends ViewProps {
  children?: string;
  text?: string;
  readOnly?: boolean;
}

const setProps = (
  widget: QPlainTextEdit,
  newProps: PlainTextEditProps,
  oldProps: PlainTextEditProps
) => {
  const setter: PlainTextEditProps = {
    set text(text: string) {
      text ? widget.setPlainText(text) : widget.clear();
    },
    set readOnly(isReadOnly: boolean) {
      widget.setReadOnly(isReadOnly);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

class PlainTextEditConfig extends ComponentConfig {
  id = "plaintextedit";
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QPlainTextEdit();
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
    setProps(instance as QPlainTextEdit, newProps, oldProps);
  }
}

export const PlainTextEdit = registerComponent<PlainTextEditProps>(
  new PlainTextEditConfig()
);
