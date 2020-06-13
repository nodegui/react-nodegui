import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNMenu, MenuProps } from "./RNMenu";
import { AppContainer } from "../../reconciler";
class MenuConfig extends ComponentConfig {
  
  tagName = RNMenu.tagName;
  shouldSetTextContent(nextProps: MenuProps): boolean {
    return false;
  }
  createInstance(
    newProps: MenuProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNMenu {
    const widget = new RNMenu();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNMenu,
    newProps: MenuProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNMenu,
    updatePayload: any,
    oldProps: MenuProps,
    newProps: MenuProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Menu = registerComponent<MenuProps>(
  new MenuConfig()
);
