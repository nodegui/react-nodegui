import React, { useState } from "react";
import { Text, Renderer, Window } from ".";
import { Button } from "./components/Button";
import { View } from "./components/View";
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Window styleSheet={styleSheet}>
      <View id="container">
        <View id="textContainer">
          <Text>Hello</Text>
        </View>
        <View>
          <Button
            text="Click me"
            on={{
              clicked() {
                setOpen(!open);
              },
            }}></Button>
        </View>
      </View>
    </Window>
  );
};

const styleSheet = `
  #container {
    flex: 1;
    min-height: '100%';
    justify-content: 'center';
  }
  #textContainer {
    flex-direction: 'row';
    justify-content: 'space-around';
    align-items: 'center';
  }
`;

Renderer.render(<App />);
