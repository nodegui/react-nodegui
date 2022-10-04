import { QWidget, QListWidgetItem, QIcon } from "@nodegui/nodegui";
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
  actualListItemWidget?: QWidget<any>;

  setProps(newProps: ListItemProps, oldProps: ListItemProps): void {
    setListItemProps(this, newProps, oldProps);
  }
  appendInitialChild(child: QWidget<any>): void {
    if (this.actualListItemWidget) {
      throw new Error("ListItem can have only one child");
    }
    this.actualListItemWidget = child;
  }
  appendChild(child: QWidget<any>): void {
    this.appendInitialChild(child);
  }
  insertBefore(child: QWidget<any>, beforeChild: QWidget<any>): void {
    this.appendInitialChild(child);
  }
  removeChild(child: QWidget<any>): void {
    if (child) {
      child.close();
    }
    if (this.actualListItemWidget) {
      delete this.actualListItemWidget;
    }
  }
  static tagName: string = "listitem";
}
