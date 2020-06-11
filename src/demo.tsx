import React, { useState } from "react";
import { Renderer, Window, Button, SystemTrayIcon } from "./index";
import { BoxView } from "./components/BoxView";
import { useEventHandler } from "./hooks";
import {
  QPushButtonSignals,
  Direction,
  QIcon,
  QMenu,
  QAction,
  QMessageBox,
  QPushButton,
  ButtonRole,
} from "@nodegui/nodegui";
import path from "path";

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

const App = () => {
  const [additionalButtons, setAdditionalButtons] = useState<string[]>([]);
  const [direction, setDirection] = useState<Direction>(Direction.LeftToRight);

  const addHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setAdditionalButtons((buttons) => [
          ...buttons,
          `Button ${buttons.length}`,
        ]),
    },
    []
  );

  const removeHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setAdditionalButtons((buttons) => buttons.slice(0, buttons.length - 1)),
    },
    []
  );

  const toggleDirection = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setDirection((prevDirection) => ((prevDirection + 1) % 4) as Direction),
    },
    []
  );

  return (
    <Window>
      <SystemTrayIcon
        contextMenu={menu}
        icon={icon}
        tooltip="React Nodegui"
        visible
      />
      <BoxView direction={direction}>
        <Button text="Add" on={addHandler} />
        <Button text="Remove" on={removeHandler} />
        <Button text="Toggle direction" on={toggleDirection} />
        {additionalButtons.map((button) => (
          <Button key={button} text={button} />
        ))}
      </BoxView>
    </Window>
  );
};

Renderer.render(<App />);
