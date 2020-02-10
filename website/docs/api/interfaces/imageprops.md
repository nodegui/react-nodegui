---
id: "imageprops"
title: "ImageProps"
sidebar_label: "ImageProps"
---

## Hierarchy

  ↳ [TextProps](textprops.md)

  ↳ **ImageProps**

## Index

### Properties

* [aspectRatioMode](imageprops.md#optional-aspectratiomode)
* [attributes](imageprops.md#optional-attributes)
* [buffer](imageprops.md#optional-buffer)
* [children](imageprops.md#optional-children)
* [cursor](imageprops.md#optional-cursor)
* [enabled](imageprops.md#optional-enabled)
* [geometry](imageprops.md#optional-geometry)
* [id](imageprops.md#optional-id)
* [maxSize](imageprops.md#optional-maxsize)
* [minSize](imageprops.md#optional-minsize)
* [mouseTracking](imageprops.md#optional-mousetracking)
* [on](imageprops.md#optional-on)
* [openExternalLinks](imageprops.md#optional-openexternallinks)
* [pos](imageprops.md#optional-pos)
* [ref](imageprops.md#optional-ref)
* [scaledContents](imageprops.md#optional-scaledcontents)
* [size](imageprops.md#optional-size)
* [src](imageprops.md#optional-src)
* [style](imageprops.md#optional-style)
* [styleSheet](imageprops.md#optional-stylesheet)
* [transformationMode](imageprops.md#optional-transformationmode)
* [visible](imageprops.md#optional-visible)
* [windowFlags](imageprops.md#optional-windowflags)
* [windowIcon](imageprops.md#optional-windowicon)
* [windowOpacity](imageprops.md#optional-windowopacity)
* [windowState](imageprops.md#optional-windowstate)
* [windowTitle](imageprops.md#optional-windowtitle)
* [wordWrap](imageprops.md#optional-wordwrap)

## Properties

### `Optional` aspectRatioMode

• **aspectRatioMode**? : *AspectRatioMode*

___

### `Optional` attributes

• **attributes**? : *WidgetAttributesMap*

*Inherited from [ViewProps](viewprops.md).[attributes](viewprops.md#optional-attributes)*

Prop to set the Widget Attributes. example:
`<View attributes={{[WidgetAttributes.WA_Disabled]: true}} />`

___

### `Optional` buffer

• **buffer**? : *Buffer*

___

### `Optional` children

• **children**? : *string | number*

*Inherited from [TextProps](textprops.md).[children](textprops.md#optional-children)*

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

### `Optional` geometry

• **geometry**? : *Geometry*

*Inherited from [ViewProps](viewprops.md).[geometry](viewprops.md#optional-geometry)*

Sets the screen position as well as size of the widget. [QWidget: setGeometry](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetgeometryx-y-width-height)

___

### `Optional` id

• **id**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[id](viewprops.md#optional-id)*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

___

### `Optional` maxSize

• **maxSize**? : *Size*

*Inherited from [ViewProps](viewprops.md).[maxSize](viewprops.md#optional-maxsize)*

Sets the maximum size of the widget. [QWidget: setMaximumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmaximumsizewidth-height)

___

### `Optional` minSize

• **minSize**? : *Size*

*Inherited from [ViewProps](viewprops.md).[minSize](viewprops.md#optional-minsize)*

Sets the minimum size of the widget. [QWidget: setMinimumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetminimumsizewidth-height)

___

### `Optional` mouseTracking

• **mouseTracking**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[mouseTracking](viewprops.md#optional-mousetracking)*

Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)

___

### `Optional` on

• **on**? : *Partial‹[WidgetEventListeners](../globals.md#widgeteventlisteners) | QLabelSignals›*

*Inherited from [ViewProps](viewprops.md).[on](viewprops.md#optional-on)*

Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)

___

### `Optional` openExternalLinks

• **openExternalLinks**? : *undefined | false | true*

*Inherited from [TextProps](textprops.md).[openExternalLinks](textprops.md#optional-openexternallinks)*

___

### `Optional` pos

• **pos**? : *Position*

*Inherited from [ViewProps](viewprops.md).[pos](viewprops.md#optional-pos)*

Sets the screen position of the widget. [QWidget: move](https://docs.nodegui.org/docs/api/NodeWidget#widgetmovex-y)

___

### `Optional` ref

• **ref**? : *any*

*Inherited from [ViewProps](viewprops.md).[ref](viewprops.md#optional-ref)*

Prop to set the ref. The ref will return the underlying nodegui widget.

___

### `Optional` scaledContents

• **scaledContents**? : *undefined | false | true*

*Inherited from [TextProps](textprops.md).[scaledContents](textprops.md#optional-scaledcontents)*

___

### `Optional` size

• **size**? : *ViewSize*

*Inherited from [ViewProps](viewprops.md).[size](viewprops.md#optional-size)*

Sets both the minimum and maximum sizes of the widget. [QWidget: setFixedSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetfixedsizewidth-height)

___

### `Optional` src

• **src**? : *undefined | string*

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

### `Optional` transformationMode

• **transformationMode**? : *TransformationMode*

___

### `Optional` visible

• **visible**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[visible](viewprops.md#optional-visible)*

Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/NodeWidget#widgetshow)

___

### `Optional` windowFlags

• **windowFlags**? : *WindowFlagsMap*

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

___

### `Optional` wordWrap

• **wordWrap**? : *undefined | false | true*

*Inherited from [TextProps](textprops.md).[wordWrap](textprops.md#optional-wordwrap)*
