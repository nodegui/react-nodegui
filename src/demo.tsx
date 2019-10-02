import React from "react";
import { Renderer, Button, Window, View } from "./index";
const App = () => {
  return (
    <Window>
      <View>
        <Button style={buttonStyle} text={"Hello"} />
        <Button style={buttonStyle} text={"World"} />
      </View>
    </Window>
  );
};
const buttonStyle = `
  color: white;
`;
Renderer.render(<App />);
