---
id: "sliderprops"
title: "SliderProps"
sidebar_label: "SliderProps"
---

## Hierarchy

  ↳ [ViewProps](viewprops.md)‹QSliderSignals›

  ↳ **SliderProps**

## Index

### Properties

* [attributes](sliderprops.md#optional-attributes)
* [cursor](sliderprops.md#optional-cursor)
* [enabled](sliderprops.md#optional-enabled)
* [geometry](sliderprops.md#optional-geometry)
* [hasTracking](sliderprops.md#optional-hastracking)
* [id](sliderprops.md#optional-id)
* [invertedAppearance](sliderprops.md#optional-invertedappearance)
* [invertedControls](sliderprops.md#optional-invertedcontrols)
* [isSliderDown](sliderprops.md#optional-issliderdown)
* [maxSize](sliderprops.md#optional-maxsize)
* [maximum](sliderprops.md#optional-maximum)
* [minSize](sliderprops.md#optional-minsize)
* [minimum](sliderprops.md#optional-minimum)
* [mouseTracking](sliderprops.md#optional-mousetracking)
* [on](sliderprops.md#optional-on)
* [orientation](sliderprops.md#optional-orientation)
* [pageStep](sliderprops.md#optional-pagestep)
* [pos](sliderprops.md#optional-pos)
* [ref](sliderprops.md#optional-ref)
* [singleStep](sliderprops.md#optional-singlestep)
* [size](sliderprops.md#optional-size)
* [sliderPosition](sliderprops.md#optional-sliderposition)
* [style](sliderprops.md#optional-style)
* [styleSheet](sliderprops.md#optional-stylesheet)
* [tickInterval](sliderprops.md#optional-tickinterval)
* [tickPosition](sliderprops.md#optional-tickposition)
* [value](sliderprops.md#optional-value)
* [visible](sliderprops.md#optional-visible)
* [windowFlags](sliderprops.md#optional-windowflags)
* [windowIcon](sliderprops.md#optional-windowicon)
* [windowOpacity](sliderprops.md#optional-windowopacity)
* [windowState](sliderprops.md#optional-windowstate)
* [windowTitle](sliderprops.md#optional-windowtitle)

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

### `Optional` geometry

• **geometry**? : *[Geometry](../globals.md#geometry)*

*Inherited from [ViewProps](viewprops.md).[geometry](viewprops.md#optional-geometry)*

Sets the screen position as well as size of the widget. [QWidget: setGeometry](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetgeometryx-y-width-height)

___

### `Optional` hasTracking

• **hasTracking**? : *undefined | false | true*

___

### `Optional` id

• **id**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[id](viewprops.md#optional-id)*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

___

### `Optional` invertedAppearance

• **invertedAppearance**? : *undefined | false | true*

___

### `Optional` invertedControls

• **invertedControls**? : *undefined | false | true*

___

### `Optional` isSliderDown

• **isSliderDown**? : *undefined | false | true*

___

### `Optional` maxSize

• **maxSize**? : *[Size](../globals.md#size)*

*Inherited from [ViewProps](viewprops.md).[maxSize](viewprops.md#optional-maxsize)*

Sets the maximum size of the widget. [QWidget: setMaximumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmaximumsizewidth-height)

___

### `Optional` maximum

• **maximum**? : *undefined | number*

___

### `Optional` minSize

• **minSize**? : *[Size](../globals.md#size)*

*Inherited from [ViewProps](viewprops.md).[minSize](viewprops.md#optional-minsize)*

Sets the minimum size of the widget. [QWidget: setMinimumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetminimumsizewidth-height)

___

### `Optional` minimum

• **minimum**? : *undefined | number*

___

### `Optional` mouseTracking

• **mouseTracking**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[mouseTracking](viewprops.md#optional-mousetracking)*

Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)

___

### `Optional` on

• **on**? : *Partial‹[WidgetEventListeners](../globals.md#widgeteventlisteners) | QSliderSignals›*

*Inherited from [ViewProps](viewprops.md).[on](viewprops.md#optional-on)*

Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)

___

### `Optional` orientation

• **orientation**? : *Orientation*

___

### `Optional` pageStep

• **pageStep**? : *undefined | number*

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

### `Optional` singleStep

• **singleStep**? : *undefined | number*

___

### `Optional` size

• **size**? : *[ViewSize](../globals.md#viewsize)*

*Inherited from [ViewProps](viewprops.md).[size](viewprops.md#optional-size)*

Sets both the minimum and maximum sizes of the widget. [QWidget: setFixedSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetfixedsizewidth-height)

___

### `Optional` sliderPosition

• **sliderPosition**? : *undefined | number*

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

### `Optional` tickInterval

• **tickInterval**? : *undefined | number*

___

### `Optional` tickPosition

• **tickPosition**? : *TickPosition*

___

### `Optional` value

• **value**? : *undefined | number*

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
