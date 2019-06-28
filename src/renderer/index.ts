import { QMainWindow, QWidget } from "@nodegui/nodegui";
import reconciler from "../reconciler";

export const Renderer = {
  render(element: React.ReactNode, window: QMainWindow, callback: () => void) {
    // element: This is the react element for App component
    // window: This is the container that will contain the app.
    // callback: if specified will be called after render is done.
    const rootView = new QWidget();
    window.setCentralWidget(rootView);
    const containerInfo = rootView;
    rootView.setStyleSheet(`
      #divy {
        background-color: yellow;
        qproperty-flex: 1;
        qproperty-flexDirection: column;
        qproperty-alignItems: "center";
        qproperty-justifyContent: "space-between";
        qproperty-alignSelf: 'stretch';
        qproperty-justifySelf: 'stretch';
      }
      #hello {
        qproperty-flex: 1;
        color: blue;
      }
      #world {
        color: red;
      }
    `);

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
