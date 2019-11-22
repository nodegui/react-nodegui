import React from "react";
import { Renderer, Button, Window, View } from "./index";

const App = () => {
  return (
    <Window>
      <View style={containerStyle}>
        <Button style={buttonStyle} text={"Hello"} />
        <Button style={buttonStyle} text={"World"} />
      </View>
    </Window>
  );
};

const containerStyle = `
  flex: 1; 
  justify-content:'center'; 
  border: 1px solid blue;
  padding: 10;
`;
const buttonStyle = `
  color: white;
`;

Renderer.render(<App />);
