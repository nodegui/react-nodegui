import { Renderer, View, Button, Window, Image, LineEdit } from "./index";
import React, { useEffect, useRef, useMemo, useState } from "react";
import {
  AspectRatioMode,
  QMainWindow,
  QLineEditEvents,
  QPushButtonEvents
} from "@nodegui/nodegui";

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
            <Button
              style={`
              background-color: green;
            `}
              text="Load Image"
              on={loadButtonHandler}
            />
          </View>
          <Image
            id="img"
            aspectRatioMode={AspectRatioMode.KeepAspectRatio}
            src={imageSrc}
          ></Image>
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

Renderer.render(<App />, {
  onRender: () => {
    console.log("Yo");
  },
  enableDevtools: true
});
