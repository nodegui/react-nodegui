import reconciler, { appContainer } from "../reconciler";
import { initDevtools } from "../utils/devtools";

export const Renderer = {
  render(element: React.ReactNode, callback: () => void) {
    // element: This is the react element for App component
    // window: This is the container that will contain the app.
    // callback: if specified will be called after render is done.
    const containerInfo = appContainer;
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
      callback();
    }); // Start reconcilation and render the result
  }
};
