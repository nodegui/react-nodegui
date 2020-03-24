import React, {useState} from "react";
import {
  Renderer,
  Button,
  Window,
  TabItem,
  View,
  AnimatedImage,
  ComboBox,
  Text,
  Tabs
} from "./index";
import { QIcon, QVariant, QPushButtonSignals, QSize } from "@nodegui/nodegui";
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
  const [titleCount, setTitleCount] = useState(0);
  const handler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => {
        console.log(titleCount);
        setTitleCount(titleCount + 1);
      }
    },
    [titleCount]
  );
  // TODO: need to figure out a way to add tab title and icon
  return (
    <Window>
      <Tabs tabPosition={0}>
        <TabItem
          title={`title-${titleCount}`}
          icon={
            new QIcon(
              "/Users/atulr/Project/nodegui/nodegui/src/lib/QtGui/__tests__/assets/nodegui.png"
            )
          }
        >
          <View>
            <Button on={handler} style={buttonStyle} text={"change title"} />
          </View>
        </TabItem>
      </Tabs>
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
