import { QMainWindow, QWidget } from "@nodegui/nodegui";
import reconciler from "../reconciler";
import { initDevtools } from "../utils/devtools";

export const Renderer = {
  render(element: React.ReactNode, window: QMainWindow, callback: () => void) {
    // element: This is the react element for App component
    // window: This is the container that will contain the app.
    // callback: if specified will be called after render is done.
    (global as any).win = window; // TODO: GENERATE SOME UNIQUE NAME
    const rootView = new QWidget();
    rootView.setObjectName("rootView");
    window.setCentralWidget(rootView);
    const containerInfo = rootView;
    const isConcurrent = false; //disabling since there seems to be a bug with onclick listeneres (when called without a console.log inside them)
    const hydrate = false;

    const container = reconciler.createContainer(
      containerInfo,
      isConcurrent,
      hydrate
    ); // Creates root fiber node.

    initDevtools(reconciler); //TODO: Do it on dev mode only
    const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    reconciler.updateContainer(element, container, parentComponent, () => {
      window.show();
      callback();
    }); // Start reconcilation and render the result
  }
};
