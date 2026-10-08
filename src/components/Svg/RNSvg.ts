import {
  QSvgWidget,
  QWidgetSignals,
} from "@nodegui/nodegui";
import { RNComponent, RNProps, RNWidget } from "../config";
import { ViewProps, setViewProps } from "../View/RNView";

type SvgPrimitive = string | number | boolean;
type SvgStyle = string | Record<string, SvgPrimitive | null | undefined>;
type SvgPropValue =
  | SvgPrimitive
  | SvgStyle
  | null
  | undefined
  | Record<string, SvgPrimitive | null | undefined>;

export interface SvgProps extends ViewProps<QWidgetSignals> {
  src?: string;
  buffer?: Buffer;
  content?: string;
  children?: unknown;
  width?: SvgPrimitive;
  height?: SvgPrimitive;
  viewBox?: string;
  preserveAspectRatio?: string;
  [attribute: string]: SvgPropValue | unknown;
}

export interface SvgElementProps extends RNProps {
  children?: unknown;
  style?: SvgStyle;
  id?: string;
  className?: string;
  fill?: SvgPrimitive;
  stroke?: SvgPrimitive;
  strokeWidth?: SvgPrimitive;
  opacity?: SvgPrimitive;
  transform?: string;
  [attribute: string]: SvgPropValue | unknown;
}

export interface SvgRectProps extends SvgElementProps {
  x?: SvgPrimitive;
  y?: SvgPrimitive;
  width?: SvgPrimitive;
  height?: SvgPrimitive;
  rx?: SvgPrimitive;
  ry?: SvgPrimitive;
}

export interface SvgCircleProps extends SvgElementProps {
  cx?: SvgPrimitive;
  cy?: SvgPrimitive;
  r?: SvgPrimitive;
}

export interface SvgEllipseProps extends SvgElementProps {
  cx?: SvgPrimitive;
  cy?: SvgPrimitive;
  rx?: SvgPrimitive;
  ry?: SvgPrimitive;
}

export interface SvgLineProps extends SvgElementProps {
  x1?: SvgPrimitive;
  y1?: SvgPrimitive;
  x2?: SvgPrimitive;
  y2?: SvgPrimitive;
}

export interface SvgPolygonProps extends SvgElementProps {
  points?: string;
}

export interface SvgPolylineProps extends SvgElementProps {
  points?: string;
}

export interface SvgPathProps extends SvgElementProps {
  d?: string;
}

export interface SvgTextProps extends SvgElementProps {
  x?: SvgPrimitive;
  y?: SvgPrimitive;
  dx?: SvgPrimitive;
  dy?: SvgPrimitive;
  textAnchor?: string;
  fontFamily?: string;
  fontSize?: SvgPrimitive;
  fontWeight?: SvgPrimitive;
}

type DangerousHtml = {
  __html?: string;
};

export type SvgParent = RNSvg | RNSvgElement;

export interface SvgRenderable {
  setSvgParent(parent: SvgParent | null): void;
  toSvgString(): string;
}

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

const WIDGET_PROP_NAMES = new Set([
  "visible",
  "styleSheet",
  "geometry",
  "id",
  "mouseTracking",
  "enabled",
  "windowOpacity",
  "windowTitle",
  "windowState",
  "cursor",
  "windowIcon",
  "minSize",
  "maxSize",
  "size",
  "pos",
  "on",
  "attributes",
  "windowFlags",
]);

const IGNORED_SVG_PROPS = new Set([
  "children",
  "key",
  "ref",
  "__self",
  "__source",
  "src",
  "buffer",
  "content",
  "dangerouslySetInnerHTML",
  "visible",
  "styleSheet",
  "geometry",
  "mouseTracking",
  "enabled",
  "windowOpacity",
  "windowTitle",
  "windowState",
  "cursor",
  "windowIcon",
  "minSize",
  "maxSize",
  "size",
  "pos",
  "on",
  "attributes",
  "windowFlags",
]);

