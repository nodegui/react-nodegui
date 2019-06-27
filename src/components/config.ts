import { NodeWidget, QWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";

export type ComponentConfig = {
  id: string;
  getContext: (parentContext: any, rootInstance: QWidget) => any;
  shouldSetTextContent: (nextProps: object) => boolean;
  createInstance: (
    newProps: object,
    rootInstance: QWidget,
    context: any,
    workInProgress: Fiber
  ) => NodeWidget;
  finalizeInitialChildren: (
    instance: NodeWidget,
    newProps: object,
    rootContainerInstance: QWidget,
    context: any
  ) => boolean;
};

type ReactDesktopTag = string | React.ComponentType;

const components = new Map<string, ComponentConfig>();

export const getComponent = (id: string): ComponentConfig => {
  const config = components.get(id);
  if (!config) {
    throw `Unknown component ${id}`;
  }
  return config;
};

export const registerComponent = (config: ComponentConfig): ReactDesktopTag => {
  if (components.has(config.id)) {
    throw `A component with id: ${config.id} already exists. This base component will be ignored`;
  }
  components.set(config.id, config);
  return config.id;
};
