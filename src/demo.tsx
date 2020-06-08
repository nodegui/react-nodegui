import React, { useState } from "react";
import {
  Renderer,
  Text,
  ScrollArea,
  Window,
  View,
  Button,
  useEventHandler,
} from "./index";
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
      {/* <ScrollArea>
        <Text>
          {`
            Contrary to popular belief, 
            Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
            and going through the cites of the word in classical literature, 
            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 
            and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
            This book is a treatise on the theory of ethics, very popular during the Renaissance. 
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s
            is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also 
            reproduced in their exact original form, accompanied 
            by English versions from the 1914 translation by H. Rackham.


            Why do we use it?

            It is a long established 
            fact that a reader will be distracted by 
            the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has 
            a more-or-less normal distribution of letters, 
            as opposed to using 'Content here, content here', 
            making it look like readable English. 
            Many desktop publishing packages and web page 
            editors now use Lorem Ipsum as their default model text, 
            and a search for 'lorem ipsum' will uncover many web 
            sites still in their infancy. Various versions 
            have evolved over the years, sometimes by accident, 
            sometimes on purpose (injected humour and the like).

        `}
        </Text>
      </ScrollArea> */}
      {/* <View> */}
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
      {/* <Button text="Button" />
      </View> */}
    </Window>
  );
};

Renderer.render(<App />);
