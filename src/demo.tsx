import React from "react";
import { Text, Renderer, Window } from ".";
import { Button } from "./components/Button";
import { View } from "./components/View";
import { Table } from "./components/Table";
import { TableItem } from "./components/TableItem";

const App = () => {
  return (
    <Window styleSheet={styleSheet}>
      <View id="container">
        <Table
          cellRange={{ row: 3, column: 3 }}
          style="flex: 1;"
          horizontalHeaderLabels={["What", "How", "When"]}
          verticalHeaderLabels={["yes", "this", "later"]}
          hideRows={[0, 2]}
        >
          <TableItem cellPosition={[0, 0]} text="1" toolTip="Tooltip"/>
          <TableItem cellPosition={[0, 1]} text="2"/>
          <TableItem cellPosition={[0, 2]} text="3"/>
          <TableItem cellPosition={[1, 0]} text="4"/>
          <TableItem cellPosition={[1, 1]} text="5"/>
          <TableItem cellPosition={[1, 2]} text="6"/>
          <TableItem cellPosition={[2, 0]} text="7"/>
          <TableItem cellPosition={[2, 1]} text="8"/>
          <TableItem cellPosition={[2, 2]} text="9"/>
        </Table>
        <View id="textContainer">
          <Text>Hello</Text>
        </View>
        <View>
          <Button text="Click me"></Button>
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
