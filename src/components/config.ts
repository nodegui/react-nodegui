import { QWidget, Component } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { AppContainer } from "../reconciler";

type UpdatePayload = any;

export interface RNProps {}

export abstract class RNComponent {
  static tagName: string;
  abstract setProps(newProps: RNProps, oldProps: RNProps): void;
  abstract appendInitialChild(child: Component): void;
  abstract appendChild(child: Component): void;
  abstract insertBefore(child: Component, beforeChild: Component): void;
  abstract removeChild(child: Component): void;
}
export abstract class RNWidget extends QWidget<any> implements RNComponent {
  static tagName: string;
  abstract setProps(newProps: RNProps, oldProps: RNProps): void;
  abstract appendInitialChild(child: QWidget<any>): void;
  abstract appendChild(child: QWidget<any>): void;
  abstract insertBefore(
    child: QWidget<any>,
    beforeChild: QWidget<any>
  ): void;
  abstract removeChild(child: QWidget<any>): void;
}
export abstract class ComponentConfig {
  abstract tagName: string;
  getContext(parentContext: any, rootInstance: AppContainer) {
    return {};
  }
  abstract shouldSetTextContent(nextProps: RNProps): boolean;
  abstract createInstance(
    newProps: RNProps,
    rootInstance?: AppContainer,
    context?: any,
    workInProgress?: Fiber
  ): RNComponent;
  finalizeInitialChildren(
    instance: RNComponent,
    newProps: RNProps,
    rootContainerInstance: AppContainer,
    context: any
  ) {
    return false;
  }
  commitMount(
    instance: RNComponent,
    newProps: RNProps,
    internalInstanceHandle: any
  ) {
    return;
  }
  // Update methods:
  prepareUpdate(
    instance: RNComponent,
    oldProps: RNProps,
    newProps: RNProps,
    rootContainerInstance: AppContainer,
    hostContext: any
  ): UpdatePayload {
    return true;
  }
  abstract commitUpdate(
    instance: RNComponent,
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