const SVG_ATTRIBUTE_NAMES: Record<string, string> = {
  acceptCharset: "accept-charset",
  accentHeight: "accent-height",
  alignmentBaseline: "alignment-baseline",
  arabicForm: "arabic-form",
  baselineShift: "baseline-shift",
  capHeight: "cap-height",
  className: "class",
  clipPath: "clip-path",
  clipRule: "clip-rule",
  colorInterpolation: "color-interpolation",
  colorInterpolationFilters: "color-interpolation-filters",
  dominantBaseline: "dominant-baseline",
  enableBackground: "enable-background",
  fillOpacity: "fill-opacity",
  fillRule: "fill-rule",
  floodColor: "flood-color",
  floodOpacity: "flood-opacity",
  fontFamily: "font-family",
  fontSize: "font-size",
  fontSizeAdjust: "font-size-adjust",
  fontStretch: "font-stretch",
  fontStyle: "font-style",
  fontVariant: "font-variant",
  fontWeight: "font-weight",
  glyphName: "glyph-name",
  horizAdvX: "horiz-adv-x",
  horizOriginX: "horiz-origin-x",
  imageRendering: "image-rendering",
  letterSpacing: "letter-spacing",
  lightingColor: "lighting-color",
  markerEnd: "marker-end",
  markerMid: "marker-mid",
  markerStart: "marker-start",
  overlinePosition: "overline-position",
  overlineThickness: "overline-thickness",
  paintOrder: "paint-order",
  pointerEvents: "pointer-events",
  shapeRendering: "shape-rendering",
  stopColor: "stop-color",
  stopOpacity: "stop-opacity",
  strikethroughPosition: "strikethrough-position",
  strikethroughThickness: "strikethrough-thickness",
  strokeDasharray: "stroke-dasharray",
  strokeDashoffset: "stroke-dashoffset",
  strokeLinecap: "stroke-linecap",
  strokeLinejoin: "stroke-linejoin",
  strokeMiterlimit: "stroke-miterlimit",
  strokeOpacity: "stroke-opacity",
  strokeWidth: "stroke-width",
  textAnchor: "text-anchor",
  textDecoration: "text-decoration",
  textRendering: "text-rendering",
  underlinePosition: "underline-position",
  underlineThickness: "underline-thickness",
  unicodeBidi: "unicode-bidi",
  unicodeRange: "unicode-range",
  vectorEffect: "vector-effect",
  vertAdvY: "vert-adv-y",
  vertOriginX: "vert-origin-x",
  vertOriginY: "vert-origin-y",
  wordSpacing: "word-spacing",
  writingMode: "writing-mode",
  xHeight: "x-height",
  xlinkActuate: "xlink:actuate",
  xlinkArcrole: "xlink:arcrole",
  xlinkHref: "xlink:href",
  xlinkRole: "xlink:role",
  xlinkShow: "xlink:show",
  xlinkTitle: "xlink:title",
  xlinkType: "xlink:type",
  xmlBase: "xml:base",
  xmlLang: "xml:lang",
  xmlSpace: "xml:space",
};

const CASE_SENSITIVE_SVG_ATTRIBUTES = new Set([
  "attributeName",
  "baseFrequency",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "viewBox",
  "viewTarget",
]);

/**
 * @ignore
 */
export class RNSvg extends QSvgWidget implements RNWidget {
  static tagName = "svg";
  private props: SvgProps = {};
  private svgChildren: SvgRenderable[] = [];

  setProps(newProps: SvgProps, oldProps: SvgProps): void {
    this.props = newProps;

    setViewProps(this, getWidgetProps(newProps), getWidgetProps(oldProps));
    this.renderSvg();
  }

  appendInitialChild(child: any): void {
    this.appendChild(child);
  }

  appendChild(child: any): void {
    if (!isSvgRenderable(child)) {
      return;
    }

    child.setSvgParent(this);
    this.svgChildren = withoutSvgChild(this.svgChildren, child);
    this.svgChildren.push(child);
    this.renderSvg();
  }

  insertBefore(child: any, beforeChild: any): void {
    if (!isSvgRenderable(child)) {
      return;
    }

    child.setSvgParent(this);
    const nextChildren = withoutSvgChild(this.svgChildren, child);
    const childIndex = nextChildren.indexOf(beforeChild);

    if (childIndex === -1) {
      nextChildren.push(child);
    } else {
      nextChildren.splice(childIndex, 0, child);
    }

    this.svgChildren = nextChildren;
    this.renderSvg();
  }

