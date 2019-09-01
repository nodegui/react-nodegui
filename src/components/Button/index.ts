import { QPushButton, QIcon, NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { ViewProps, setProps as setViewProps } from "../View";
import { registerComponent, ComponentConfig } from "../config";
interface ButtonProps extends ViewProps {
  text?: string;
  flat?: boolean;
  icon?: QIcon;
}

const setProps = (
  widget: QPushButton,
  newProps: ButtonProps,
  oldProps: ButtonProps
) => {
  const setter: ButtonProps = {
    set text(buttonText: string) {
      widget.setText(buttonText);
    },
    set flat(isFlat: boolean) {
      widget.setFlat(isFlat);
    },
    set icon(icon: QIcon) {
      widget.setIcon(icon);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

class ButtonConfig extends ComponentConfig {
  id = "button";
  shouldSetTextContent(nextProps: object): boolean {
    return true;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const widget = new QPushButton();
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
    setProps(instance as QPushButton, newProps, oldProps);
  }
}

export const Button = registerComponent<ButtonProps>(new ButtonConfig());
