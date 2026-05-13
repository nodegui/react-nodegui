import { WidgetEventTypes } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, RNProps, registerComponent } from "../config";
import {
  RNSvg,
  RNSvgCircle,
  RNSvgEllipse,
  RNSvgGroup,
  RNSvgLine,
  RNSvgNode,
  RNSvgPath,
  RNSvgPolygon,
  RNSvgRect,
  SvgCircleProps,
  SvgEllipseProps,
  SvgLineProps,
  SvgNodeProps,
  SvgPathProps,
  SvgPolygonProps,
  SvgProps,
  SvgRectProps,
} from "./RNSvg";

type SvgComponentFactory = new () => RNSvgNode;

class SvgConfig extends ComponentConfig {
  tagName = RNSvg.tagName;
  shouldSetTextContent(): boolean {
    return false;
  }
  createInstance(
    newProps: SvgProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNSvg {
    const widget = new RNSvg();
    widget.setProperty("scaledContents", true);
    widget.setProps(newProps, {});
    widget.addEventListener(WidgetEventTypes.Resize, () => {
      widget.scalePixmap(widget.size());
    });
    return widget;
  }
  commitMount(instance: RNSvg, newProps: SvgProps): void {
    if (newProps.visible !== false) {
      instance.show();
    }
  }
  commitUpdate(
    instance: RNSvg,
    updatePayload: any,
    oldProps: SvgProps,
    newProps: SvgProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

class SvgNodeConfig<T extends RNProps> extends ComponentConfig {
  constructor(public tagName: string, private NodeClass: SvgComponentFactory) {
    super();
  }
  shouldSetTextContent(): boolean {
    return false;
  }
  createInstance(
    newProps: T,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNSvgNode {
    const node = new this.NodeClass();
    node.setProps(newProps as SvgNodeProps, {});
    return node;
  }
  commitUpdate(
    instance: RNSvgNode,
    updatePayload: any,
    oldProps: T,
    newProps: T,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps as SvgNodeProps, oldProps as SvgNodeProps);
  }
}

export const Svg = registerComponent<SvgProps>(new SvgConfig());
export const G = registerComponent<SvgNodeProps>(
  new SvgNodeConfig<SvgNodeProps>(RNSvgGroup.tagName, RNSvgGroup)
);
export const Group = G;
export const Rect = registerComponent<SvgRectProps>(
  new SvgNodeConfig<SvgRectProps>(RNSvgRect.tagName, RNSvgRect)
);
export const Circle = registerComponent<SvgCircleProps>(
  new SvgNodeConfig<SvgCircleProps>(RNSvgCircle.tagName, RNSvgCircle)
);
export const Ellipse = registerComponent<SvgEllipseProps>(
  new SvgNodeConfig<SvgEllipseProps>(RNSvgEllipse.tagName, RNSvgEllipse)
);
export const Line = registerComponent<SvgLineProps>(
  new SvgNodeConfig<SvgLineProps>(RNSvgLine.tagName, RNSvgLine)
);
export const Polygon = registerComponent<SvgPolygonProps>(
  new SvgNodeConfig<SvgPolygonProps>(RNSvgPolygon.tagName, RNSvgPolygon)
);
export const Path = registerComponent<SvgPathProps>(
  new SvgNodeConfig<SvgPathProps>(RNSvgPath.tagName, RNSvgPath)
);
