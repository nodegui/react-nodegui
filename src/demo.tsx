import {
  Renderer,
  View,
  Text,
  Button,
  CheckBox,
  LineEdit,
  ProgressBar,
  RadioButton
} from "./index";
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
        <CheckBox id="checky" visible={true} text="Yo Check me out!" />
        <LineEdit id="liney" />
        <RadioButton text="my radio button" />
        <Button
          on={{
            [QWidgetEvents.MouseMove]: onMousePressMove,
            [QPushButtonEvents.clicked]: onClick
          }}
          text="I am a button"
        />
        <ProgressBar />
      </View>
    </>
  );
};

const win = new QMainWindow();
win.resize(400, 400);
win.setStyleSheet(`
  #checky {
   
  }
  #liney {
   
  }
  QWidget#rootView {
    qproperty-flex: 1;
    qproperty-alignSelf: 'stretch';
  }
  #divy {
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
