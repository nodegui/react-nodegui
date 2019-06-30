import { Renderer, View, Text } from ".";
import React from "react";
import { QMainWindow, QApplication } from "@nodegui/nodegui";

class App extends React.Component {
  state = {
    value: "No Date"
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ value: Date.now() });
    }, 500);
  }
  render() {
    return (
      <View id="divy">
        <Text id="hello">Hello</Text>
        <Text id="world">{`World ${this.state.value}`}</Text>
      </View>
    );
  }
}
// const app = new QApplication();

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
  // app.exec();
});
