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
  const [value, setValue] = useState(false);
  useEffect(() => {
    if (winRef.current) {
      winRef.current.resize(800, 450);
    }
  }, []);

  const toggleHandler = useMemo(
    () => ({
      [QPushButtonEvents.clicked]: () => {
        setValue(!value);
      }
    }),
    [value]
  );

  return (
    <>
      <Window ref={winRef} styleSheet={styleSheet}>
        <View id="container">
          <View id="controls">
            <Button text="Toggle scollwidget" on={toggleHandler} />
          </View>
          <ScrollArea style={`width:400px;height:400px;`}>
            {value ? (
              <View
                style={`
                min-width: 0; 
              min-width: 0; 
                min-width: 0; 
                min-height:0;
                height:500px;
                width: 500px;
                background-color:green;
              `}
              >
                <Text>Hello</Text>
                <View
                  style={`
                  height: '50%';
                  width: '50%';
                  background-color: pink;
                `}
                ></View>
              </View>
            ) : (
              <View
                style={`
                min-width: 0; 
                min-width: 0; 
                min-width: 0; 
                min-height:0;
                height:500px;
                width: 500px;
                background-color:blue;
              `}
              >
                <Text>World</Text>
              </View>
            )}
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
