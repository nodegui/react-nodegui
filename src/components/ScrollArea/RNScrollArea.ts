import { QScrollArea } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";
import { ReactElement } from "react";

export class RNScrollArea extends QScrollArea {
  static tagName = "scrollarea";
}
export interface ScrollAreaProps extends ViewProps {
  children?: ReactElement;
}

export const setProps = (
  widget: RNScrollArea,
  newProps: ScrollAreaProps,
  oldProps: ScrollAreaProps
) => {
  const setter: ScrollAreaProps = {
    set children(childWidget: ReactElement) {
      console.log(childWidget, "childWidget");
      // widget.setWidget(childWidget);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
