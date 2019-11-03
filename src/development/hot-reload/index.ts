import createProxy, { ReactProxyComponent } from "react-proxy";
import React from "react";

export let appProxy: ReactProxyComponent; // need to export it so that it stays without being gc'd

export function hot(Component: React.ComponentType): React.ComponentType {
  if (appProxy) {
    appProxy.update(Component);
  } else {
    appProxy = createProxy(Component);
  }
  return appProxy.get();
}
