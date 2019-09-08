import { registerComponent, ComponentConfig } from "../config";
import { QWidget, FlexLayout, NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { WindowProps, setProps, RNWindow } from "./RNWindow";

class WindowConfig extends ComponentConfig {
  tagName = RNWindow.tagName;
  shouldSetTextContent(nextProps: object): boolean {
    return false;
  }
  createInstance(
    newProps: object,
    rootInstance: Set<NodeWidget>,
    context: any,
    workInProgress: Fiber
  ): NodeWidget {
    const window = new RNWindow();
    const rootView = new QWidget();
    const rootViewLayout = new FlexLayout();
    rootViewLayout.setFlexNode(rootView.getFlexNode());
    rootView.setLayout(rootViewLayout);
    window.setCentralWidget(rootView);
    setProps(window, newProps, {});
    return window;
  }
  finalizeInitialChildren(
    instance: NodeWidget,
    newProps: object,
    rootContainerInstance: Set<NodeWidget>,
    context: any
  ): boolean {
    return true;
  }
  commitMount(
    instance: NodeWidget,
    newProps: WindowProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: NodeWidget,
    updatePayload: any,
    oldProps: object,
    newProps: object,
    finishedWork: Fiber
  ): void {
    setProps(instance as RNWindow, newProps, oldProps);
  }
}

export const Window = registerComponent<WindowProps>(new WindowConfig());
