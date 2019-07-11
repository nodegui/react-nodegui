import { Renderer, View, Text, Button } from "./index";
import React from "react";
import {
  QMainWindow,
  QWidgetEvents,
  QPushButtonEvents
} from "@nodegui/nodegui";

const onMousePressMove = (...args: any[]) => {
  console.log("mouse pressed and moved", ...args);
};

const onClick = (...args: any[]) => {
  console.log("clicked", ...args);
};

const App = () => {
  return (
    <>
      <View id="divy">
        <Text id="hello">{`${Date.now()}`}</Text>
        <Text id="world">{`World`}</Text>
        <Button
          on={{
            [QWidgetEvents.MouseMove]: onMousePressMove,
            [QPushButtonEvents.clicked]: onClick
          }}
          text="I am a button"
        />
      </View>
    </>
  );
};

const win = new QMainWindow();
win.resize(400, 400);
win.setStyleSheet(`
  QWidget#rootView {
    qproperty-flex: 1;
    qproperty-alignSelf: 'stretch';
  }
  #divy {
    background-color: #80cbc4;
    qproperty-flex: 1;
    qproperty-flexDirection: column;
    qproperty-alignItems: "center";
    qproperty-justifyContent: "space-around";
  }
  #hello {
    color: blue;
    font-weight: bold;
    font-size: 25px;
  }
  #world {
    color: red;
  }
`);

Renderer.render(<App />, win, () => {
  console.log("rendered");
});
