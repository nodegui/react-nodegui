import reconciler, { appContainer } from "../reconciler";
import ReactReconciler, { Reconciler } from "react-reconciler";
import React from "react";
import { NodeWidget } from "@nodegui/nodegui";
import { RNComponent } from "../components/config";
//@ts-ignore
import deepForceUpdate from "react-deep-force-update";

type NodeGuiReconciler = Reconciler<
  RNComponent,
  any,
  Set<NodeWidget<any>>,
  any
>;

export type RendererOptions = {
  onRender?: () => void;
  onInit?: (reconciler: NodeGuiReconciler) => void;
};
const defaultOptions: RendererOptions = {
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

    (rendererOptions.onInit as Function)(reconciler);

    const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    reconciler.updateContainer(
      element,
      Renderer.container,
      parentComponent,
      () => {
        (rendererOptions.onRender as Function)();
      }
    ); // Start reconcilation and render the result
  }
}

// When webpack bundles everthing into one js file, there is no require cache. Hence, all the modules are present in a single array.
// When all the instructions from this bundled js file is executed and there are no more events left to listen to,
// NodeJs tries to clear up everything. Since all the modules in the bundled file are in a single variable and there is nothing referencing it,
// the gc is able to clean up even those. This is not the case in a regular nodejs app where we have require cache that keeps reference to all the modules.
// Hence to prevent all the modules from being gc'ed we keep reference to one of the modules in the entire array of modules.
// Here, we chose React, but it can be anything.
(global as any).__REACT__ = React;
