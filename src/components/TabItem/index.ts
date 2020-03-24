import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNTabItem, TabItemProps } from "./RNTabItem";
import { AppContainer } from "../../reconciler";

class TabItemConfig extends ComponentConfig {
  tagName = RNTabItem.tagName;
  shouldSetTextContent(nextProps: TabItemProps): boolean {
    return false;
  }
  createInstance(
    newProps: TabItemProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNTabItem {
    const item = new RNTabItem();
    item.setProps(newProps, {});
    return item;
  }
  finalizeInitialChildren(
    instance: RNTabItem,
    newProps: TabItemProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return false;
  }
  commitUpdate(
    instance: RNTabItem,
    updatePayload: any,
    oldProps: TabItemProps,
    newProps: TabItemProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const TabItem = registerComponent<TabItemProps>(new TabItemConfig());
