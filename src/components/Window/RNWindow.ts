import { QMainWindow } from "@nodegui/nodegui";

import { setProps as setViewProps, ViewProps } from "../View/RNView";

export class RNWindow extends QMainWindow {
  static tagName = "mainwindow";
}

export interface WindowProps extends ViewProps {
  centralWidgetProps?: ViewProps;
}

export const setProps = (
  window: RNWindow,
  newProps: WindowProps,
  oldProps: WindowProps
) => {
  const setter: WindowProps = {
    set centralWidgetProps(centralWidgetProps: object) {
      if (window.centralWidget) {
        const oldcentralWidgetProps = oldProps.centralWidgetProps || {};
        setViewProps(
          window.centralWidget,
          centralWidgetProps,
          oldcentralWidgetProps
        );
      } else {
        console.warn(
          "Trying to set viewProps for main window but no central widget set."
        );
      }
    }
  };
  Object.assign(setter, newProps);
  setViewProps(window, newProps, oldProps);
};
