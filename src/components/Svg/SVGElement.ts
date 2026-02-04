import { Component } from "@nodegui/nodegui";
import { RNComponent, RNProps } from "../config";

/**
 * Abstract base class for all SVG sub-elements.
 * Handles the virtual hierarchy and prop-to-attribute mapping.
 */
export abstract class SVGElement extends RNComponent {
  parent?: SVGElement | any;
  children: SVGElement[] = [];
  props: any = {};

  constructor(props: any) {
    super();
    this.props = props;
  }

  setProps(newProps: RNProps, oldProps: RNProps): void {
    this.props = { ...this.props, ...newProps };
    this.onUpdate();
  }

  appendInitialChild(child: Component): void {
    this.appendChild(child);
  }

  appendChild(child: Component): void {
    if (child instanceof SVGElement) {
      child.parent = this;
      this.children.push(child);
      this.onUpdate();
    }
  }

  // ... (Standard React Node methods: insertBefore, removeChild)

  onUpdate() {
    // Bubble up updates to the root <svg> container to trigger re-render
    if (this.parent && typeof this.parent.onUpdate === "function") {
      this.parent.onUpdate();
    }
  }

  abstract getTagName(): string;

  /**
   * Serializes the component and its children to an SVG XML string.
   */
  toSVGString(): string {
    const tagName = this.getTagName();
    const attribs = { ...this.props };
    delete attribs.children; // Don't render children as attributes

    const attrString = Object.entries(attribs)
      .map(([key, value]) => {
        if (value === undefined || value === null) return "";
        const attrName = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
        return `${attrName}="${value}"`;
      })
      .filter((s) => s !== "")
      .join(" ");

    if (this.children.length === 0) {
       return `<${tagName} ${attrString} />`;
    }
    const childrenString = this.children.map((c) => c.toSVGString()).join("");
    return `<${tagName} ${attrString}>${childrenString}</${tagName}>`;
  }
}

// ... (Subclasses: SVGRect, SVGCircle, etc.)
