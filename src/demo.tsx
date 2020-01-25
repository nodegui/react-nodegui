import React from "react";
import {
  Renderer,
  Button,
  Window,
  View,
  AnimatedImage,
  ComboBox,
  Text,
  MenuBar,
  Menu,
} from "./index";
import {
  QAction,
  QApplication,
  QIcon,
  QVariant,
  QPushButtonSignals,
} from "@nodegui/nodegui";
import { useEventHandler } from "./hooks";
import { QPushButtonSignals, Direction } from "@nodegui/nodegui";

const quitAction = new QAction();
quitAction.setText("&Quit");
quitAction.addEventListener("triggered", () => {
  const app = QApplication.instance();
  app.exit(0);
});

const fileActions: QAction[] = [quitAction];

const App = () => {
  const [additionalButtons, setAdditionalButtons] = useState<string[]>([]);
  const [direction, setDirection] = useState<Direction>(Direction.LeftToRight);

  const addHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setAdditionalButtons((buttons) => [
          ...buttons,
          `Button ${buttons.length}`,
        ]),
    },
    []
  );

  const removeHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (clicked) => {
        console.log("clicked");
      },
    },
    []
  );

  const toggleDirection = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setDirection((prevDirection) => ((prevDirection + 1) % 4) as Direction),
    },
    []
  );

  return (
    <Window>
      <MenuBar>
        <Menu title={"&File"} actions={fileActions} />
        <Menu title={"&Edit"} />
      </MenuBar>

      <View style={containerStyle}>
        <Text openExternalLinks={true}>
          {`<a 
              style="color: white" 
              href="https://react.nodegui.org/docs/guides/getting-started/">
            docs
          </a>`}
        </Text>
        <View on={{}}>
          <Button on={handler} style={buttonStyle} text={"Hello"} />
          <Button style={buttonStyle} text={"World"} />
        </View>
        <ComboBox items={items} />
        {/* commenting this out while I still figure out the error;
        <AnimatedImage
          style="border: 1px solid blue; flex:1;"
          src="/Users/atulr/Project/nodegui/nodegui/src/lib/QtGui/__tests__/assets/fine.gif"
        /> */}
      </View>
    </Window>
  );
};

Renderer.render(<App />);
