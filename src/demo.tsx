import React from "react";
import { QIcon, QApplication, QKeySequence } from "@nodegui/nodegui";
import path from "path";
import {
  Action,
  Text,
  MenuBar,
  Menu,
  SystemTrayIcon,
  Renderer,
  Window,
} from ".";

const quitAction = (
  <Action
    on={{
      triggered: () => {
        QApplication.instance().exit(0);
      },
    }}
    shortcut={new QKeySequence("Ctrl+Q")}
    text="Quit"
  />
);
const sayHiAction = (
  <Action
    on={{
      triggered: () => {
        console.log("hello");
      },
    }}
    text="Hello"
  />
);

const trayIcon = new QIcon(
  path.join(__dirname, "../extras/assets/nodegui.png")
);

const App = () => {
  return (
    <Window>
      <SystemTrayIcon icon={trayIcon} tooltip="React Nodegui" visible>
        <Menu>
          <Action
            on={{
              triggered: () => {
                console.log("print");
              },
            }}
            text="Print"
            shortcut={new QKeySequence("Ctrl+P")}
          />
          <Action separator />
          {quitAction}
        </Menu>
      </SystemTrayIcon>
      <MenuBar>
        <Menu title="Random">
          {sayHiAction}
          <Action separator />
          {sayHiAction}
          {quitAction}
        </Menu>
      </MenuBar>
      <Text>Hello</Text>
    </Window>
  );
};

Renderer.render(<App />);
