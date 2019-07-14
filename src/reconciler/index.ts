import Reconciler from "react-reconciler";
import { NodeWidget, FlexLayout } from "@nodegui/nodegui";
import { getComponent } from "../components/config";
import * as scheduler from "scheduler";

export type AppContainer = Set<NodeWidget>;
export const appContainer: AppContainer = new Set<NodeWidget>();

const HostConfig: Reconciler.HostConfig<
  string,
  object,
  AppContainer,
  NodeWidget,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
> = {
  now: Date.now,
  getRootHostContext: function(nextRootInstance) {
    let context = {
      name: "rootnode"
    };
    return context;
  },
  getChildHostContext: function(parentContext, fiberType, rootInstance) {
    const { getContext } = getComponent(fiberType);
    return getContext(parentContext, rootInstance);
  },
  shouldSetTextContent: function(type, nextProps) {
    const { shouldSetTextContent } = getComponent(type);
    return shouldSetTextContent(nextProps);
  },
  createTextInstance: function(
    newText,
    rootContainerInstance,
    context,
    workInProgress
  ) {
    // throw new Error(`Can't create text without <Text> for text: ${newText}`);
    console.warn(
      "createTextInstance called in reconciler when platform doesnt have host level text. "
    );
    console.warn(`Use <Text /> component to add the text: ${newText}`);
  },
  createInstance: function(
    type,
    newProps,
    rootContainerInstance,
    context,
    workInProgress
  ) {
    const { createInstance } = getComponent(type);
    return createInstance(
      newProps,
      rootContainerInstance,
      context,
      workInProgress
    );
  },
  appendInitialChild: function(parent, child: NodeWidget) {
    if (!child) {
      return;
    }
    let layout = parent.layout;
    if (!layout) {
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(parent.getFlexNode());
      parent.setLayout(flexLayout);
      layout = flexLayout;
    }
    layout.addWidget(child);
  },
  finalizeInitialChildren: function(
    instance,
    type,
    newProps,
    rootContainerInstance,
    context
  ) {
    const { finalizeInitialChildren } = getComponent(type);
    return finalizeInitialChildren(
      instance,
      newProps,
      rootContainerInstance,
      context
    );
  },
  prepareForCommit: function(rootNode) {
    // noop
  },
  resetAfterCommit: function(rootNode) {
    // noop
  },
  commitMount: function(instance, type, newProps, internalInstanceHandle) {
    const { commitMount } = getComponent(type);
    return commitMount(instance, newProps, internalInstanceHandle);
  },
  appendChildToContainer: function(container, child: NodeWidget) {
    container.add(child);
  },
  insertInContainerBefore: (container, child, beforeChild) => {
    container.add(child);
  },
  removeChildFromContainer: (container, child) => {
    container.delete(child);
  },
  prepareUpdate: function(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) {
    const { prepareUpdate } = getComponent(type);
    return prepareUpdate(
      instance,
      oldProps,
      newProps,
      rootContainerInstance,
      hostContext
    );
  },
  commitUpdate: function(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    const { commitUpdate } = getComponent(type);
    return commitUpdate(
      instance,
      updatePayload,
      oldProps,
      newProps,
      finishedWork
    );
  },
  appendChild: (parent, child) => {
    if (!child) {
      return;
    }
    let layout = parent.layout;
    if (!layout) {
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(parent.getFlexNode());
      parent.setLayout(flexLayout);
      layout = flexLayout;
    }
    (layout as FlexLayout).addWidget(child);
  },
  insertBefore: (parent, child: NodeWidget, beforeChild: NodeWidget) => {
    let layout = parent.layout;
    if (!layout) {
      console.warn("parent has no layout to insert child before another child");
      return;
    }
    (layout as FlexLayout).insertChildBefore(child, beforeChild);
  },
  removeChild: (parent, child) => {
    let layout = parent.layout;
    if (!layout) {
      console.warn("parent has no layout to remove child from");
      return;
    }
    (layout as FlexLayout).removeWidget(child);
  },
  commitTextUpdate: (textInstance, oldText, newText) => {
    //noop since we manage all text using Text component
    console.warn(
      "commitTextUpdate called when platform doesnt have host level text"
    );
  },
  resetTextContent: instance => {
    console.warn("resetTextContent in reconciler triggered!");
    // noop for now till we find when this method is triggered
  },
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  getPublicInstance: instance => {
    //for supporting refs
    return instance;
  },
  shouldDeprioritizeSubtree: (type, props) => {
    // Use to deprioritize entire subtree based on props and types. For example if you dont need reconciler to calculate for hidden elements
    if ((props as any).visible === false) {
      return true;
    }
    return false;
  },
  //@ts-ignore
  hideInstance: (instance: NodeWidget) => {
    instance.hide();
  },
  unhideInstance: (instance: NodeWidget, props: object) => {
    instance.show();
  },
  hideTextInstance: (instance: any) => {
    // noop since we dont have any host text
    console.warn(
      "hideTextInstance called when platform doesnt have host level text"
    );
  },
  unhideTextInstance: (instance: NodeWidget, props: object) => {
    // noop since we dont have any host text
    console.warn(
      "unhideTextInstance called when platform doesnt have host level text"
    );
  },
  // Fiber stuff I think
  schedulePassiveEffects: scheduler.unstable_scheduleCallback, // For supporting useEffect hook,
  cancelPassiveEffects: scheduler.unstable_cancelCallback, // For supporting useEffect hooks - cancellation
  scheduleDeferredCallback: scheduler.unstable_scheduleCallback,
  cancelDeferredCallback: scheduler.unstable_cancelCallback,
  shouldYield: () => {
    // When can renderer just rest and not do any work. Basically if shouldYield returns true the renderer would just sleep and pause.
    // This method will be continuously polled by the reconciler to check if renderer should resume.
    return false;
  },
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  isPrimaryRenderer: true
};

export default Reconciler(HostConfig);
