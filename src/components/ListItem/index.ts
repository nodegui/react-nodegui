import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNListItem, ListItemProps } from "./RNListItem";
import { AppContainer } from "../../reconciler";

class ListItemConfig extends ComponentConfig {
  tagName = RNListItem.tagName;
  shouldSetTextContent(nextProps: ListItemProps): boolean {
    return false;
  }
  createInstance(
    newProps: ListItemProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNListItem {
    const item = new RNListItem();
    item.setProps(newProps, {});
    return item;
  }
  finalizeInitialChildren(
    instance: RNListItem,
    newProps: ListItemProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return false;
  }
  commitUpdate(
    instance: RNListItem,
    updatePayload: any,
    oldProps: ListItemProps,
    newProps: ListItemProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const ListItem = registerComponent<ListItemProps>(new ListItemConfig());
