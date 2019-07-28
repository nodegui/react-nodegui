import reconciler, { appContainer } from "../reconciler";
import { initDevtools } from "../utils/devtools";

type Options = {
  enableDevtools?: boolean;
  onRender?: () => void;
};
const defaultOptions = {
  enableDevtools: false,
  onRender: () => {}
};

export const Renderer = {
  render(element: React.ReactNode, options?: Options) {
    const containerInfo = appContainer;
    const isConcurrent = false; //disabling since there seems to be a bug with onclick listeneres (when called without a console.log inside them)
    const hydrate = false;

    const rendererOptions = Object.assign({}, defaultOptions, options);

    const container = reconciler.createContainer(
      containerInfo,
      isConcurrent,
      hydrate
    ); // Creates root fiber node.

    if (rendererOptions.enableDevtools) {
      initDevtools(reconciler);
    }
    const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    reconciler.updateContainer(element, container, parentComponent, () => {
      rendererOptions.onRender();
    }); // Start reconcilation and render the result
  }
};
