import React, { useState } from "react";
import { Renderer, Text, Window, View, Button, useEventHandler } from "./index";
import { GridView } from "./components/GridView";
import { GridRow } from "./components/GridView/GridRow";
import { GridColumn } from "./components/GridView/GridColumn";
import { QPushButtonSignals } from "@nodegui/nodegui";

const App = () => {
  const [additionalRows, setAdditionalRows] = useState<string[]>([]);
  const [rowStretch, setRowStretch] = useState(false);

  const [additionalColumns, setAdditionalColumns] = useState<string[]>([]);

  const insertRowHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setAdditionalRows((rows) => [...rows, `Row ${rows.length}`]),
    },
    []
  );

  const removeRowHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setAdditionalRows((rows) => [...rows.slice(0, rows.length - 1)]),
    },
    []
  );

  const insertColumnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setAdditionalColumns((columns) => [
          ...columns,
          `Column ${columns.length}`,
        ]),
    },
    []
  );

  const removeColumnsHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () =>
        setAdditionalColumns((columns) => [
          ...columns.slice(0, columns.length - 1),
        ]),
    },
    []
  );

  const toggleRowStretch = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => setRowStretch((value) => !value),
    },
    []
  );

  return (
    <Window>
      <GridView
        style="flex: 1"
        columnProps={{
          0: {
            minWidth: 200,
          },
          1: {
            minWidth: 300,
          },
        }}
        rowProps={{
          0: {
            stretch: rowStretch ? 2 : undefined,
            minHeight: 400,
          },
          1: {
            stretch: !rowStretch ? 2 : undefined,
          },
        }}
      >
        <GridRow>
          <GridColumn width={2}>
            <View style="background-color: red">
              <Text>Hello</Text>
              <Button text="Insert row" on={insertRowHandler} />
              <Button text="Remove row" on={removeRowHandler} />
              <Button text="Toggle row stretch" on={toggleRowStretch} />
              <Button text="Insert column" on={insertColumnHandler} />
              <Button text="Remove column" on={removeColumnsHandler} />
            </View>
          </GridColumn>
          <GridColumn width={2}>
            <View style="background-color: blue">
              <Text>Second Column</Text>
            </View>
          </GridColumn>
          <>
            {additionalColumns.map((column) => (
              <GridColumn key={column}>
                <Text>{column}</Text>
              </GridColumn>
            ))}
          </>
        </GridRow>
        <GridRow height={2}>
          <GridColumn>
            <View style="background-color: green">
              <Text>Second row</Text>
            </View>
          </GridColumn>
          <GridColumn>
            <View style="background-color: purple">
              <Text>Second Column</Text>
            </View>
          </GridColumn>
          <GridColumn>
            <View style="background-color: purple">
              <Text>Third Column</Text>
            </View>
          </GridColumn>
          <GridColumn>
            <View style="background-color: purple">
              <Text>Fourth Column</Text>
            </View>
          </GridColumn>
          <>
            {additionalColumns.map((column) => (
              <GridColumn key={column}>
                <Text>Second {column}</Text>
              </GridColumn>
            ))}
          </>
        </GridRow>
        <GridRow>
          <GridColumn>
            <Text>Third row</Text>
          </GridColumn>
        </GridRow>
        <>
          {additionalRows.map((row) => (
            <GridRow key={row}>
              <GridColumn width={2}>
                <Text>{row}</Text>
              </GridColumn>
              <GridColumn>
                <Text>Second {row}</Text>
              </GridColumn>
            </GridRow>
          ))}
        </>
      </GridView>
    </Window>
  );
};

Renderer.render(<App />);
