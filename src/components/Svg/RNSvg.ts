import { QLabel, QPixmap, QSize } from "@nodegui/nodegui";
import { Component } from "@nodegui/nodegui/dist/lib/core/Component";
import { RNComponent, RNProps } from "../config";
import { TextProps, setTextProps } from "../Text/RNText";

export type SvgValue = string | number | boolean | undefined | null;

export interface SvgProps extends TextProps {
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  preserveAspectRatio?: string;
  xmlns?: string;
  fill?: SvgValue;
  stroke?: SvgValue;
  strokeWidth?: SvgValue;
  style?: string;
}

export interface SvgNodeProps extends RNProps {
  fill?: SvgValue;
  stroke?: SvgValue;
  strokeWidth?: SvgValue;
  opacity?: SvgValue;
  transform?: string;
  style?: string;
  id?: string;
  className?: string;
}

export interface SvgRectProps extends SvgNodeProps {
  x?: SvgValue;
  y?: SvgValue;
  width?: SvgValue;
  height?: SvgValue;
  rx?: SvgValue;
  ry?: SvgValue;
}

export interface SvgCircleProps extends SvgNodeProps {
  cx?: SvgValue;
  cy?: SvgValue;
  r?: SvgValue;
}

export interface SvgEllipseProps extends SvgNodeProps {
  cx?: SvgValue;
  cy?: SvgValue;
  rx?: SvgValue;
  ry?: SvgValue;
}

export interface SvgLineProps extends SvgNodeProps {
  x1?: SvgValue;
  y1?: SvgValue;
  x2?: SvgValue;
  y2?: SvgValue;
}

export interface SvgPolygonProps extends SvgNodeProps {
  points?: string;
}

export interface SvgPathProps extends SvgNodeProps {
  d?: string;
}

const svgNamespace = "http://www.w3.org/2000/svg";

const svgAttributeMap: { [key: string]: string } = {
  className: "class",
  preserveAspectRatio: "preserveAspectRatio",
  strokeWidth: "stroke-width",
};

const escapeXml = (value: SvgValue): string =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const serializeAttributes = (props: { [key: string]: SvgValue }): string =>
  Object.keys(props)
    .filter(
      (key) =>
        props[key] !== undefined && props[key] !== null && props[key] !== false
    )
    .map((key) => {
      const attributeName = svgAttributeMap[key] || key;
      return `${attributeName}="${escapeXml(props[key])}"`;
    })
    .join(" ");

const serializeElement = (
  tagName: string,
  props: { [key: string]: SvgValue },
  children: RNSvgNode[] = []
): string => {
  const attributes = serializeAttributes(props);
  const openTag = attributes ? `<${tagName} ${attributes}` : `<${tagName}`;
  if (!children.length) {
    return `${openTag} />`;
  }
  return `${openTag}>${children
    .map((child) => child.toSvgString())
    .join("")}</${tagName}>`;
};

const isSvgNode = (child: Component): child is RNSvgNode =>
  child instanceof RNSvgNode;

export abstract class RNSvgNode extends Component implements RNComponent {
  static tagName: string;
  protected props: SvgNodeProps = {};
  protected svgChildren: RNSvgNode[] = [];
  private parent: RNSvgNode | RNSvg | null = null;

  constructor() {
    super({ type: "native" });
  }

  setProps(newProps: SvgNodeProps, oldProps: SvgNodeProps): void {
    this.props = newProps;
    this.requestRender();
  }

  appendInitialChild(child: Component): void {
    this.appendChild(child);
  }

  appendChild(child: Component): void {
    if (!isSvgNode(child)) {
      return;
    }
    this.svgChildren.push(child);
    child.setSvgParent(this);
    this.requestRender();
  }

  insertBefore(child: Component, beforeChild: Component): void {
    if (!isSvgNode(child) || !isSvgNode(beforeChild)) {
      return;
    }
    const index = this.svgChildren.indexOf(beforeChild);
    if (index === -1) {
      this.appendChild(child);
      return;
    }
    this.svgChildren.splice(index, 0, child);
    child.setSvgParent(this);
    this.requestRender();
  }

  removeChild(child: Component): void {
    if (!isSvgNode(child)) {
      return;
    }
    this.svgChildren = this.svgChildren.filter(
      (existingChild) => existingChild !== child
    );
    child.setSvgParent(null);
    this.requestRender();
  }

