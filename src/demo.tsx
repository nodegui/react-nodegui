import React from "react";
import { Text, Renderer, Window } from ".";

const App = () => {
  return (
    <Window>
      <Text>Hello</Text>
    </Window>
  );
};

Renderer.render(<App />);
