---
id: "viewprops"
title: "ViewProps"
sidebar_label: "ViewProps"
---

The View component can be used to encapsulate other components and provide structure.
It functions similar to a div in the web world. It is based on
[NodeGui's QWidget](https://docs.nodegui.org/docs/api/QWidget).
## Example
```javascript
import React from "react";
import { Renderer, Button, Window, View } from "./index";
const App = () => {
 return (
   <Window>
     <View>
       <Button style={buttonStyle} text={"Hello"} />
       <Button style={buttonStyle} text={"World"} />
     </View>
   </Window>
 );
};
const buttonStyle = `
 color: white;
`;
Renderer.render(<App />);
```

## Type parameters

▪ **Signals**: *__type*

## Hierarchy

* RNProps

  ↳ **ViewProps**

  ↳ [WindowProps](windowprops.md)

  ↳ [TextProps](textprops.md)

  ↳ [AbstractButtonProps](abstractbuttonprops.md)

  ↳ [LineEditProps](lineeditprops.md)

  ↳ [PlainTextEditProps](plaintexteditprops.md)

  ↳ [ProgressBarProps](progressbarprops.md)

  ↳ [DialProps](dialprops.md)

  ↳ [SpinBoxProps](spinboxprops.md)

  ↳ [ScrollAreaProps](scrollareaprops.md)

  ↳ [ComboBoxProps](comboboxprops.md)

## Index

### Properties

* [attributes](viewprops.md#optional-attributes)
* [cursor](viewprops.md#optional-cursor)
* [enabled](viewprops.md#optional-enabled)
* [geometry](viewprops.md#optional-geometry)
* [id](viewprops.md#optional-id)
* [maxSize](viewprops.md#optional-maxsize)
* [minSize](viewprops.md#optional-minsize)
* [mouseTracking](viewprops.md#optional-mousetracking)
* [on](viewprops.md#optional-on)
* [pos](viewprops.md#optional-pos)
* [ref](viewprops.md#optional-ref)
* [size](viewprops.md#optional-size)
* [style](viewprops.md#optional-style)
* [styleSheet](viewprops.md#optional-stylesheet)
* [visible](viewprops.md#optional-visible)
* [windowFlags](viewprops.md#optional-windowflags)
* [windowIcon](viewprops.md#optional-windowicon)
* [windowOpacity](viewprops.md#optional-windowopacity)
* [windowState](viewprops.md#optional-windowstate)
* [windowTitle](viewprops.md#optional-windowtitle)

## Properties

### `Optional` attributes

• **attributes**? : *WidgetAttributesMap*

Prop to set the Widget Attributes. example:
`<View attributes={{[WidgetAttributes.WA_Disabled]: true}} />`

___

### `Optional` cursor

• **cursor**? : *CursorShape | QCursor*

Sets the window mouse cursor. [QWidget: setCursor](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetcursorcursor)

___

### `Optional` enabled

• **enabled**? : *undefined | false | true*

Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)

___

### `Optional` geometry

• **geometry**? : *Geometry*

Sets the screen position as well as size of the widget. [QWidget: setGeometry](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetgeometryx-y-width-height)

___

### `Optional` id

• **id**? : *undefined | string*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

___

### `Optional` maxSize

• **maxSize**? : *Size*

Sets the maximum size of the widget. [QWidget: setMaximumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmaximumsizewidth-height)

___

### `Optional` minSize

• **minSize**? : *Size*

Sets the minimum size of the widget. [QWidget: setMinimumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetminimumsizewidth-height)

___

### `Optional` mouseTracking

• **mouseTracking**? : *undefined | false | true*

Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)

___

### `Optional` on

• **on**? : *Partial‹[WidgetEventListeners](../globals.md#widgeteventlisteners) | Signals›*

Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)

___

### `Optional` pos

• **pos**? : *Position*

Sets the screen position of the widget. [QWidget: move](https://docs.nodegui.org/docs/api/NodeWidget#widgetmovex-y)

___

### `Optional` ref

• **ref**? : *any*

Prop to set the ref. The ref will return the underlying nodegui widget.

___

### `Optional` size

• **size**? : *ViewSize*

Sets both the minimum and maximum sizes of the widget. [QWidget: setFixedSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetfixedsizewidth-height)

___

### `Optional` style

• **style**? : *undefined | string*

Sets the inline stylesheet property. [QWidget: setInlineStyle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetinlinestylestyle)

___

### `Optional` styleSheet

• **styleSheet**? : *undefined | string*

Sets the property that holds the widget's style sheet. [QWidget: setStyleSheet](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetstylesheetstylesheet)

___

### `Optional` visible

• **visible**? : *undefined | false | true*

Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/NodeWidget#widgetshow)

___

### `Optional` windowFlags

• **windowFlags**? : *WindowFlagsMap*

Prop to set the Widget flags. example:
`<View windowFlags={{[WindowType.SplashScreen]: true}} />`

___

### `Optional` windowIcon

• **windowIcon**? : *QIcon*

Sets the window icon. [QWidget: setWindowIcon](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowiconicon)

___

### `Optional` windowOpacity

• **windowOpacity**? : *undefined | number*

This property holds the level of opacity for the window. [QWidget: setWindowOpacity](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowopacityopacity)

___

### `Optional` windowState

• **windowState**? : *WindowState*

Sets the window state. [QWidget: setWindowState](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowstatestate)

___

### `Optional` windowTitle

• **windowTitle**? : *undefined | string*

Sets the window title property. [QWidget: setWindowTitle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowtitletitle)
