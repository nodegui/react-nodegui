import {
  Component,
  DayOfWeek,
  QCalendarWidget,
  QCalendarWidgetSignals,
  QFont,
} from "@nodegui/nodegui";
import {
  HorizontalHeaderFormat,
  SelectionMode,
  VerticalHeaderFormat,
} from "@nodegui/nodegui/dist/lib/QtWidgets/QCalendarWidget";
import { throwUnsupported } from "../../utils/helpers";
import { RNComponent } from "../config";
import { setViewProps, ViewProps } from "../View/RNView";

export interface CalendarProps extends ViewProps<QCalendarWidgetSignals> {
  /**
   * Sets the time an inactive date edit is shown before its contents are accepted. [QCalendarWidget: setDateEditAcceptDelay](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#setdateeditacceptdelay)
   */
  dateEditAcceptDelay?: number;
  /**
   * Sets whether the date edit popup is enabled. [QCalendarWidget: setDateEditEnabled](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#setdateeditenabled)
   */
  dateEditEnabled?: boolean;
  /**
   * Sets a value identifying the day displayed in the first column. [QCalendarWidget: setFirstDayOfWeek](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#setfirstdayofweek)
   */
  firstDayOfWeek?: DayOfWeek;
  /**
   * Sets a font for the action. [QCalendarWidget: setFont](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#setfont)
   */
  font?: QFont;
  /**
   * Sets whether the table grid is displayed. [QCalendarWidget: setGridVisible](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#setgridvisible)
   */
  gridVisible?: boolean;
  /**
   * Sets the format of the horizontal header. [QCalendarWidget: setHorizontalHeaderFormat](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#sethorizontalheaderformat)
   */
  horizontalHeaderFormat?: HorizontalHeaderFormat;
  /**
   * Sets whether the navigation bar is shown or not. [QCalendarWidget: setNavigationBarVisible](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#setnavigationbarvisible)
   */
  navigationBarVisible?: boolean;
  /**
   * Sets the type of selection the user can make in the calendar. [QCalendarWidget: setSelectionMode](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#setselectionmode)
   */
  selectionMode?: SelectionMode;
  /**
   * Sets the format of the vertical header. [QCalendarWidget: setVerticalHeaderFormat](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget#setverticalheaderformat)
   */
  verticalHeaderFormat?: VerticalHeaderFormat;
}

const setCalendarProps = (
  widget: RNCalendar,
  newProps: CalendarProps,
  oldProps: CalendarProps
) => {
  const setter: CalendarProps = {
    set dateEditAcceptDelay(delay: number) {
      widget.setDateEditAcceptDelay(delay);
    },
    set dateEditEnabled(enable: boolean) {
      widget.setDateEditEnabled(enable);
    },
    set firstDayOfWeek(dayOfWeek: DayOfWeek) {
      widget.setFirstDayOfWeek(dayOfWeek);
    },
    set font(font: QFont) {
      widget.setFont(font);
    },
    set gridVisible(show: boolean) {
      widget.setGridVisible(show);
    },
    set horizontalHeaderFormat(format: HorizontalHeaderFormat) {
      widget.setHorizontalHeaderFormat(format);
    },
    set navigationBarVisible(visible: boolean) {
      widget.setNavigationBarVisible(visible);
    },
    set selectionMode(mode: SelectionMode) {
      widget.setSelectionMode(mode);
    },
    set verticalHeaderFormat(format: VerticalHeaderFormat) {
      widget.setVerticalHeaderFormat(format);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNCalendar extends QCalendarWidget implements RNComponent {
  setProps(newProps: CalendarProps, oldProps: CalendarProps): void {
    setCalendarProps(this, newProps, oldProps);
  }
  appendInitialChild(child: Component): void {
    throwUnsupported(this);
  }
  appendChild(child: Component): void {
    throwUnsupported(this);
  }
  insertBefore(child: Component, beforeChild: Component): void {
    throwUnsupported(this);
  }
  removeChild(child: Component): void {
    throwUnsupported(this);
  }
  static tagName = "calendar";
}
