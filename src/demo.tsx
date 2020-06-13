import React from "react";
import { QIcon, QAction, QApplication } from "@nodegui/nodegui";
import path from "path";
import { MenuBar, Menu, SystemTrayIcon, Renderer, Window } from ".";

const quitAction = new QAction();
quitAction.setText("Quit");
quitAction.addEventListener("triggered", () => {
  const app = QApplication.instance();
  app.exit(0);
});

const fileActions: QAction[] = [quitAction];

const sayHi = new QAction();
sayHi.setText("Hello");
sayHi.addEventListener("triggered", () => {
  console.log("hello");
});

const randActions: QAction[] = [sayHi];

const trayIcon = new QIcon(
  path.join(__dirname, "../extras/assets/nodegui.png")
);
const separatorAction = new QAction();
separatorAction.setSeparator(true);

const systemTrayMenuActions = [sayHi, separatorAction, quitAction];

const App = () => {
  return (
    <Window>
      <SystemTrayIcon icon={trayIcon} tooltip="React Nodegui" visible>
        <Menu actions={systemTrayMenuActions} />
      </SystemTrayIcon>
      <MenuBar>
        <Menu title={"File"} actions={fileActions} />
        <Menu title={"Random"} actions={randActions} />
      </MenuBar>
    </Window>
  );
};

Renderer.render(<App />);