  removeChild(child: any): void {
    const childIndex = this.svgChildren.indexOf(child);

    if (childIndex === -1) {
      return;
    }

    child.setSvgParent(null);
    this.svgChildren.splice(childIndex, 1);
    this.renderSvg();
  }

  requestRender(): void {
    this.renderSvg();
  }

  toSvgString(): string {
    return serializeElement("svg", this.props, this.svgChildren);
  }

  private renderSvg(): void {
    if (this.props.buffer instanceof Buffer) {
      this.load(this.props.buffer);
      return;
    }

    if (typeof this.props.src === "string" && this.props.src) {
      this.load(this.props.src);
      return;
    }

    const svg = typeof this.props.content === "string"
      ? this.props.content
      : this.toSvgString();

    this.load(Buffer.from(svg));
  }
}

/**
 * @ignore
 */
export class RNSvgElement implements RNComponent, SvgRenderable {
  private props: SvgElementProps = {};
  private svgChildren: SvgRenderable[] = [];
  private svgParent: SvgParent | null = null;

  constructor(private readonly svgTagName: string) {
  }

  setProps(newProps: SvgElementProps, _oldProps: SvgElementProps): void {
    this.props = newProps;
    this.requestRender();
  }

  appendInitialChild(child: any): void {
    this.appendChild(child);
  }

  appendChild(child: any): void {
    if (!isSvgRenderable(child)) {
      return;
    }

    child.setSvgParent(this);
    this.svgChildren = withoutSvgChild(this.svgChildren, child);
    this.svgChildren.push(child);
    this.requestRender();
  }

  insertBefore(child: any, beforeChild: any): void {
    if (!isSvgRenderable(child)) {
      return;
    }

    child.setSvgParent(this);
    const nextChildren = withoutSvgChild(this.svgChildren, child);
    const childIndex = nextChildren.indexOf(beforeChild);

    if (childIndex === -1) {
      nextChildren.push(child);
    } else {
      nextChildren.splice(childIndex, 0, child);
    }

    this.svgChildren = nextChildren;
    this.requestRender();
  }

  removeChild(child: any): void {
    const childIndex = this.svgChildren.indexOf(child);

    if (childIndex === -1) {
      return;
    }

    child.setSvgParent(null);
    this.svgChildren.splice(childIndex, 1);
    this.requestRender();
  }

  setSvgParent(parent: SvgParent | null): void {
    this.svgParent = parent;
  }

  requestRender(): void {
    if (this.svgParent) {
      this.svgParent.requestRender();
    }
  }

  toSvgString(): string {
    return serializeElement(this.svgTagName, this.props, this.svgChildren);
  }
}

export class RNSvgTextNode implements RNComponent, SvgRenderable {
  private svgParent: SvgParent | null = null;

  constructor(private text: string) {
  }

  setProps(newProps: RNProps, _oldProps: RNProps): void {
    this.text = String((newProps as { text?: string }).text ?? "");
    this.requestRender();
  }

  setText(text: string): void {
    this.text = text;
    this.requestRender();
  }

  appendInitialChild(): void {
    throw new Error("SVG text nodes cannot have children");
  }

  appendChild(): void {
    throw new Error("SVG text nodes cannot have children");
  }

  insertBefore(): void {
    throw new Error("SVG text nodes cannot have children");
  }

  removeChild(): void {
    throw new Error("SVG text nodes cannot have children");
  }

  setSvgParent(parent: SvgParent | null): void {
    this.svgParent = parent;
  }

  requestRender(): void {
    if (this.svgParent) {
      this.svgParent.requestRender();
    }
  }

  toSvgString(): string {
    return escapeText(this.text);
  }
}

export function createSvgElement(svgTagName: string, props: SvgElementProps): RNSvgElement {
  const element = new RNSvgElement(svgTagName);
  element.setProps(props, {});
  return element;
}

