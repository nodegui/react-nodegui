import { Fiber } from "react-reconciler";
import { registerComponent, ComponentConfig } from "../config";
import { RNSystemTrayIcon, SystemTrayIconProps } from "./RNSystemTrayIcon";
import { AppContainer } from "../../reconciler";

class SystemTrayIconConfig extends ComponentConfig {
  tagName = RNSystemTrayIcon.tagName;
  shouldSetTextContent(nextProps: SystemTrayIconProps): boolean {
    return false;
  }
  createInstance(
    newProps: SystemTrayIconProps,
    rootInstance: AppContainer,
    context: any,
    workInProgress: Fiber
  ): RNSystemTrayIcon {
    const widget = new RNSystemTrayIcon();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(
    instance: RNSystemTrayIcon,
    newProps: SystemTrayIconProps,
    internalInstanceHandle: any
  ): void {
    if (newProps.visible !== false) {
      instance.show();
    }
  }
  commitUpdate(
    instance: RNSystemTrayIcon,
    updatePayload: any,
    oldProps: SystemTrayIconProps,
    newProps: SystemTrayIconProps,
    finishedWork: Fiber
  ): void {
    instance.setProps(newProps, oldProps);
  }
}

export const SystemTrayIcon = registerComponent<SystemTrayIconProps>(
  new SystemTrayIconConfig()
);
