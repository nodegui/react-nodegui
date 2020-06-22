---
sidebar_label: Handle Events
title: Handle Events
---

React NodeGui allows you to listen to various events that might originate from the underlying Qt widgets. These events can either be a simple button click or a text change on a lineedit or even something like window being hidden and shown.

In order to do this we need to attach an event listener to the respective widget.

Technically, the event listener is a NodeJs [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) instance that listens to events from the underlying Qt widget. The native Qt widget would send all the events to the event emitter in React NodeGui world and the user can essentially subscribe to it.

Lets see an example to see how this looks in practice.

## Event handling

The following example demonstrates how to add a clicked event listener to a button widget.

<img src="https://github.com/nodegui/react-nodegui/releases/download/assets/events-react.gif" alt="event example" style={{width: '100%', maxWidth: 400}}/>

```javascript
const React = require("react");
const { Renderer, Button, Window } = require("@nodegui/react-nodegui");

const App = () => {
  const buttonHandler = {
    clicked: () => {
      console.log("the button was clicked");
    }
  };

  return (
    <Window>
      <Button text={"Click me"} on={buttonHandler} />
    </Window>
  );
};

Renderer.render(<App />);
```

The `on` prop accepts a simple object map with event type as key and a handler function as callback for the event. You can register multiple event handlers by passing multiple events as keys and their handlers as values.

Internally, Qt widgets in nodegui has two types of events.:

- Signals: In short these are basically different for different widgets. So a button maybe have `clicked`, `pressed` signal, while a linedit may have `textChanged` signal.
- QEvents: These are common set of events for all the widgets/qobjects in NodeGui world. These are also helpful at times but typically you would end up using signals more than these common events.

In React NodeGui you can listen to both Signals and QEvents using the same `on` prop.

### useEventHandler hook and typescript support

Although you can pass in an object with event handlers to the `on` prop, its not the most efficient way. This is because everytime the render is called the `on` prop will get a new object meaning the widget will re-render every time. To solve for this we have `useEventHandler` hook.

```ts
import React from "react";
import {
  Renderer,
  Button,
  Window,
  useEventHandler
} from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";

const App = () => {
  const buttonHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => {
        console.log("the button was clicked");
      },
      pressed: () => {
        console.log("button was pressed");
      },
      objectNameChanged: objectName => {
        console.log("new object name", objectName);
      }
    },
    []
  );

  return (
    <Window>
      <Button text={"Click me"} on={buttonHandler} />
    </Window>
  );
};

Renderer.render(<App />);
```

In a nutshell, the above code uses the `useEventHandler` hook which is a wrapper over `useMemo`.
This means, the buttonHandler remains same on every render call and hence the `on` prop to Button doesnt change.

Here `objectNameChanged` is a QEvent while `clicked` and `pressed` are signals. As an app developer it really doesnt mean much but internally they are both two different things in Qt and React NodeGui allows you to use both of them using a single familiar `on` prop.

Also, another point you see in this typescript code is the QPushButtonSignals. The QPushButtonSignals is a type that allows autocompletion of event handlers as you type them.

### How do I know which events are supported ?

In order to find all the supported events for a widget you can take a look at

#### All Signals for the widgets:

- [https://docs.nodegui.org/docs/api/generated/globals/#interfaces](https://docs.nodegui.org/docs/api/generated/globals/#interfaces)
- [https://docs.nodegui.org/docs/api/generated/globals/#type-aliases](https://docs.nodegui.org/docs/api/generated/globals/#type-aliases)

You can subscribe to a signal like so:

```ts
import React from "react";
import {
  Renderer,
  Button,
  Window,
  useEventHandler
} from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";

const App = () => {
  const buttonHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => {
        console.log("the button was clicked");
      }
    },
    []
  );

  return (
    <Window>
      <Button text={"Click me"} on={buttonHandler} />
    </Window>
  );
};

Renderer.render(<App />);
```

The value you receive in the callback depends on the signal. Refer to respective signal docs for more details. All the handlers are also typed. So if you are using typescript you should get correct autocomplete for it.

#### All common QEvents for the widgets

In nodegui all these common QEvents are represented under an enum type: [WidgetEventTypes](https://docs.nodegui.org/docs/api/generated/enums/widgeteventtypes)

You can subscribe to a QEvent like so:

```typescript
import React from "react";
import {
  Renderer,
  Text,
  Window,
  useEventHandler
} from "@nodegui/react-nodegui";
import { QLabelSignals, QMouseEvent, WidgetEventTypes } from "@nodegui/nodegui";

const App = () => {
  const textHandler = useEventHandler<QLabelSignals>(
    {
      MouseMove: (nativeEvt: any) => {
        const mouseEvt = new QMouseEvent(nativeEvt);
        console.log("mouseMoved at: ", { x: mouseEvt.x(), y: mouseEvt.y() });
      },
      [WidgetEventTypes.MouseButtonPress]: () => {
        console.log("mouse button was pressed");
      }
    },
    []
  );

  return (
    <Window>
      <Text mouseTracking={true} on={textHandler}>
        Move your mouse here
      </Text>
    </Window>
  );
};

Renderer.render(<App />);
```

<img src="https://github.com/nodegui/react-nodegui/releases/download/assets/qevents.gif" alt="qevent example" style={{width: '100%', maxWidth: 400}}/>

Note here that every QEvent handler gives a reference to native QEvent in the handler callback.
Not all native QEvent wrappers are implemented yet and we might need your help regarding those. Feel free to jump in and contribute to the nodegui core.

Also you can specify the QEvent type as a regular `MouseMove` string or use it directly from the enum `WidgetEventTypes.MouseMove`. They both achieve same things.
