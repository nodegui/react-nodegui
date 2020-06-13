import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNMenuBar, MenuBarProps } from "./RNMenuBar";
import { AppContainer } from "../../reconciler";

class MenuBarConfig extends ComponentConfig {
  tagName = RNMenuBar.tagName;
  shouldSetTextContent(nextProps: MenuBarProps): boolean {
    return false;
  }
  createInstance(
    newProps: MenuBarProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNMenuBar {
    const widget = new RNMenuBar();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNMenuBar,
    newProps: MenuBarProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNMenuBar,
    updatePayload: any,
    oldProps: MenuBarProps,
    newProps: MenuBarProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const MenuBar = registerComponent<MenuBarProps>(new MenuBarConfig());
