import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, RNComponent, RNProps, registerComponent } from "../config";
import {
  RNSvg,
  RNSvgElement,
  createSvgTextNode,
  SvgCircleProps,
  SvgElementProps,
  SvgEllipseProps,
  SvgLineProps,
  SvgPathProps,
  SvgPolygonProps,
  SvgPolylineProps,
  SvgProps,
  SvgRectProps,
  SvgTextProps,
  createSvgElement,
} from "./RNSvg";

class SvgConfig extends ComponentConfig {
  tagName = RNSvg.tagName;

  getContext(parentContext: any) {
    return {
      ...parentContext,
      isInSvgTree: true,
    };
  }

  shouldSetTextContent(nextProps: SvgProps): boolean {
    return hasTextChildren(nextProps);
  }

  createInstance(
    newProps: SvgProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNSvg {
    const widget = new RNSvg();
    widget.setProps(newProps, {});
    return widget;
  }

  commitMount(
    instance: RNSvg,
    newProps: SvgProps,
    internalInstanceHandle: any
  ): void {
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

class SvgElementConfig extends ComponentConfig {
  constructor(
    readonly tagName: string,
    private readonly svgTagName = tagName
  ) {
    super();
  }

  getContext(parentContext: any) {
    return {
      ...parentContext,
      isInSvgTree: true,
    };
  }

  shouldSetTextContent(nextProps: SvgElementProps): boolean {
    return hasTextChildren(nextProps);
  }

  createInstance = (
    newProps: SvgElementProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNSvgElement => {
    return createSvgElement(this.svgTagName, newProps);
  };

  commitUpdate(
    instance: RNComponent,
    updatePayload: any,
    oldProps: RNProps,
    newProps: RNProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

function hasTextChildren(props: RNProps): boolean {
  const children = (props as { children?: unknown }).children;
  return (
    typeof children === "string"
    || typeof children === "number"
    || (
      Array.isArray(children)
      && children.every(
        (child) => typeof child === "string" || typeof child === "number"
      )
    )
  );
}

function registerSvgElement<Props extends SvgElementProps = SvgElementProps>(
  tagName: string,
  svgTagName = tagName
) {
  registeredSvgTags.add(tagName);
  return registerComponent<Props>(new SvgElementConfig(tagName, svgTagName));
}

const registeredSvgTags = new Set<string>();

export const Svg = registerComponent<SvgProps>(new SvgConfig());
export const G = registerSvgElement<SvgElementProps>("g");
export const Group = G;
export const Rect = registerSvgElement<SvgRectProps>("rect");
export const Circle = registerSvgElement<SvgCircleProps>("circle");
export const Ellipse = registerSvgElement<SvgEllipseProps>("ellipse");
export const Line = registerSvgElement<SvgLineProps>("line");
export const Polygon = registerSvgElement<SvgPolygonProps>("polygon");
export const Polyline = registerSvgElement<SvgPolylineProps>("polyline");
export const Path = registerSvgElement<SvgPathProps>("path");
export const SvgText = registerSvgElement<SvgTextProps>("svgText", "text");

const svgElementTags = [
  "a",
  "animate",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "defs",
  "desc",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "pattern",
  "radialGradient",
  "stop",
  "style",
  "switch",
  "symbol",
  "title",
  "tspan",
  "use",
];

for (const tagName of svgElementTags) {
  if (!registeredSvgTags.has(tagName)) {
    registerSvgElement(tagName);
  }
}
