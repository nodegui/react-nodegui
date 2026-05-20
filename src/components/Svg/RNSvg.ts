import { QSvgWidget, QWidgetSignals } from "@nodegui/nodegui";
import { RNComponent, RNProps, RNWidget } from "../config";
import { ViewProps, setViewProps } from "../View/RNView";

type SvgPrimitive = string | number | boolean;
type SvgPropValue =
  | SvgPrimitive
  | null
  | undefined
  | Record<string, SvgPrimitive | null | undefined>;

export interface SvgProps extends ViewProps<QWidgetSignals> {
  src?: string;
  buffer?: Buffer;
  content?: string;
  children?: unknown;
  [attribute: string]: SvgPropValue | unknown;
}

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

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
  colorProfile: "color-profile",
  colorRendering: "color-rendering",
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
  glyphOrientationHorizontal: "glyph-orientation-horizontal",
  glyphOrientationVertical: "glyph-orientation-vertical",
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
  unitsPerEm: "units-per-em",
  vAlphabetic: "v-alphabetic",
  vHanging: "v-hanging",
  vIdeographic: "v-ideographic",
  vMathematical: "v-mathematical",
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

const WIDGET_ONLY_PROPS = new Set([
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

export class RNSvg extends QSvgWidget implements RNWidget {
  static tagName = "svg";
  private svgChildren: SvgRenderable[] = [];
  private props: SvgProps = {};

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
    this.svgChildren.push(child);
    this.renderSvg();
  }

  insertBefore(child: any, beforeChild: any): void {
    if (!isSvgRenderable(child)) {
      return;
    }
    child.setSvgParent(this);
    const index = this.svgChildren.indexOf(beforeChild);
    if (index === -1) {
      this.svgChildren.push(child);
    } else {
      this.svgChildren.splice(index, 0, child);
    }
    this.renderSvg();
  }

  removeChild(child: any): void {
    const index = this.svgChildren.indexOf(child);
    if (index === -1) {
      return;
    }
    child.setSvgParent(null);
    this.svgChildren.splice(index, 1);
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

export class RNSvgElement implements RNComponent {
  private children: SvgRenderable[] = [];
  private parent: SvgParent | null = null;

  constructor(private readonly tagName: string, private props: RNProps) {}

  setProps(newProps: RNProps): void {
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
    this.children.push(child);
    this.requestRender();
  }

  insertBefore(child: any, beforeChild: any): void {
    if (!isSvgRenderable(child)) {
      return;
    }
    child.setSvgParent(this);
    const index = this.children.indexOf(beforeChild);
    if (index === -1) {
      this.children.push(child);
    } else {
      this.children.splice(index, 0, child);
    }
    this.requestRender();
  }

  removeChild(child: any): void {
    const index = this.children.indexOf(child);
    if (index === -1) {
      return;
    }
    child.setSvgParent(null);
    this.children.splice(index, 1);
    this.requestRender();
  }

  setSvgParent(parent: SvgParent | null): void {
    this.parent = parent;
  }

  requestRender(): void {
    this.parent && this.parent.requestRender();
  }

  toSvgString(): string {
    return serializeElement(this.tagName, this.props, this.children);
  }
}

export type SvgParent = RNSvg | RNSvgElement;

export interface SvgRenderable {
  setSvgParent(parent: SvgParent | null): void;
  toSvgString(): string;
}

export function createSvgElement(tagName: string, props: RNProps): RNSvgElement {
  return new RNSvgElement(tagName, props);
}

function getWidgetProps(props: SvgProps): ViewProps<QWidgetSignals> {
  return Object.keys(props || {}).reduce((acc, key) => {
    if (WIDGET_ONLY_PROPS.has(key)) {
      (acc as Record<string, unknown>)[key] = props[key];
    }
    return acc;
  }, {} as ViewProps<QWidgetSignals>);
}

function isSvgRenderable(value: unknown): value is SvgRenderable {
  return (
    typeof value === "object"
    && value !== null
    && typeof (value as SvgRenderable).toSvgString === "function"
  );
}

function serializeElement(
  tagName: string,
  props: RNProps,
  children: SvgRenderable[]
): string {
  const innerSvg = getInnerSvg(props, children);
  const attributes = serializeAttributes(tagName, props);

  return innerSvg
    ? `<${tagName}${attributes}>${innerSvg}</${tagName}>`
    : `<${tagName}${attributes}/>`;
}

function getInnerSvg(props: RNProps, children: SvgRenderable[]): string {
  const dangerousHtml = (props as any).dangerouslySetInnerHTML;
  if (dangerousHtml && typeof dangerousHtml.__html === "string") {
    return dangerousHtml.__html;
  }

  const renderedChildren = children.map((child) => child.toSvgString()).join("");
  const propChildren = (props as any).children;

  if (typeof propChildren === "string" || typeof propChildren === "number") {
    return `${escapeText(propChildren)}${renderedChildren}`;
  }

  if (Array.isArray(propChildren)) {
    const textChildren = propChildren
      .filter((child) => typeof child === "string" || typeof child === "number")
      .map((child) => escapeText(child))
      .join("");

    if (textChildren) {
      return `${textChildren}${renderedChildren}`;
    }
  }

  return renderedChildren;
}

function serializeAttributes(tagName: string, props: RNProps): string {
  const attributes = Object.keys(props || {}).reduce((acc, key) => {
    if (IGNORED_SVG_PROPS.has(key) || key.startsWith("on")) {
      return acc;
    }

    const value = (props as Record<string, SvgPropValue>)[key];
    if (value === null || value === undefined || value === false) {
      return acc;
    }

    const attrName = SVG_ATTRIBUTE_NAMES[key] || key;
    const attrValue = key === "style" && typeof value === "object"
      ? serializeStyle(value)
      : String(value);

    if (!attrValue) {
      return acc;
    }

    acc.push(value === true ? attrName : `${attrName}="${escapeAttribute(attrValue)}"`);
    return acc;
  }, [] as string[]);

  if (tagName === "svg" && !("xmlns" in (props || {}))) {
    attributes.unshift(`xmlns="${SVG_NAMESPACE}"`);
  }

  return attributes.length ? ` ${attributes.join(" ")}` : "";
}

function serializeStyle(style: Record<string, SvgPrimitive | null | undefined>): string {
  return Object.keys(style)
    .reduce((acc, key) => {
      const value = style[key];
      if (value === null || value === undefined || value === false) {
        return acc;
      }

      const cssName = SVG_ATTRIBUTE_NAMES[key] || key.replace(/[A-Z]/g, "-$&").toLowerCase();
      acc.push(`${cssName}:${String(value)}`);
      return acc;
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
