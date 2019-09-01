import { NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { AppContainer } from "../reconciler";

type UpdatePayload = any;
export abstract class ComponentConfig {
  abstract id: string;
  getContext(parentContext: any, rootInstance: AppContainer) {
    return {};
  }
  abstract shouldSetTextContent(nextProps: object): boolean;
  abstract createInstance(
    newProps: object,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): NodeWidget;
  finalizeInitialChildren(
    instance: NodeWidget,
    newProps: object,
    rootContainerInstance: AppContainer,
    context: any
  ) {
    return false;
  }
  commitMount(
    instance: NodeWidget,
    newProps: object,
    internalInstanceHandle: any
  ) {
    return;
  }
  // Update methods:
  prepareUpdate(
    instance: NodeWidget,
    oldProps: object,
    newProps: object,
    rootContainerInstance: AppContainer,
    hostContext: any
  ): UpdatePayload {
    return true;
  }
  abstract commitUpdate(
    instance: NodeWidget,
    updatePayload: any,
    oldProps: object,
    newProps: object,
    finishedWork: Fiber
  ): void;
}

type ReactNodeGuiTag<P> = string | React.ComponentType<P>;

const components = new Map<string, ComponentConfig>();

export const getComponent = (id: string): ComponentConfig => {
  const config = components.get(id);
  if (!config) {
    throw `Unknown component ${id}`;
  }
  return config;
};

export function registerComponent<Props>(
  config: ComponentConfig
): ReactNodeGuiTag<Props> {
  if (components.has(config.id)) {
    throw `A component with id: ${config.id} already exists. This base component will be ignored`;
  }
  components.set(config.id, config);
  return config.id;
}
