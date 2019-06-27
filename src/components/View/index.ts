import { registerComponent } from "../config";
import { QWidget } from "@nodegui/nodegui";

export const View = registerComponent({
  id: "view",
  getContext() {
    return { name: "view" };
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: (
    newProps,
    rootInstance,
    currentHostContext,
    workInProgress
  ) => {
    const widget = new QWidget();
    return widget;
  },
  finalizeInitialChildren: (instance, newProps, rootInstance, context) => {
    return false;
  }
});
