import React from "react";
import { Renderer, Window, MenuBar, Menu } from "./index";
import { QAction, QApplication } from "@nodegui/nodegui";

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
    </Window>
  );
};

Renderer.render(<App />);
