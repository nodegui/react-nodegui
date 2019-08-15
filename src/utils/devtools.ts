// import pkg from "../../package.json";
import Reconciler from "../reconciler";

export const initDevtools = (reconciler: typeof Reconciler) => {
  let devtools;
  try {
    const window: any = global;
    window.WebSocket = require("ws");
    (global as any).window = window;
    devtools = require("react-devtools-core");
  } catch (e) {
    console.log(e);
  }

  if (devtools) {
    const ws = new WebSocket("ws://localhost:8097");
    devtools.connectToDevTools({
      websocket: ws
    });
    reconciler.injectIntoDevTools({
      bundleType: 1,
      version: "0.0.5-alpha", //pkg.version,
      rendererPackageName: "@nodegui/react-nodegui" //pkg.name
    });
  }
};
