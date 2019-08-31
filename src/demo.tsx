import { Renderer, Window } from "./index";
import React, { useEffect, useRef } from "react";
import { QMainWindow } from "@nodegui/nodegui";

const App = () => {
  const winRef = useRef<QMainWindow>(null);
  useEffect(() => {
    if (winRef.current) {
      winRef.current.resize(800, 450);
    }
  }, []);

  return (
    <>
      <Window ref={winRef} styleSheet={styleSheet}></Window>
    </>
  );
};

const styleSheet = `
  #container {
    flex: 1;
    min-height: '100%';
  }
`;

Renderer.render(<App />);
