import { Renderer, View, Window, Image } from "./index";
import React from "react";
import { AspectRatioMode } from "@nodegui/nodegui";

const App = () => {
  return (
    <>
      <Window styleSheet={styleSheet}>
        <View id="container">
          <Image
            id="img"
            aspectRatioMode={AspectRatioMode.KeepAspectRatio}
            src="/Users/atulr/Downloads/demo.png"
          ></Image>
        </View>
      </Window>
    </>
  );
};

const styleSheet = `
  #container {
    qproperty-flex: 1;
    qproperty-flexDirection: column;
    qproperty-minHeight: '100%';
  }
  #img {
    qproperty-flex: 1;
  }
`;

Renderer.render(<App />, {
  onRender: () => {
    console.log("Yo");
  },
  enableDevtools: true
});
