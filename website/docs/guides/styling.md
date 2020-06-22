---
sidebar_label: Styling
title: Styling
---

With React NodeGui, you can style a component to your needs. If you are familiar with CSS in the web world you would feel right at home. All components accept the `style` prop for setting inline styles. The style names and values usually match how CSS works on the web.

Here's an example:

```js
import React from "react";
import { Renderer, Text, Window } from "@nodegui/react-nodegui";

const App = () => {
  return (
    <Window>
      <Text style={textStyle}>{"Hello World"}</Text>
    </Window>
  );
};

const textStyle = `
  color: green; 
  background-color: white;
`;

Renderer.render(<App />);
```

## Overview

React NodeGui makes use of [Qt's stylesheet](https://doc.qt.io/qt-5/stylesheet-syntax.html) for styling. Qt Style Sheet terminology and syntactic rules are almost identical to those of HTML CSS. Additionally, React NodeGui adds support for layout using flex properties like align-items, justify-content, etc. Flexbox layout support is added using [facebook's yoga library](https://github.com/facebook/yoga).

You would write your style properties in a string and pass it to the React NodeGui components either via global styles or inline styles (similar to how it works in the web).

## Global styles

Lets take a look at an example:

```js
import React from "react";
import { Renderer, View, Text, Window } from "@nodegui/react-nodegui";

const App = () => {
  return (
    <Window styleSheet={styleSheet}>
      <View id="rootView">
        <Text id="helloLabel">{"Hello"}</Text>
        <Text id="worldsLabel">{"World"}</Text>
      </View>
    </Window>
  );
};

const styleSheet = `
  #helloLabel {
    color: red;
    padding: 10px;
  }
  #worldLabel {
    color: green;
    padding: 10px;
  }
  #rootView {
    background-color: black;
    height: '100%';
  }
`;

Renderer.render(<App />);
```

In the case of global stylesheet you can define all your style properties in a stylesheet string and the tell the root view or window to set it as a stylsheet for it and its child components. The only difference here from web is that you can set a stylesheet on a component at any level in the whole tree of components, the stylesheet will affect the component and its children.

In the above example, in order to reference a component in a stylesheet we will assign it a `id` using id prop. Think of it as similar to an `id` in the case of web (but in reality it calls setObjectName method in nodegui). Now using the id you could reference the component in the stylesheet and set style properties on them. Do not worry about the layout stuff that is going on here, that will be covered in the next section.

Global stylesheet really becomes powerful when you use things like pseudo-selectors (hover, checked, etc). It also has helps in implementing cascaded styles which allow you to style a group of components at once. We will see more about these features below.

> More details on all the features and the syntax can be found here: https://doc.qt.io/qt-5/stylesheet-syntax.html

## Inline styles

Lets look at this example again:

```js
import React from "react";
import { Renderer, Text, Window } from "@nodegui/react-nodegui";

const App = () => {
  return (
    <Window>
      <Text style={textStyle}>{"Hello world"}</Text>
    </Window>
  );
};

const textStyle = `
  color: green; 
  background-color: white;
  height: '100%';
`;

Renderer.render(<App />);
```

In most cases it would be easier to style the components inline. React NodeGui supports inline styling using `style` prop. Inline styles will only affect the component to which the style is applied to and is often easier to understand and manage. All properties you use in the global stylesheet are available in inline styles as well.

## Selectors

NodeGui style sheets support all the selectors defined in CSS2.
Some examples include:

```css
* {
  color: blue;
}

QPushButton {
  padding: 10px;
}

#okButton {
  margin: 10px;
}

#mainView > QPushButton {
  margin: 10px;
}
```

Note we are using QPushButton here instead of PushButton. This is because `<PushButton />` component internally renders a QPushButton. See PushButton docs for more details.

To see a complete list of selectors see here: https://doc.qt.io/qt-5/stylesheet-syntax.html#selector-types

## Pseudo states

Like in the web, you can style your component based on its state. An example would be, you might want the color of the button text to be red when its hovered upon. These are possible with pseudo states. Pseudo-states appear at the end of the selector, with a colon (:) in between.

```css
#okButton:hover {
  color: red;
}
```

> More details here : https://doc.qt.io/qt-5/stylesheet-syntax.html#pseudo-states

## Cascading

Style sheets can be set on the parent components and on child components. An arbitrary component's effective style sheet is obtained by merging the style sheets set on the component's ancestors (parent, grandparent, etc.).

When conflicts arise, the component's own inline style sheet is always preferred to any inherited style sheet, irrespective of the specificity of the conflicting rules. Likewise, the parent component's style sheet is preferred to the grandparent's, etc.

The behaviour is similar to what we see on the web.

> For more in depth examples see here: https://doc.qt.io/qt-5/stylesheet-syntax.html#cascading

## Properties

NodeGui style sheet is a css string.

For example:

```javascript
const textStyle = `
  color: 'green';
  padding: 12;
  height: '100%';
`;
```

Here if you look carefully, you would notice that there are some differences in the way we write style properties as compared to web.
The quotes you see around `'green'` and `'100%'` are necessary so that Qt doesnt interpret them as numbers.
So the rule of thumb is that any integer based property like margin, border, etc can be written without quotes while any string property, it is better to surround them with quotes. PS: Qt does recognise some string based properties without quotes also.

## Supported properties

Since we are not running inside a web browser, there are few differences in the properties you could use in NodeGui vs in web.

The complete list is detailed here: https://doc.qt.io/qt-5/stylesheet-reference.html#list-of-properties

Apart from the properties listed in the link, NodeGui also supports layout properties related to Flex. You can use all flex properties such as align-items, justify-content, flex, etc on all components. [The layout styling will be converted in more detail in the section: Layout.](layout.md)

## Advanced usage (Setting QObject Properties)

In Qt, every component has certain properties set on them using something called as [Q_PROPERTY](https://doc.qt.io/qt-5/qobject.html#Q_PROPERTY). There are many q-properties that are defined on each component already. You can also define custom qproperties in the native C++ code yourself too. What does it have to do with styling ? The thing is some of these properties can be altered using qt stylesheet. In Qt's terminology, these properties are called designable properties.

For example:

```css
MyLabel {
  qproperty-alignment: AlignCenter;
}
MyGroupBox {
  qproperty-titlecolor: rgb(100, 200, 100);
}
QPushButton {
  qproperty-iconsize: 20px 20px;
}
```

You can discover these properties by following Qt's documentation or by running a simple google search like "center text in QLabel using stylesheet in Qt". These are advanced properties and in practice will come in use rarely but its good to know.

> More details : https://doc.qt.io/qt-5/stylesheet-syntax.html#setting-qobject-properties

---

In this section, we mostly covered the paint properties in the React NodeGui stylesheet. The next section would cover on how you can use flex to layout your components with stylesheet.
