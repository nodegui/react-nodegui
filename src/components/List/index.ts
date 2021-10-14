import { registerComponent, ComponentConfig } from "../config";
import { Fiber } from "react-reconciler";
import { RNList, ListProps } from "./RNList";
import { AppContainer } from "../../reconciler";

class ListConfig extends ComponentConfig {
  tagName = RNList.tagName;
  shouldSetTextContent(nextProps: ListProps): boolean {
    return false;
  }
  createInstance(newProps: ListProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNList {
    const widget = new RNList();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(instance: RNList, newProps: ListProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNList, updatePayload: any, oldProps: ListProps, newProps: ListProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * React implementation of nodegui's [QListWidget](https://docs.nodegui.org/docs/api/generated/classes/qlistwidget/)
 * @example
 * ```javascriptreact
 * return (
 *    <List>
        <ListItem text="NodeGui is great" />
        <ListItem text="This item has a child">
          <View>
            <Text>Hello World</Text>
          </View>
        </ListItem>
      </List>
 * )
 * ```
 */

export const List = registerComponent<ListProps>(new ListConfig());
