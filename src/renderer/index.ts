import { QMainWindow, QWidget } from "@nodegui/nodegui";
import reconciler from "../reconciler";

export const Renderer = {
  render(element: React.ReactNode, window: QMainWindow, callback: () => void) {
    // element: This is the react element for App component
    // window: This is the container that will contain the app.
    // callback: if specified will be called after render is done.
    const rootView = new QWidget();
    rootView.setObjectName("rootView");
    window.setCentralWidget(rootView);
    const containerInfo = rootView;
    const isConcurrent = false; //TODO: Enable this
    const hydrate = false;

    const container = reconciler.createContainer(
      containerInfo,
      isConcurrent,
      hydrate
    ); // Creates root fiber node.

    const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    reconciler.updateContainer(element, container, parentComponent, () => {
      window.show();
      callback();
    }); // Start reconcilation and render the result
  }
};
