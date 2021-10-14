import { FlexLayout, QListWidget, QListWidgetSignals } from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { RNListItem } from "../ListItem/RNListItem";


export interface ListProps extends ViewProps<QListWidgetSignals> {
}

type CustomListProps = ListProps;


/**
 * @ignore
  */
export const setListProps = (widget: RNList, newProps: CustomListProps, oldProps: CustomListProps) => {

  const setter: CustomListProps = {
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
  */
export class RNList extends QListWidget implements RNComponent {
  setProps(newProps: CustomListProps, oldProps: CustomListProps): void {
    setListProps(this, newProps, oldProps);
  }
  removeChild(child: RNListItem): void {
    const row = this.row(child);
    this.takeItem(row);
  }
  appendInitialChild(child: RNListItem): void {
    this.appendChild(child);
  }
  appendChild(child: RNListItem): void {
    if (!this.layout) {
      this.setLayout(new FlexLayout());
    }

    if (!(child instanceof RNListItem)) {
      throw new Error("Children of list should be of type ListItem");
    }

    this.addItem(child);
    if (child.actualListItemWidget) {
      child.setSizeHint(child.actualListItemWidget.size());
      this.setItemWidget(child, child.actualListItemWidget);
    }
  }
  insertBefore(child: RNListItem, beforeChild: RNListItem): void {
    const row = this.row(beforeChild);
    this.insertItem(row, child);
  }
  static tagName = "list";
}
