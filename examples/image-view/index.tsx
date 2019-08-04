import {
  Renderer,
  View,
  Button,
  Window,
  Image,
  LineEdit
} from "../../src/index";
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
            <Button text="Load Image" on={loadButtonHandler} />
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
    qproperty-flex: 1;
    qproperty-minHeight: '100%';
  }
  #controls {
    qproperty-flexDirection: 'row';
    qproperty-justifyContent: 'space-around';
    qproperty-alignItems: 'center';
    qproperty-paddingHorizontal: 20;
    qproperty-paddingVertical: 10;
  }
  #img {
    qproperty-flex: 1;
    qproperty-alignment: 'AlignCenter';
  }
  #textField {
    qproperty-flex: 1;
  }
`;

Renderer.render(<App />, {
  onRender: () => {
    console.log("Yo");
  },
  enableDevtools: true
});
