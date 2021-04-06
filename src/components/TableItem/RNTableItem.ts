import { QTableWidgetItem, NodeWidget, ItemFlag, CheckState, QVariant, QBrush, QIcon, QFont, QSize, AlignmentFlag } from "@nodegui/nodegui";
import { RNComponent } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface TableData{
  role: number;
  value: QVariant;
}

export type CellPosition = [number, number]

export interface TableItemProps {
  /**
   * position of this item in the Table
   * @tuple [row: number, column: number]
   */
  cellPosition: CellPosition
  text?: string;
  /**
   * handle the behavior of the TableItem
   * 
   * following example makes the item non-editable+selectable only checkable
   * @example 
   * ```javascript
   * <TableItem flags={ItemFlag.ItemIsEnabled | ItemFlag.ItemIsUserCheckable} {...props}/>
   * ```
   */
  flags?: ItemFlag;
  checkState?: CheckState;
  data?: TableData;
  background?: QBrush;
  foreground?: QBrush;
  icon?: QIcon,
  selected?: boolean;
  font?: QFont;
  hintSize?: QSize;
  statusTip?: string;
  textAlignment?: AlignmentFlag;
  toolTip?: string;
  whatsThis?: string;
}

type SimplifiedTableItemProps = Omit<TableItemProps, "cellPosition">;

const setTableItemProps = (widget: RNTableItem, newProps: SimplifiedTableItemProps, oldProps: SimplifiedTableItemProps) => {

  const setter: SimplifiedTableItemProps = {
    set text(text: string) {
      widget.setText(text);
    },
    set flags(flags: ItemFlag){
      widget.setFlags(flags)
    },   
    set checkState(checkState: CheckState){
      widget.setCheckState(checkState)
    },   
    set data({role, value}: TableData){
      widget.setData(role, value)
    },   
    set background(background: QBrush){
      widget.setBackground(background)
    },   
    set foreground(foreground: QBrush){
      widget.setForeground(foreground);
    },   
    set icon(icon: QIcon){
      widget.setIcon(icon);
    },   
    set selected(selected: boolean){
      widget.setSelected(selected);
    },   
    set font(font: QFont){
      widget.setFont(font)
    },   
    set hintSize(hintSize: QSize){
      widget.setSizeHint(hintSize);
    },   
    set statusTip(statusTip: string){
      widget.setStatusTip(statusTip);
    },   
    set textAlignment(textAlignment: AlignmentFlag){
      widget.setTextAlignment(textAlignment);
    },   
    set toolTip(toolTip: string) {
      widget.setToolTip(toolTip);
    },
    set whatsThis(whatsThis: string) {
      widget.setWhatsThis(whatsThis);
    },
  };
  Object.assign(setter, newProps);
};

/**
 * @ignore
 */
export class RNTableItem extends QTableWidgetItem implements RNComponent {
  cellPosition!: CellPosition;
  setProps(newProps: TableItemProps, oldProps: TableItemProps): void {
    this.cellPosition = newProps.cellPosition;
    setTableItemProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "table-item";
}