export function createSvgTextNode(text: string): RNSvgTextNode {
  return new RNSvgTextNode(text);
}

function getWidgetProps(props: SvgProps): ViewProps<QWidgetSignals> {
  return Object.keys(props || {}).reduce((widgetProps, key) => {
    if (WIDGET_PROP_NAMES.has(key)) {
      (widgetProps as Record<string, unknown>)[key] = props[key];
    }

    return widgetProps;
  }, {} as ViewProps<QWidgetSignals>);
}

function isSvgRenderable(value: unknown): value is SvgRenderable {
  return (
    value instanceof RNSvgElement
    || value instanceof RNSvgTextNode
  );
}

function withoutSvgChild(
  children: SvgRenderable[],
  child: SvgRenderable
): SvgRenderable[] {
  return children.filter((existingChild) => existingChild !== child);
}

function serializeElement(
  tagName: string,
  props: SvgProps | SvgElementProps,
  children: SvgRenderable[]
): string {
  const attributes = serializeAttributes(tagName, props);
  const innerSvg = serializeInnerSvg(props, children);

  if (innerSvg) {
    return `<${tagName}${attributes}>${innerSvg}</${tagName}>`;
  }

  return `<${tagName}${attributes}/>`;
}

function serializeInnerSvg(
  props: SvgProps | SvgElementProps,
  children: SvgRenderable[]
): string {
  const dangerousHtml = props.dangerouslySetInnerHTML as DangerousHtml | undefined;

  if (typeof dangerousHtml?.__html === "string") {
    return dangerousHtml.__html;
  }

  return [
    serializeTextChildren(props.children),
    ...children.map(child => child.toSvgString()),
  ].join("");
}

function serializeTextChildren(children: unknown): string {
  if (typeof children === "string" || typeof children === "number") {
    return escapeText(children);
  }

  if (Array.isArray(children)) {
    const hasOnlyPrimitiveChildren = children.every(
      (child) => typeof child === "string" || typeof child === "number"
    );

    if (!hasOnlyPrimitiveChildren) {
      return "";
    }

    return children
      .filter(child => typeof child === "string" || typeof child === "number")
      .map(child => escapeText(child as string | number))
      .join("");
  }

  return "";
}

function serializeAttributes(tagName: string, props: SvgProps | SvgElementProps): string {
  const attributes = Object.keys(props || {}).reduce((result, key) => {
    if (IGNORED_SVG_PROPS.has(key) || key.startsWith("on")) {
      return result;
    }

    const value = (props as Record<string, SvgPropValue>)[key];

    if (value === null || value === undefined) {
      return result;
    }

    const attributeName = getSvgAttributeName(key);
    const attributeValue = key === "style" && typeof value === "object"
      ? serializeStyle(value as Record<string, SvgPrimitive | null | undefined>)
      : String(value);

    if (!attributeValue) {
      return result;
    }

    result.push(`${attributeName}="${escapeAttribute(attributeValue)}"`);
    return result;
  }, [] as string[]);

  if (tagName === "svg" && !("xmlns" in (props || {}))) {
    attributes.unshift(`xmlns="${SVG_NAMESPACE}"`);
  }

  return attributes.length > 0 ? ` ${attributes.join(" ")}` : "";
}

function getSvgAttributeName(propName: string): string {
  if (SVG_ATTRIBUTE_NAMES[propName]) {
    return SVG_ATTRIBUTE_NAMES[propName];
  }

  if (
    CASE_SENSITIVE_SVG_ATTRIBUTES.has(propName)
    || propName.startsWith("data-")
    || propName.startsWith("aria-")
  ) {
    return propName;
  }

  return propName.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`);
}

function serializeStyle(style: Record<string, SvgPrimitive | null | undefined>): string {
  return Object.keys(style)
    .reduce((result, key) => {
      const value = style[key];

      if (value === null || value === undefined || value === false) {
        return result;
      }

      result.push(`${getSvgAttributeName(key)}:${String(value)}`);
      return result;
    }, [] as string[])
    .join(";");
}

function escapeText(value: string | number): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value: string): string {
  return escapeText(value).replace(/"/g, "&quot;");
}
