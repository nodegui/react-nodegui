import { Renderer, View, Button, Window, LineEdit, Text } from "./index";
import React, { useEffect, useRef, useMemo, useState } from "react";
import {
  QMainWindow,
  QLineEditEvents,
  QPushButtonEvents
} from "@nodegui/nodegui";
import { ScrollArea } from "./components/ScrollArea";

const App = () => {
  const winRef = useRef<QMainWindow>(null);
  const [fileUrl, setFileUrl] = useState();
  const [imageSrc, setImageSrc] = useState();
  useEffect(() => {
    if (winRef.current) {
      winRef.current.resize(800, 450);
    }
  }, []);
  const lineEditHandler = useMemo(
    () => ({
      [QLineEditEvents.textChanged]: (text: string) => {
        setFileUrl(text);
      }
    }),
    []
  );

  const loadButtonHandler = useMemo(
    () => ({
      [QPushButtonEvents.clicked]: () => {
        setImageSrc(fileUrl);
      }
    }),
    [fileUrl]
  );

  return (
    <>
      <Window ref={winRef} styleSheet={styleSheet}>
        <View id="container">
          <View id="controls">
            <LineEdit
              on={lineEditHandler}
              id="textField"
              text={fileUrl}
              placeholderText="Absolute path to an image"
            />
            <Button text="Load Image" on={loadButtonHandler} />
          </View>
          <ScrollArea style={`width:400px;height:400px;`}>
            <View
              style={`
              min-width: 0; 
              min-height:0;
              height:500px;
              width: 500px;
              background-color:green;
              `}
            >
              <Text>Hello</Text>
            </View>
          </ScrollArea>
        </View>
      </Window>
    </>
  );
};

const styleSheet = `
  #container {
    flex: 1;
    min-height: '100%';
  }
  #controls {
    flex-direction: 'row';
    justify-content: 'space-around';
    align-items: 'center';
    padding-horizontal: 20;
    padding-vertical: 10;
  }
  #img {
    flex: 1;
    qproperty-alignment: 'AlignCenter';
  }
  #textField {
    flex: 1;
  }
`;

Renderer.render(<App />);
