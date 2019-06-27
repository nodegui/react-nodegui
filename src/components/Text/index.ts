import { registerComponent } from "../config";
import { QLabel } from "@nodegui/nodegui";

export const Text = registerComponent({
  id: "text",
  getContext() {
    return { name: "text" };
  },
  shouldSetTextContent: () => {
    return true;
  },
  createInstance: (
    newProps,
    rootInstance,
    currentHostContext,
    workInProgress
  ) => {
    const label = new QLabel();
    return label;
  },
  finalizeInitialChildren: (instance, newProps, rootInstance, context) => {
    return false;
  }
});
