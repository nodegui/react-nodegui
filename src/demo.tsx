import React from "react";
import {
  Renderer,
  Button,
  Window,
  View,
  AnimatedImage,
  ComboBox,
  Text
} from "./index";
import { QIcon, QVariant, QPushButtonSignals } from "@nodegui/nodegui";
import { useEventHandler } from "./hooks";

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
  const handler = useEventHandler<QPushButtonSignals>(
    {
      clicked: clicked => { console.log("clicked"); }
    },
    []
  );
  return (
    <Window>
      <View style={containerStyle}>
        <Text openExternalLinks={true}>
          {`<a 
              style="color: white" 
              href="https://react.nodegui.org/docs/guides/getting-started/">
            docs
          </a>`}
        </Text>
        <View on={{}}>
          <Button on={handler} style={buttonStyle} text={"Hello"} />
          <Button style={buttonStyle} text={"World"} />
        </View>
        <ComboBox items={items} />
        {/* commenting this out while I still figure out the error;
        <AnimatedImage
          style="border: 1px solid blue; flex:1;"
          src="/Users/atulr/Project/nodegui/nodegui/src/lib/QtGui/__tests__/assets/fine.gif"
        /> */}
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
