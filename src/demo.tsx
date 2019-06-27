import { Renderer, View, Text } from ".";
import React from "react";
import { QMainWindow, QApplication } from "@nodegui/nodegui";

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Text>World</Text>
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
