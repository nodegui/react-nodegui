import React, { useRef } from "react";
import {
  Renderer,
  Button,
  Window,
  View,
  AnimatedImage,
  ComboBox
} from "./index";
import { QIcon, QVariant, QComboBoxEvents, QComboBox } from "@nodegui/nodegui";

const items = [
  {
    text: "hello",
    icon: new QIcon(
      "/Users/atulr/Project/nodegui/nodegui/src/lib/QtGui/__tests__/assets/nodegui.png"
    ),
    userData: new QVariant(12346)
  },
  { text: "world" }
];

const App = () => {
  return (
    <Window>
      <View style={containerStyle}>
        <View>
          <Button style={buttonStyle} text={"Hello"} />
          <Button style={buttonStyle} text={"World"} />
        </View>
        <ComboBox items={items} />
        <AnimatedImage
          style="border: 1px solid blue; flex:1;"
          src="/Users/atulr/Project/nodegui/nodegui/src/lib/QtGui/__tests__/assets/fine.gif"
        />
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
