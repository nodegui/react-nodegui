import reconciler, { appContainer } from "../reconciler";
import ReactReconciler, { Reconciler } from "react-reconciler";
import React from "react";
import { NodeWidget } from "@nodegui/nodegui";
import { RNComponent } from "../components/config";
//@ts-ignore
import deepForceUpdate from "react-deep-force-update";

type NodeGuiReconciler = Reconciler<RNComponent, any, Set<NodeWidget>, any>;

export type RendererOptions = {
  onRender?: () => void;
  onInit?: (reconciler: NodeGuiReconciler) => void;
};
const defaultOptions = {
  onInit: () => {},
  onRender: () => {}
};

export class Renderer {
  static container?: ReactReconciler.FiberRoot;
  static forceUpdate() {
    if (Renderer.container) {
      //@ts-ignore
      Renderer.container._reactInternalInstance = Renderer.container.current;
      deepForceUpdate(Renderer.container);
    }
  }
  static render(element: React.ReactNode, options?: RendererOptions) {
    const containerInfo = appContainer;
    const isConcurrent = true;
    const hydrate = false;

    const rendererOptions = Object.assign({}, defaultOptions, options);

    Renderer.container = reconciler.createContainer(
      containerInfo,
      isConcurrent,
      hydrate
    ); // Creates root fiber node.

    rendererOptions.onInit(reconciler);

    const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    reconciler.updateContainer(
      element,
      Renderer.container,
      parentComponent,
      () => {
        rendererOptions.onRender();
      }
    ); // Start reconcilation and render the result
  }
}
