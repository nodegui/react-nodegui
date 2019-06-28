import { Renderer, View, Text } from ".";
import React from "react";
import { QMainWindow, QApplication } from "@nodegui/nodegui";

class App extends React.Component {
  render() {
    return (
      <View id="divy">
        <Text id="hello">Hello</Text>
        <Text id="world">World</Text>
      </View>
    );
  }
}
const app = new QApplication();

const win = new QMainWindow();

Renderer.render(<App />, win, () => {
  console.log("rendered");
  app.exec();
});
