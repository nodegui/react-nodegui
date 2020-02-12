import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNTab, TabProps } from "./RNTab";
import { AppContainer } from "../../reconciler";
class TabsConfig extends ComponentConfig {
  tagName = RNTab.tagName;
  shouldSetTextContent(nextProps: TabProps): boolean {
    return false;
  }
  createInstance(
    newProps: TabProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNTab {
    const widget = new RNTab();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNTab,
    newProps: TabProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
  }
  finalizeInitialChildren(
    instance: RNTab,
    newProps: TabProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  commitUpdate(
    instance: RNTab,
    updatePayload: any,
    oldProps: TabProps,
    newProps: TabProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const Tabs = registerComponent<TabProps>(new TabsConfig());
