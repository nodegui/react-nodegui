import {
  QComboBox,
  QWidget,
  QSize,
  QVariant,
  SizeAdjustPolicy,
  InsertPolicy,
  QIcon,
  QComboBoxSignals
} from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface ComboBoxProps extends ViewProps<QComboBoxSignals> {
  items?: ComboBoxItem[];
  count?: number;
  iconSize?: QSize;
  frame?: boolean;
  currentIndex?: number;
  currentData?: QVariant;
  currentText?: string;
  duplicatesEnabled?: boolean;
  editable?: boolean;
  insertPolicy?: InsertPolicy;
  maxCount?: number;
  maxVisibleItems?: number;
  minimumContentsLength?: number;
  modelColumn?: number;
  sizeAdjustPolicy?: SizeAdjustPolicy;
}

type ComboBoxItem = {
  text: string;
  icon?: QIcon;
  userData?: QVariant;
};

const setComboBoxProps = (
  widget: RNComboBox,
  newProps: ComboBoxProps,
  oldProps: ComboBoxProps
) => {
  const setter: ComboBoxProps = {
    set items(items: ComboBoxItem[]) {
      widget.clear();
      items.forEach(item => {
        widget.addItem(item.icon, item.text, item.userData);
      });
    },
    set count(count: number) {
      widget.setProperty("count", count);
    },
    set iconSize(iconSize: QSize) {
      widget.setProperty("iconSize", iconSize.native!);
    },
    set frame(frame: boolean) {
      widget.setProperty("frame", frame);
    },
    set currentIndex(currentIndex: number) {
      widget.setProperty("currentIndex", currentIndex);
    },
    set currentData(value: QVariant) {
      widget.setProperty("currentData", value.native!);
    },
    set currentText(text: string) {
      widget.setProperty("currentText", text);
    },
    set duplicatesEnabled(enabled: boolean) {
      widget.setProperty("duplicatesEnabled", enabled);
    },
    set editable(enabled: boolean) {
      widget.setProperty("editable", enabled);
    },
    set insertPolicy(policy: InsertPolicy) {
      widget.setProperty("insertPolicy", policy);
    },
    set maxCount(count: number) {
      widget.setProperty("maxCount", count);
    },
    set maxVisibleItems(count: number) {
      widget.setProperty("maxVisibleItems", count);
    },
    set minimumContentsLength(count: number) {
      widget.setProperty("minimumContentsLength", count);
    },
    set modelColumn(column: number) {
      widget.setProperty("modelColumn", column);
    },
    set sizeAdjustPolicy(policy: SizeAdjustPolicy) {
      widget.setProperty("sizeAdjustPolicy", policy);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNComboBox extends QComboBox implements RNWidget {
  setProps(newProps: ComboBoxProps, oldProps: ComboBoxProps): void {
    setComboBoxProps(this, newProps, oldProps);
  }
  appendInitialChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: QWidget<any>, beforeChild: QWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: QWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "combobox";
}
