---
id: "buttonprops"
title: "ButtonProps"
sidebar_label: "ButtonProps"
---

The Button component provides ability to add and manipulate native button widgets. It is based on
[NodeGui's QPushButton](https://docs.nodegui.org/docs/api/QPushButton).
## Example
```javascript
import React from "react";
import { Renderer, Button, Window } from "@nodegui/react-nodegui";
const App = () => {
  return (
    <Window>
      <Button style={buttonStyle} text={"Hello World"} />
    </Window>
  );
};
const buttonStyle = `
  color: white;
`;
Renderer.render(<App />);

```

## Hierarchy

  ↳ [AbstractButtonProps](abstractbuttonprops.md)‹QPushButtonSignals›

  ↳ **ButtonProps**

## Index

### Properties

* [attributes](buttonprops.md#optional-attributes)
* [cursor](buttonprops.md#optional-cursor)
* [enabled](buttonprops.md#optional-enabled)
* [flat](buttonprops.md#optional-flat)
* [geometry](buttonprops.md#optional-geometry)
* [icon](buttonprops.md#optional-icon)
* [iconSize](buttonprops.md#optional-iconsize)
* [id](buttonprops.md#optional-id)
* [maxSize](buttonprops.md#optional-maxsize)
* [minSize](buttonprops.md#optional-minsize)
* [mouseTracking](buttonprops.md#optional-mousetracking)
* [on](buttonprops.md#optional-on)
* [pos](buttonprops.md#optional-pos)
* [ref](buttonprops.md#optional-ref)
* [size](buttonprops.md#optional-size)
* [style](buttonprops.md#optional-style)
* [styleSheet](buttonprops.md#optional-stylesheet)
* [text](buttonprops.md#optional-text)
* [visible](buttonprops.md#optional-visible)
* [windowFlags](buttonprops.md#optional-windowflags)
* [windowIcon](buttonprops.md#optional-windowicon)
* [windowOpacity](buttonprops.md#optional-windowopacity)
* [windowState](buttonprops.md#optional-windowstate)
* [windowTitle](buttonprops.md#optional-windowtitle)

## Properties

### `Optional` attributes

• **attributes**? : *[WidgetAttributesMap](../globals.md#widgetattributesmap)*

*Inherited from [ViewProps](viewprops.md).[attributes](viewprops.md#optional-attributes)*

Prop to set the Widget Attributes. example:
`<View attributes={{[WidgetAttributes.WA_Disabled]: true}} />`

___

### `Optional` cursor

• **cursor**? : *CursorShape | QCursor*

*Inherited from [ViewProps](viewprops.md).[cursor](viewprops.md#optional-cursor)*

Sets the window mouse cursor. [QWidget: setCursor](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetcursorcursor)

___

### `Optional` enabled

• **enabled**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[enabled](viewprops.md#optional-enabled)*

Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)

___

### `Optional` flat

• **flat**? : *undefined | false | true*

Sets whether the button border is raised. [QPushButton: setFlat](https://docs.nodegui.org/docs/api/QPushButton#buttonsetflatisflat)

___

### `Optional` geometry

• **geometry**? : *[Geometry](../globals.md#geometry)*

*Inherited from [ViewProps](viewprops.md).[geometry](viewprops.md#optional-geometry)*

Sets the screen position as well as size of the widget. [QWidget: setGeometry](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetgeometryx-y-width-height)

___

### `Optional` icon

• **icon**? : *QIcon*

*Inherited from [AbstractButtonProps](abstractbuttonprops.md).[icon](abstractbuttonprops.md#optional-icon)*

Sets an icon in the button. [QPushButton: setIcon](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonicon)

___

### `Optional` iconSize

• **iconSize**? : *QSize*

*Inherited from [AbstractButtonProps](abstractbuttonprops.md).[iconSize](abstractbuttonprops.md#optional-iconsize)*

Sets an icon size in the button. [QPushButton: setIconSize](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonsize)

___

### `Optional` id

• **id**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[id](viewprops.md#optional-id)*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

___

### `Optional` maxSize

• **maxSize**? : *[Size](../globals.md#size)*

*Inherited from [ViewProps](viewprops.md).[maxSize](viewprops.md#optional-maxsize)*

Sets the maximum size of the widget. [QWidget: setMaximumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmaximumsizewidth-height)

___

### `Optional` minSize

• **minSize**? : *[Size](../globals.md#size)*

*Inherited from [ViewProps](viewprops.md).[minSize](viewprops.md#optional-minsize)*

Sets the minimum size of the widget. [QWidget: setMinimumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetminimumsizewidth-height)

___

### `Optional` mouseTracking

• **mouseTracking**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[mouseTracking](viewprops.md#optional-mousetracking)*

Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)

___

### `Optional` on

• **on**? : *Partial‹[WidgetEventListeners](../globals.md#widgeteventlisteners) | QPushButtonSignals›*

*Inherited from [ViewProps](viewprops.md).[on](viewprops.md#optional-on)*

Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)

___

### `Optional` pos

• **pos**? : *[Position](../globals.md#position)*

*Inherited from [ViewProps](viewprops.md).[pos](viewprops.md#optional-pos)*

Sets the screen position of the widget. [QWidget: move](https://docs.nodegui.org/docs/api/NodeWidget#widgetmovex-y)

___

### `Optional` ref

• **ref**? : *any*

*Inherited from [ViewProps](viewprops.md).[ref](viewprops.md#optional-ref)*

Prop to set the ref. The ref will return the underlying nodegui widget.

___

### `Optional` size

• **size**? : *[ViewSize](../globals.md#viewsize)*

*Inherited from [ViewProps](viewprops.md).[size](viewprops.md#optional-size)*

Sets both the minimum and maximum sizes of the widget. [QWidget: setFixedSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetfixedsizewidth-height)

___

### `Optional` style

• **style**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[style](viewprops.md#optional-style)*

Sets the inline stylesheet property. [QWidget: setInlineStyle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetinlinestylestyle)

___

### `Optional` styleSheet

• **styleSheet**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[styleSheet](viewprops.md#optional-stylesheet)*

Sets the property that holds the widget's style sheet. [QWidget: setStyleSheet](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetstylesheetstylesheet)

___

### `Optional` text

• **text**? : *undefined | string*

*Inherited from [AbstractButtonProps](abstractbuttonprops.md).[text](abstractbuttonprops.md#optional-text)*

Sets the given text to the button. [QPushButton: setText](https://docs.nodegui.org/docs/api/QPushButton#buttonsettexttext)

___

### `Optional` visible

• **visible**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[visible](viewprops.md#optional-visible)*

Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/NodeWidget#widgetshow)

___

### `Optional` windowFlags

• **windowFlags**? : *[WindowFlagsMap](../globals.md#windowflagsmap)*

*Inherited from [ViewProps](viewprops.md).[windowFlags](viewprops.md#optional-windowflags)*

Prop to set the Widget flags. example:
`<View windowFlags={{[WindowType.SplashScreen]: true}} />`

___

### `Optional` windowIcon

• **windowIcon**? : *QIcon*

*Inherited from [ViewProps](viewprops.md).[windowIcon](viewprops.md#optional-windowicon)*

Sets the window icon. [QWidget: setWindowIcon](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowiconicon)

___

### `Optional` windowOpacity

• **windowOpacity**? : *undefined | number*

*Inherited from [ViewProps](viewprops.md).[windowOpacity](viewprops.md#optional-windowopacity)*

This property holds the level of opacity for the window. [QWidget: setWindowOpacity](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowopacityopacity)

___

### `Optional` windowState

• **windowState**? : *WindowState*

*Inherited from [ViewProps](viewprops.md).[windowState](viewprops.md#optional-windowstate)*

Sets the window state. [QWidget: setWindowState](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowstatestate)

___

### `Optional` windowTitle

• **windowTitle**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[windowTitle](viewprops.md#optional-windowtitle)*

Sets the window title property. [QWidget: setWindowTitle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowtitletitle)
