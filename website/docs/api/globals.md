---
id: "globals"
title: "@nodegui/react-nodegui"
sidebar_label: "Globals"
---

## Index

### Modules

* ["react-proxy"](modules/_react_proxy_.md)

### Classes

* [RNAction](classes/rnaction.md)
* [RNGridColumn](classes/rngridcolumn.md)
* [RNGridRow](classes/rngridrow.md)
* [RNMenu](classes/rnmenu.md)
* [RNMenuBar](classes/rnmenubar.md)
* [Renderer](classes/renderer.md)

### Interfaces

* [AbstractButtonProps](interfaces/abstractbuttonprops.md)
* [ActionProps](interfaces/actionprops.md)
* [AnimatedImageProps](interfaces/animatedimageprops.md)
* [BoxViewProps](interfaces/boxviewprops.md)
* [ButtonProps](interfaces/buttonprops.md)
* [CheckBoxProps](interfaces/checkboxprops.md)
* [ComboBoxProps](interfaces/comboboxprops.md)
* [DataWithOffset](interfaces/datawithoffset.md)
* [DialProps](interfaces/dialprops.md)
* [GridViewProps](interfaces/gridviewprops.md)
* [ImageProps](interfaces/imageprops.md)
* [LineEditProps](interfaces/lineeditprops.md)
* [MenuBarProps](interfaces/menubarprops.md)
* [MenuProps](interfaces/menuprops.md)
* [PlainTextEditProps](interfaces/plaintexteditprops.md)
* [ProgressBarProps](interfaces/progressbarprops.md)
* [RadioButtonProps](interfaces/radiobuttonprops.md)
* [ScrollAreaProps](interfaces/scrollareaprops.md)
* [SliderProps](interfaces/sliderprops.md)
* [SpinBoxProps](interfaces/spinboxprops.md)
* [SystemTrayIconProps](interfaces/systemtrayiconprops.md)
* [TabItemProps](interfaces/tabitemprops.md)
* [TabProps](interfaces/tabprops.md)
* [TextProps](interfaces/textprops.md)
* [ViewProps](interfaces/viewprops.md)
* [WindowProps](interfaces/windowprops.md)

### Type aliases

