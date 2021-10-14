import { NodeWidget, QListWidgetItem, QIcon } from "@nodegui/nodegui";
import { RNComponent } from "../config";

export interface ListItemProps {
  title?: string;
  icon?: QIcon;
}

/**
 * @ignore
  */
export const setListItemProps = (
  widget: RNListItem,
  newProps: ListItemProps,
  oldProps: ListItemProps
) => {
  const setter: ListItemProps = {
    set title(text: string) {
      widget.setText(text);
    },
    set icon(qicon: QIcon) {
      widget.setIcon(qicon);
    }
  };
  Object.assign(setter, newProps);
};

/**
 * @ignore
  */
export class RNListItem extends QListWidgetItem implements RNComponent {
  native: any;
  actualListItemWidget?: NodeWidget<any>;

  setProps(newProps: ListItemProps, oldProps: ListItemProps): void {
    setListItemProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget<any>): void {
    if (this.actualListItemWidget) {
      throw new Error("ListItem can have only one child");
    }
    this.actualListItemWidget = child;
  }
  appendChild(child: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    this.appendInitialChild(child);
  }
  removeChild(child: NodeWidget<any>): void {
    if (child) {
      child.close();
    }
    if (this.actualListItemWidget) {
      delete this.actualListItemWidget;
    }
  }
  static tagName: string = "listitem";
}
