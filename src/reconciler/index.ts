import Reconciler from "react-reconciler";
import { NodeWidget, QWidget, FlexLayout } from "@nodegui/nodegui";
import { getComponent } from "../components/config";
import * as scheduler from "scheduler";
//@ts-ignore
const HostConfig: Reconciler.HostConfig<
  string,
  object,
  QWidget,
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
  appendInitialChild: function(parentInstance, child: NodeWidget) {
    let layout = parentInstance.layout;
    if (!layout) {
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(parentInstance.getFlexNode());
      parentInstance.setLayout(flexLayout);
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
    let layout = container.layout;
    if (!layout) {
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(container.getFlexNode());
      container.setLayout(flexLayout);
      layout = flexLayout;
    }
    layout.addWidget(child);
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
  appendChild: (parent, child) => {
    let layout = parent.layout;
    if (!layout) {
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(parent.getFlexNode());
      parent.setLayout(flexLayout);
      layout = flexLayout;
    }
    (layout as FlexLayout).addWidget(child);
  },
  removeChild: (parent, child) => {
    let layout = parent.layout;
    if (!layout) {
      console.log("parent has no layout to remove child from");
      return;
    }
    (layout as FlexLayout).removeWidget(child);
  },
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  //@ts-ignore
  schedulePassiveEffects: (callback: any) => {
    // For supporting useEffect hook
    if (callback) {
      return setTimeout(callback, 0);
    }
  },
  cancelPassiveEffects: (cbHandler: any) => {
    // For supporting useEffect hooks - cancellation
    clearTimeout(cbHandler);
  },
  getPublicInstance: instance => {
    //for supporting refs
    return instance;
  },
  shouldDeprioritizeSubtree: (type, props) => {
    // Use to deprioritize entire subtree based on props and types. For example if you dont need reconciler to calculate for hidden elements
    return false;
  },
  // Fiber stuff I think
  scheduleDeferredCallback: scheduler.unstable_scheduleCallback,
  cancelDeferredCallback: scheduler.unstable_cancelCallback,
  // shouldYield,
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: null,
  isPrimaryRenderer: true

  // -------------------
  //      Mutation
  //     (optional)
  // -------------------
  // appendChild,
  // commitTextUpdate,
  // commitMount,
  // commitUpdate,
  // insertBefore,
  // insertInContainerBefore,
  // removeChild,
  // removeChildFromContainer,
  // resetTextContent,
  // hideInstance,
  // hideTextInstance,
  // unhideInstance,
  // unhideTextInstance,
};

export default Reconciler(HostConfig);
