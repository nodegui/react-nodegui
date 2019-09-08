import { QDial } from "@nodegui/nodegui";
import { ViewProps, setProps as setViewProps } from "../View/RNView";

export class RNDial extends QDial {
  static tagName = "dial";
}

export interface DialProps extends ViewProps {
  notchesVisible?: boolean;
  wrapping?: boolean;
  notchTarget?: number;
}

export const setProps = (
  widget: RNDial,
  newProps: DialProps,
  oldProps: DialProps
) => {
  const setter: DialProps = {
    set notchesVisible(notchesVisible: boolean) {
      widget.setNotchesVisible(notchesVisible);
    },
    set wrapping(wrapping: boolean) {
      widget.setWrapping(wrapping);
    },
    set notchTarget(notchTarget: number) {
      widget.setNotchTarget(notchTarget);
    }
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};
