import { Fiber } from "react-reconciler";
import {
  ComponentConfig,
  RNComponent,
  RNProps,
  registerComponent,
} from "../config";
import { AppContainer } from "../../reconciler";
import { RNSvg, SvgProps, createSvgElement } from "./RNSvg";

const SVG_ELEMENT_TAGS = [
  "a",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "ellipse",
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
  "g",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "textPath",
  "tspan",
  "use",
] as const;

class SvgConfig extends ComponentConfig {
  tagName = RNSvg.tagName;

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
  constructor(readonly tagName: string) {
    super();
  }

  shouldSetTextContent(nextProps: RNProps): boolean {
    return hasTextChildren(nextProps);
  }

  createInstance(
    newProps: RNProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNComponent {
    return createSvgElement(this.tagName, newProps);
  }

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
  const children = (props as any).children;
  return typeof children === "string" || typeof children === "number";
}

export const Svg = registerComponent<SvgProps>(new SvgConfig());

SVG_ELEMENT_TAGS.forEach((tagName) => {
  registerComponent<RNProps>(new SvgElementConfig(tagName));
});