  setSvgParent(parent: RNSvgNode | RNSvg | null): void {
    this.parent = parent;
  }

  requestRender(): void {
    if (this.parent) {
      this.parent.requestRender();
    }
  }

  abstract toSvgString(): string;
}

export class RNSvg extends QLabel implements RNComponent {
  static tagName = "svg";
  private props: SvgProps = {};
  private svgChildren: RNSvgNode[] = [];

  setProps(newProps: SvgProps, oldProps: SvgProps): void {
    this.props = newProps;
    setTextProps(this as any, newProps, oldProps);
    this.renderSvg();
  }

  appendInitialChild(child: Component): void {
    this.appendChild(child);
  }

  appendChild(child: Component): void {
    if (!isSvgNode(child)) {
      return;
    }
    this.svgChildren.push(child);
    child.setSvgParent(this);
    this.renderSvg();
  }

  insertBefore(child: Component, beforeChild: Component): void {
    if (!isSvgNode(child) || !isSvgNode(beforeChild)) {
      return;
    }
    const index = this.svgChildren.indexOf(beforeChild);
    if (index === -1) {
      this.appendChild(child);
      return;
    }
    this.svgChildren.splice(index, 0, child);
    child.setSvgParent(this);
    this.renderSvg();
  }

  removeChild(child: Component): void {
    if (!isSvgNode(child)) {
      return;
    }
    this.svgChildren = this.svgChildren.filter(
      (existingChild) => existingChild !== child
    );
    child.setSvgParent(null);
    this.renderSvg();
  }

  requestRender(): void {
    this.renderSvg();
  }

  scalePixmap(size: QSize): void {
    this.renderSvg(size.width(), size.height());
  }

  private renderSvg(
    width = this.size().width(),
    height = this.size().height()
  ): void {
    const pixmap = new QPixmap();
    pixmap.loadFromData(Buffer.from(this.toSvgString(width, height)));
    this.setPixmap(pixmap);
  }

  private toSvgString(renderWidth: number, renderHeight: number): string {
    const width = this.props.width || renderWidth || 100;
    const height = this.props.height || renderHeight || 100;
    const attributes = serializeAttributes({
      fill: this.props.fill,
      height,
      preserveAspectRatio: this.props.preserveAspectRatio,
      stroke: this.props.stroke,
      strokeWidth: this.props.strokeWidth,
      style: this.props.style,
      viewBox: this.props.viewBox,
      width,
      xmlns: this.props.xmlns || svgNamespace,
    });
    return `<svg ${attributes}>${this.svgChildren
      .map((child) => child.toSvgString())
      .join("")}</svg>`;
  }
}

export class RNSvgGroup extends RNSvgNode {
  static tagName = "g";
  toSvgString(): string {
    return serializeElement(
      "g",
      this.props as { [key: string]: SvgValue },
      this.svgChildren
    );
  }
}

export class RNSvgRect extends RNSvgNode {
  static tagName = "rect";
  protected props: SvgRectProps = {};
  toSvgString(): string {
    return serializeElement("rect", this.props as { [key: string]: SvgValue });
  }
}

export class RNSvgCircle extends RNSvgNode {
  static tagName = "circle";
  protected props: SvgCircleProps = {};
  toSvgString(): string {
    return serializeElement(
      "circle",
      this.props as { [key: string]: SvgValue }
    );
  }
}

export class RNSvgEllipse extends RNSvgNode {
  static tagName = "ellipse";
  protected props: SvgEllipseProps = {};
  toSvgString(): string {
    return serializeElement(
      "ellipse",
      this.props as { [key: string]: SvgValue }
    );
  }
}

export class RNSvgLine extends RNSvgNode {
  static tagName = "line";
  protected props: SvgLineProps = {};
  toSvgString(): string {
    return serializeElement("line", this.props as { [key: string]: SvgValue });
  }
}

export class RNSvgPolygon extends RNSvgNode {
  static tagName = "polygon";
  protected props: SvgPolygonProps = {};
  toSvgString(): string {
    return serializeElement(
      "polygon",
      this.props as { [key: string]: SvgValue }
    );
  }
}

export class RNSvgPath extends RNSvgNode {
  static tagName = "path";
  protected props: SvgPathProps = {};
  toSvgString(): string {
    return serializeElement("path", this.props as { [key: string]: SvgValue });
  }
}
