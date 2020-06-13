import React from "react";
import {
  QIcon,
  QMenu,
  QAction,
  QMessageBox,
  QPushButton,
  ButtonRole,
  QApplication,
} from "@nodegui/nodegui";
import path from "path";
import { MenuBar, Menu, SystemTrayIcon, Renderer, Window } from ".";

const icon = new QIcon(path.join(__dirname, "../extras/assets/nodegui.png"));
const menu = new QMenu();
const action = new QAction();
action.setText("Message");
action.addEventListener("triggered", () => {
  const messageBox = new QMessageBox();
  messageBox.setText("Welcome to React Nodegui!");
  const accept = new QPushButton();
  accept.setText("Accept");
  messageBox.addButton(accept, ButtonRole.AcceptRole);
  messageBox.exec();
});
menu.addAction(action);

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

const App = () => {
  return (
    <Window>
      <MenuBar>
        <Menu title={"File"} actions={fileActions} />
        <Menu title={"Random"} actions={randActions} />
      </MenuBar>
      <SystemTrayIcon
        contextMenu={menu}
        icon={icon}
        tooltip="React Nodegui"
        visible
      />
    </Window>
  );
};

Renderer.render(<App />);