* [Allowed](globals.md#allowed)
* [ComboBoxItem](globals.md#comboboxitem)
* [Geometry](globals.md#geometry)
* [GridColumnProps](globals.md#gridcolumnprops)
* [GridRowProps](globals.md#gridrowprops)
* [GridViewColumnProps](globals.md#gridviewcolumnprops)
* [GridViewRowProps](globals.md#gridviewrowprops)
* [KeysOfType](globals.md#keysoftype)
* [NodeGuiReconciler](globals.md#nodeguireconciler)
* [OnlyType](globals.md#onlytype)
* [Position](globals.md#position)
* [Range](globals.md#range)
* [RendererOptions](globals.md#rendereroptions)
* [SetParentFunc](globals.md#setparentfunc)
* [Size](globals.md#size)
* [ViewSize](globals.md#viewsize)
* [WidgetAttributesMap](globals.md#widgetattributesmap)
* [WidgetEventListeners](globals.md#widgeteventlisteners)
* [WindowFlagsMap](globals.md#windowflagsmap)

### Variables

* [appProxy](globals.md#let-appproxy)

### Functions

* [App](globals.md#const-app)
* [getLoadedPixmap](globals.md#getloadedpixmap)
* [getLoadedQMovie](globals.md#getloadedqmovie)
* [hot](globals.md#hot)
* [offsetForIndex](globals.md#const-offsetforindex)
* [setAbstractButtonProps](globals.md#setabstractbuttonprops)
* [setActionProps](globals.md#const-setactionprops)
* [setAnimatedImageProps](globals.md#const-setanimatedimageprops)
* [setBoxViewProps](globals.md#const-setboxviewprops)
* [setButtonProps](globals.md#const-setbuttonprops)
* [setCheckBoxProps](globals.md#const-setcheckboxprops)
* [setComboBoxProps](globals.md#const-setcomboboxprops)
* [setDialProps](globals.md#const-setdialprops)
* [setGridColumnProps](globals.md#const-setgridcolumnprops)
* [setGridRowProps](globals.md#const-setgridrowprops)
* [setGridViewProps](globals.md#const-setgridviewprops)
* [setImageProps](globals.md#const-setimageprops)
* [setLineEditProps](globals.md#const-setlineeditprops)
* [setMenuBarProps](globals.md#const-setmenubarprops)
* [setMenuProps](globals.md#const-setmenuprops)
* [setPlainTextEditProps](globals.md#const-setplaintexteditprops)
* [setProgressBarProps](globals.md#const-setprogressbarprops)
* [setRadioButtonProps](globals.md#const-setradiobuttonprops)
* [setScrollAreaProps](globals.md#const-setscrollareaprops)
* [setSliderProps](globals.md#const-setsliderprops)
* [setSpinBoxProps](globals.md#const-setspinboxprops)
* [setSystemTrayIconProps](globals.md#const-setsystemtrayiconprops)
* [setWindowProps](globals.md#const-setwindowprops)
* [updateDisplacedChildren](globals.md#updatedisplacedchildren)
* [useEventHandler](globals.md#useeventhandler)

### Object literals

* [defaultOptions](globals.md#const-defaultoptions)

## Type aliases

###  Allowed

Ƭ **Allowed**: *[OnlyType](globals.md#onlytype)‹TItem, [SetParentFunc](globals.md#setparentfunc)‹TParent››*

___

###  ComboBoxItem

Ƭ **ComboBoxItem**: *object*

#### Type declaration:

* **icon**? : *QIcon*

* **text**: *string*

* **userData**? : *QVariant*

___

###  Geometry

Ƭ **Geometry**: *object*

#### Type declaration:

* **height**: *number*

* **width**: *number*

* **x**: *number*

* **y**: *number*

___

###  GridColumnProps

Ƭ **GridColumnProps**: *object*

#### Type declaration:

* **width**? : *undefined | number*

___

###  GridRowProps

Ƭ **GridRowProps**: *object*

#### Type declaration:

* **children**: *Array‹FunctionComponentElement‹[GridColumnProps](globals.md#gridcolumnprops)›› | FunctionComponentElement‹[GridColumnProps](globals.md#gridcolumnprops)›*

* **height**? : *undefined | number*

___

###  GridViewColumnProps

Ƭ **GridViewColumnProps**: *object*

#### Type declaration:

* \[ **ColumnIndex**: *number*\]: object

* **minWidth**? : *undefined | number*

* **stretch**? : *undefined | number*

___

###  GridViewRowProps

Ƭ **GridViewRowProps**: *object*

#### Type declaration:

* \[ **RowIndex**: *number*\]: object

* **minHeight**? : *undefined | number*

* **stretch**? : *undefined | number*

___

###  KeysOfType

Ƭ **KeysOfType**: *object[keyof T]*

Extract the keys of type `T` matching type `TType`

___

###  NodeGuiReconciler

Ƭ **NodeGuiReconciler**: *Reconciler‹RNComponent, any, Set‹NodeWidget‹any››, any›*

___

###  OnlyType

Ƭ **OnlyType**: *object*

Show TypeScript that the fields we're interested in are of type `TType`

#### Type declaration:

___

###  Position

Ƭ **Position**: *object*

#### Type declaration:

* **x**: *number*

* **y**: *number*

___

###  Range

Ƭ **Range**: *object*

#### Type declaration:

* **maximum**: *number*

* **minimum**: *number*

___

###  RendererOptions

Ƭ **RendererOptions**: *object*

#### Type declaration:

* **onInit**? : *undefined | function*

* **onRender**? : *undefined | function*

___

###  SetParentFunc

Ƭ **SetParentFunc**: *function*

#### Type declaration:

▸ (`parent`: T, `index`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | T |
`index` | number |

___

###  Size

Ƭ **Size**: *object*

#### Type declaration:

* **height**: *number*

* **width**: *number*

___

###  ViewSize

Ƭ **ViewSize**: *[Size](globals.md#size) & object*

___

###  WidgetAttributesMap

Ƭ **WidgetAttributesMap**: *object*

#### Type declaration:

* \[ **key**: *number*\]: boolean

___

###  WidgetEventListeners

Ƭ **WidgetEventListeners**: *object*

#### Type declaration:

___

###  WindowFlagsMap

Ƭ **WindowFlagsMap**: *object*

#### Type declaration:

* \[ **key**: *number*\]: boolean

## Variables

### `Let` appProxy

• **appProxy**: *[ReactProxyComponent](interfaces/_react_proxy_.reactproxycomponent.md)*

## Functions

### `Const` App

▸ **App**(): *Element‹›*

**Returns:** *Element‹›*

___

###  getLoadedPixmap

▸ **getLoadedPixmap**(`imageUrlOrPath`: string): *Promise‹QPixmap›*

**Parameters:**

Name | Type |
------ | ------ |
`imageUrlOrPath` | string |

**Returns:** *Promise‹QPixmap›*

___

###  getLoadedQMovie

▸ **getLoadedQMovie**(`imageUrlOrPath`: string): *Promise‹QMovie›*

**Parameters:**

Name | Type |
------ | ------ |
`imageUrlOrPath` | string |

**Returns:** *Promise‹QMovie›*

___

###  hot

▸ **hot**(`Component`: React.ComponentType): *React.ComponentType*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | React.ComponentType |

**Returns:** *React.ComponentType*

___

### `Const` offsetForIndex

▸ **offsetForIndex**‹**T**›(`index`: number, `items`: Array‹[DataWithOffset](interfaces/datawithoffset.md)‹[OnlyType](globals.md#onlytype)‹T, number›››, `sizeKey`: keyof OnlyType<T, number>): *number*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`items` | Array‹[DataWithOffset](interfaces/datawithoffset.md)‹[OnlyType](globals.md#onlytype)‹T, number››› |
`sizeKey` | keyof OnlyType<T, number> |

**Returns:** *number*

___

###  setAbstractButtonProps

▸ **setAbstractButtonProps**‹**Signals**›(`widget`: QAbstractButton‹Signals›, `newProps`: [AbstractButtonProps](interfaces/abstractbuttonprops.md)‹Signals›, `oldProps`: [AbstractButtonProps](interfaces/abstractbuttonprops.md)‹Signals›): *void*

**Type parameters:**

▪ **Signals**: *QAbstractButtonSignals*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | QAbstractButton‹Signals› |
`newProps` | [AbstractButtonProps](interfaces/abstractbuttonprops.md)‹Signals› |
`oldProps` | [AbstractButtonProps](interfaces/abstractbuttonprops.md)‹Signals› |

**Returns:** *void*

___

### `Const` setActionProps

▸ **setActionProps**(`widget`: [RNAction](classes/rnaction.md), `newProps`: [ActionProps](interfaces/actionprops.md), `oldProps`: [ActionProps](interfaces/actionprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | [RNAction](classes/rnaction.md) |
`newProps` | [ActionProps](interfaces/actionprops.md) |
`oldProps` | [ActionProps](interfaces/actionprops.md) |

**Returns:** *void*

___

### `Const` setAnimatedImageProps

▸ **setAnimatedImageProps**(`widget`: RNAnimatedImage, `newProps`: [AnimatedImageProps](interfaces/animatedimageprops.md), `oldProps`: [AnimatedImageProps](interfaces/animatedimageprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNAnimatedImage |
`newProps` | [AnimatedImageProps](interfaces/animatedimageprops.md) |
`oldProps` | [AnimatedImageProps](interfaces/animatedimageprops.md) |

**Returns:** *void*

___

### `Const` setBoxViewProps

▸ **setBoxViewProps**(`widget`: RNBoxView, `newProps`: [BoxViewProps](interfaces/boxviewprops.md), `oldProps`: [BoxViewProps](interfaces/boxviewprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNBoxView |
`newProps` | [BoxViewProps](interfaces/boxviewprops.md) |
`oldProps` | [BoxViewProps](interfaces/boxviewprops.md) |

**Returns:** *void*

___

### `Const` setButtonProps

▸ **setButtonProps**(`widget`: RNButton, `newProps`: [ButtonProps](interfaces/buttonprops.md), `oldProps`: [ButtonProps](interfaces/buttonprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNButton |
`newProps` | [ButtonProps](interfaces/buttonprops.md) |
`oldProps` | [ButtonProps](interfaces/buttonprops.md) |

**Returns:** *void*

___

### `Const` setCheckBoxProps

▸ **setCheckBoxProps**(`widget`: RNCheckBox, `newProps`: [CheckBoxProps](interfaces/checkboxprops.md), `oldProps`: [CheckBoxProps](interfaces/checkboxprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNCheckBox |
`newProps` | [CheckBoxProps](interfaces/checkboxprops.md) |
`oldProps` | [CheckBoxProps](interfaces/checkboxprops.md) |

**Returns:** *void*

___

### `Const` setComboBoxProps

▸ **setComboBoxProps**(`widget`: RNComboBox, `newProps`: [ComboBoxProps](interfaces/comboboxprops.md), `oldProps`: [ComboBoxProps](interfaces/comboboxprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNComboBox |
`newProps` | [ComboBoxProps](interfaces/comboboxprops.md) |
`oldProps` | [ComboBoxProps](interfaces/comboboxprops.md) |

**Returns:** *void*

___

### `Const` setDialProps

▸ **setDialProps**(`widget`: RNDial, `newProps`: [DialProps](interfaces/dialprops.md), `oldProps`: [DialProps](interfaces/dialprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNDial |
`newProps` | [DialProps](interfaces/dialprops.md) |
`oldProps` | [DialProps](interfaces/dialprops.md) |

**Returns:** *void*

___

### `Const` setGridColumnProps

▸ **setGridColumnProps**(`widget`: [RNGridColumn](classes/rngridcolumn.md), `parentRow`: [RNGridRow](classes/rngridrow.md), `newProps`: [GridColumnProps](globals.md#gridcolumnprops), `oldProps`: [GridColumnProps](globals.md#gridcolumnprops)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | [RNGridColumn](classes/rngridcolumn.md) |
`parentRow` | [RNGridRow](classes/rngridrow.md) |
`newProps` | [GridColumnProps](globals.md#gridcolumnprops) |
`oldProps` | [GridColumnProps](globals.md#gridcolumnprops) |

**Returns:** *void*

___

### `Const` setGridRowProps

▸ **setGridRowProps**(`widget`: [RNGridRow](classes/rngridrow.md), `parentGrid`: RNGridView, `newProps`: Omit‹[GridRowProps](globals.md#gridrowprops), "children"›, `oldProps`: Omit‹[GridRowProps](globals.md#gridrowprops), "children"›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | [RNGridRow](classes/rngridrow.md) |
`parentGrid` | RNGridView |
`newProps` | Omit‹[GridRowProps](globals.md#gridrowprops), "children"› |
`oldProps` | Omit‹[GridRowProps](globals.md#gridrowprops), "children"› |

**Returns:** *void*

___

### `Const` setGridViewProps

▸ **setGridViewProps**(`widget`: RNGridView, `newProps`: Omit‹[GridViewProps](interfaces/gridviewprops.md), "children"›, `oldProps`: Omit‹[GridViewProps](interfaces/gridviewprops.md), "children"›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNGridView |
`newProps` | Omit‹[GridViewProps](interfaces/gridviewprops.md), "children"› |
`oldProps` | Omit‹[GridViewProps](interfaces/gridviewprops.md), "children"› |

**Returns:** *void*

___

### `Const` setImageProps

▸ **setImageProps**(`widget`: RNImage, `newProps`: [ImageProps](interfaces/imageprops.md), `oldProps`: [ImageProps](interfaces/imageprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNImage |
`newProps` | [ImageProps](interfaces/imageprops.md) |
`oldProps` | [ImageProps](interfaces/imageprops.md) |

**Returns:** *void*

___

### `Const` setLineEditProps

▸ **setLineEditProps**(`widget`: RNLineEdit, `newProps`: [LineEditProps](interfaces/lineeditprops.md), `oldProps`: [LineEditProps](interfaces/lineeditprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNLineEdit |
`newProps` | [LineEditProps](interfaces/lineeditprops.md) |
`oldProps` | [LineEditProps](interfaces/lineeditprops.md) |

**Returns:** *void*

___

### `Const` setMenuBarProps

▸ **setMenuBarProps**(`widget`: [RNMenuBar](classes/rnmenubar.md), `newProps`: [MenuBarProps](interfaces/menubarprops.md), `oldProps`: [MenuBarProps](interfaces/menubarprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | [RNMenuBar](classes/rnmenubar.md) |
`newProps` | [MenuBarProps](interfaces/menubarprops.md) |
`oldProps` | [MenuBarProps](interfaces/menubarprops.md) |

**Returns:** *void*

___

### `Const` setMenuProps

▸ **setMenuProps**(`widget`: [RNMenu](classes/rnmenu.md), `newProps`: [MenuProps](interfaces/menuprops.md), `oldProps`: [MenuProps](interfaces/menuprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | [RNMenu](classes/rnmenu.md) |
`newProps` | [MenuProps](interfaces/menuprops.md) |
`oldProps` | [MenuProps](interfaces/menuprops.md) |

**Returns:** *void*

___

### `Const` setPlainTextEditProps

▸ **setPlainTextEditProps**(`widget`: RNPlainTextEdit, `newProps`: [PlainTextEditProps](interfaces/plaintexteditprops.md), `oldProps`: [PlainTextEditProps](interfaces/plaintexteditprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNPlainTextEdit |
`newProps` | [PlainTextEditProps](interfaces/plaintexteditprops.md) |
`oldProps` | [PlainTextEditProps](interfaces/plaintexteditprops.md) |

**Returns:** *void*

___

### `Const` setProgressBarProps

▸ **setProgressBarProps**(`widget`: RNProgressBar, `newProps`: [ProgressBarProps](interfaces/progressbarprops.md), `oldProps`: [ProgressBarProps](interfaces/progressbarprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNProgressBar |
`newProps` | [ProgressBarProps](interfaces/progressbarprops.md) |
`oldProps` | [ProgressBarProps](interfaces/progressbarprops.md) |

**Returns:** *void*

___

### `Const` setRadioButtonProps

▸ **setRadioButtonProps**(`widget`: RNRadioButton, `newProps`: [RadioButtonProps](interfaces/radiobuttonprops.md), `oldProps`: [RadioButtonProps](interfaces/radiobuttonprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNRadioButton |
`newProps` | [RadioButtonProps](interfaces/radiobuttonprops.md) |
`oldProps` | [RadioButtonProps](interfaces/radiobuttonprops.md) |

**Returns:** *void*

___

### `Const` setScrollAreaProps

▸ **setScrollAreaProps**(`widget`: RNScrollArea, `newProps`: [ScrollAreaProps](interfaces/scrollareaprops.md), `oldProps`: [ScrollAreaProps](interfaces/scrollareaprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNScrollArea |
`newProps` | [ScrollAreaProps](interfaces/scrollareaprops.md) |
`oldProps` | [ScrollAreaProps](interfaces/scrollareaprops.md) |

**Returns:** *void*

___

### `Const` setSliderProps

▸ **setSliderProps**(`widget`: RNSlider, `newProps`: [SliderProps](interfaces/sliderprops.md), `oldProps`: [SliderProps](interfaces/sliderprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNSlider |
`newProps` | [SliderProps](interfaces/sliderprops.md) |
`oldProps` | [SliderProps](interfaces/sliderprops.md) |

**Returns:** *void*

___

### `Const` setSpinBoxProps

▸ **setSpinBoxProps**(`widget`: RNSpinBox, `newProps`: [SpinBoxProps](interfaces/spinboxprops.md), `oldProps`: [SpinBoxProps](interfaces/spinboxprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNSpinBox |
`newProps` | [SpinBoxProps](interfaces/spinboxprops.md) |
`oldProps` | [SpinBoxProps](interfaces/spinboxprops.md) |

**Returns:** *void*

___

### `Const` setSystemTrayIconProps

▸ **setSystemTrayIconProps**(`widget`: RNSystemTrayIcon, `newProps`: [SystemTrayIconProps](interfaces/systemtrayiconprops.md), `oldProps`: [SystemTrayIconProps](interfaces/systemtrayiconprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`widget` | RNSystemTrayIcon |
`newProps` | [SystemTrayIconProps](interfaces/systemtrayiconprops.md) |
`oldProps` | [SystemTrayIconProps](interfaces/systemtrayiconprops.md) |

**Returns:** *void*

___

### `Const` setWindowProps

▸ **setWindowProps**(`window`: RNWindow, `newProps`: [WindowProps](interfaces/windowprops.md), `oldProps`: [WindowProps](interfaces/windowprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`window` | RNWindow |
`newProps` | [WindowProps](interfaces/windowprops.md) |
`oldProps` | [WindowProps](interfaces/windowprops.md) |

**Returns:** *void*

___

###  updateDisplacedChildren

▸ **updateDisplacedChildren**‹**TItem**, **TParent**›(`startIndex`: number, `items`: Array‹[DataWithOffset](interfaces/datawithoffset.md)‹[OnlyType](globals.md#onlytype)‹TItem, number› & [Allowed](globals.md#allowed)‹TItem, TParent›››, `parent`: TParent, `sizeKey`: keyof OnlyType<TItem, number>, `setParentFuncKey`: keyof Allowed<TItem, TParent>): *void*

**Type parameters:**

▪ **TItem**

▪ **TParent**

**Parameters:**

Name | Type |
------ | ------ |
`startIndex` | number |
`items` | Array‹[DataWithOffset](interfaces/datawithoffset.md)‹[OnlyType](globals.md#onlytype)‹TItem, number› & [Allowed](globals.md#allowed)‹TItem, TParent››› |
`parent` | TParent |
`sizeKey` | keyof OnlyType<TItem, number> |
`setParentFuncKey` | keyof Allowed<TItem, TParent> |

**Returns:** *void*

___

###  useEventHandler

▸ **useEventHandler**‹**Signals**›(`eventHandlerMap`: Partial‹[WidgetEventListeners](globals.md#widgeteventlisteners) | Signals›, `deps`: DependencyList): *object | object*

**Type parameters:**

▪ **Signals**

**Parameters:**

Name | Type |
------ | ------ |
`eventHandlerMap` | Partial‹[WidgetEventListeners](globals.md#widgeteventlisteners) &#124; Signals› |
`deps` | DependencyList |

**Returns:** *object | object*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

###  onInit

▸ **onInit**(): *void*

**Returns:** *void*

###  onRender

▸ **onRender**(): *void*

**Returns:** *void*
