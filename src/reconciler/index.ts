import Reconciler from "react-reconciler";

enum FiberType {
  Text,
  View,
  Button
}

//@ts-ignore
const HostConfig: Reconciler.HostConfig<
  FiberType,
  object,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
> = {
  //TODO We will specify all required methods here
  now: Date.now,
  getRootHostContext: function(nextRootInstance: any) {
    console.log("Root node", nextRootInstance);
    let context = {
      // This can contain any data that you want to pass down to immediate child
    };
    return context;
  },
  getChildHostContext: function(parentContext, fiberType, rootInstance) {
    let context = {};
    return context;
  },
  shouldSetTextContent: function(type, nextProps) {
    console.log("shouldSetTextContent", type, nextProps);
    return false;
  },
  createTextInstance: function(...args: any[]) {
    console.log("createTextInstance", ...args);
  },
  createInstance: function(...args: any[]) {
    console.log("createInstance", ...args);
  },
  appendInitialChild: function(...args: any[]) {
    console.log("appendInitialChild", ...args);
  },
  finalizeInitialChildren: function(
    instance,
    type,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    console.log(
      "finalizeInitialChildren",
      instance,
      type,
      newProps,
      rootContainerInstance,
      currentHostContext
    );
    return false;
  },
  prepareForCommit: function(...args: any[]) {
    console.log("prepareForCommit", ...args);
  },
  resetAfterCommit: function(...args: any[]) {
    console.log("resetAfterCommit", ...args);
  }
};

export default Reconciler(HostConfig);
