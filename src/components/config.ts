import { NodeWidget } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { AppContainer } from "../reconciler";

type UpdatePayload = any;

export interface RNProps {}
export abstract class RNWidget extends NodeWidget {
  static tagName: string;
  abstract setProps(newProps: RNProps, oldProps: RNProps): void;
  abstract appendInitialChild(child: NodeWidget): void;
  abstract appendChild(child: NodeWidget): void;
  abstract insertBefore(child: NodeWidget, beforeChild: NodeWidget): void;
  abstract removeChild(child: NodeWidget): void;
}
export abstract class ComponentConfig {
  abstract tagName: string;
  getContext(parentContext: any, rootInstance: AppContainer) {
    return {};
  }
  abstract shouldSetTextContent(nextProps: RNProps): boolean;
  abstract createInstance(
    newProps: RNProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): NodeWidget;
  finalizeInitialChildren(
    instance: NodeWidget,
    newProps: RNProps,
    rootContainerInstance: AppContainer,
    context: any
  ) {
    return false;
  }
  commitMount(
    instance: NodeWidget,
    newProps: RNProps,
    internalInstanceHandle: any
  ) {
    return;
  }
  // Update methods:
  prepareUpdate(
    instance: NodeWidget,
    oldProps: RNProps,
    newProps: RNProps,
    rootContainerInstance: AppContainer,
    hostContext: any
  ): UpdatePayload {
    return true;
  }
  abstract commitUpdate(
    instance: NodeWidget,
    updatePayload: any,
    oldProps: RNProps,
    newProps: RNProps,
    finishedWork: Fiber
  ): void;
}

type ReactNodeGuiTag<P> = string | React.ComponentType<P>;

const components = new Map<string, ComponentConfig>();

export const getComponentByTagName = (tagName: string): ComponentConfig => {
  const config = components.get(tagName);
  if (!config) {
    throw `Unknown component ${tagName}`;
  }
  return config;
};

export function registerComponent<Props>(
  config: ComponentConfig
): ReactNodeGuiTag<Props> {
  if (components.has(config.tagName)) {
    throw `A component with tagName: ${config.tagName} already exists. This base component will be ignored`;
  }
  components.set(config.tagName, config);
  return config.tagName;
}
