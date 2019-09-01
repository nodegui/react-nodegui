import { Renderer, Window } from "./index";
import React, { useEffect, useRef, useState } from "react";
import { QMainWindow, QPushButtonEvents } from "@nodegui/nodegui";
import { Button } from "./components/Button";
import { useEventHandler } from "./hooks";
import { ScrollArea } from "./components/ScrollArea";
import { View } from "./components/View";

const App = () => {
  const winRef = useRef<QMainWindow>(null);
  useEffect(() => {
    if (winRef.current) {
      winRef.current.resize(800, 450);
    }
  }, []);
  const [resizeable, setResizeable] = useState(true);
  const btnHandler = useEventHandler(
    {
      [QPushButtonEvents.clicked]: () => {
        console.log("clicked");
        setResizeable(!resizeable);
      }
    },
    [resizeable]
  );
  const size = { width: 200, height: 200, fixed: !resizeable };
  return (
    <Window size={size} ref={winRef} styleSheet={styleSheet}>
      <Button text={resizeable ? "❌" : "✅"} on={btnHandler} />
      <ScrollArea>
        <View />
      </ScrollArea>
    </Window>
  );
};

const styleSheet = `
  #container {
    flex: 1;
    min-height: '100%';
  }
`;

Renderer.render(<App />);
