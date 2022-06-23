import { ComponentConfig, registerComponent, RNComponent } from "../config";
import { AppContainer } from "../../reconciler";
import { Fiber } from "react-reconciler";
import { CalendarProps, RNCalendar } from "./RNCalendar";

class CalendarConfig extends ComponentConfig {
  tagName = RNCalendar.tagName;
  shouldSetTextContent(nextProps: CalendarProps): boolean {
    return false;
  }
  createInstance(
    newProps: CalendarProps,
    rootInstance?: AppContainer,
    context?: any,
    workInProgress?: Fiber
  ): RNCalendar {
    const widget = new RNCalendar();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNCalendar,
    newProps: CalendarProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(
    instance: RNCalendar,
    updatePayload: any,
    oldProps: CalendarProps,
    newProps: CalendarProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

/**
 * The Calendar component provides ability to add calendar widgets. It is based on
 * [NodeGui's QCalendarWidget](https://docs.nodegui.org/docs/api/generated/classes/qcalendarwidget/).
 * @example
 * ```typescriptreact
 * import {
 *   DateFormat,
 *   DayOfWeek,
 *   NativeElement,
 *   QCalendarWidgetSignals,
 *   QDate,
 * } from "@nodegui/nodegui";
 * import {
 *   Calendar,
 *   Renderer,
 *   useEventHandler,
 *   Window,
 * } from "@nodegui/react-nodegui";
 * import React from "react";
 * const App = () => {
 *   const calendarClickHandler = useEventHandler<QCalendarWidgetSignals>(
 *     {
 *       activated: (nativeDate) => {
 *         const date = new QDate(nativeDate as unknown as NativeElement);
 *         console.log(`activated: ${date.toString(DateFormat.SystemLocaleDate)}`);
 *       },
 *       clicked: (nativeDate) => {
 *         const date = new QDate(nativeDate as unknown as NativeElement);
 *         console.log(`clicked: ${date.toString(DateFormat.SystemLocaleDate)}`);
 *       },
 *       currentPageChanged: (year, month) => {
 *         console.log(`currentPageChanged: year, month: ${year}, ${month}`);
 *       },
 *       selectionChanged: () => {
 *         console.log("selectionChanged");
 *       },
 *     },
 *     []
 *   );
 *
 *   return (
 *     <Window>
 *       <Calendar firstDayOfWeek={DayOfWeek.Sunday} on={calendarClickHandler} />
 *     </Window>
 *   );
 * }
 * Renderer.render(<App />);
 * ```
 */
export const Calendar = registerComponent<CalendarProps>(new CalendarConfig());
