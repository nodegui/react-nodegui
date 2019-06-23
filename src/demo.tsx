import ReactNodeGui from "./renderer";
import React from "react";

class App extends React.Component {
  render() {
    return "Hello";
  }
}
//@ts-ignore
global.win = { rootWin: true };
//@ts-ignore
const root = global.win;

ReactNodeGui.render(<App />, root, () => {
  console.log("rendered");
});
