import React, { useState } from "react";
import { Renderer, Window, Button } from "./index";
import { BoxView } from "./components/BoxView";
import { useEventHandler } from "./hooks";
import { QPushButtonSignals, Direction } from "@nodegui/nodegui";

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
