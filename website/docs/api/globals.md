---
id: "globals"
title: "@nodegui/react-nodegui"
sidebar_label: "Globals"
---

## Index

### Modules

* ["react-proxy"](modules/_react_proxy_.md)

### Classes

* [Renderer](classes/renderer.md)

### Interfaces

* [AbstractButtonProps](interfaces/abstractbuttonprops.md)
* [AnimatedImageProps](interfaces/animatedimageprops.md)
* [ButtonProps](interfaces/buttonprops.md)
* [CheckBoxProps](interfaces/checkboxprops.md)
* [ComboBoxProps](interfaces/comboboxprops.md)
* [DialProps](interfaces/dialprops.md)
* [ImageProps](interfaces/imageprops.md)
* [LineEditProps](interfaces/lineeditprops.md)
* [PlainTextEditProps](interfaces/plaintexteditprops.md)
* [ProgressBarProps](interfaces/progressbarprops.md)
* [RadioButtonProps](interfaces/radiobuttonprops.md)
* [ScrollAreaProps](interfaces/scrollareaprops.md)
* [SliderProps](interfaces/sliderprops.md)
* [SpinBoxProps](interfaces/spinboxprops.md)
* [TabItemProps](interfaces/tabitemprops.md)
* [TabProps](interfaces/tabprops.md)
* [TextProps](interfaces/textprops.md)
* [ViewProps](interfaces/viewprops.md)
* [WindowProps](interfaces/windowprops.md)

### Type aliases

* [ComboBoxItem](globals.md#comboboxitem)
* [Geometry](globals.md#geometry)
* [NodeGuiReconciler](globals.md#nodeguireconciler)
* [Position](globals.md#position)
* [Range](globals.md#range)
* [RendererOptions](globals.md#rendereroptions)
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
* [setAbstractButtonProps](globals.md#setabstractbuttonprops)
* [setAnimatedImageProps](globals.md#const-setanimatedimageprops)
* [setButtonProps](globals.md#const-setbuttonprops)
* [setCheckBoxProps](globals.md#const-setcheckboxprops)
* [setComboBoxProps](globals.md#const-setcomboboxprops)
* [setDialProps](globals.md#const-setdialprops)
* [setImageProps](globals.md#const-setimageprops)
* [setLineEditProps](globals.md#const-setlineeditprops)
* [setPlainTextEditProps](globals.md#const-setplaintexteditprops)
* [setProgressBarProps](globals.md#const-setprogressbarprops)
* [setRadioButtonProps](globals.md#const-setradiobuttonprops)
* [setScrollAreaProps](globals.md#const-setscrollareaprops)
* [setSliderProps](globals.md#const-setsliderprops)
* [setSpinBoxProps](globals.md#const-setspinboxprops)
* [setWindowProps](globals.md#const-setwindowprops)
* [useEventHandler](globals.md#useeventhandler)

### Object literals

* [defaultOptions](globals.md#const-defaultoptions)

## Type aliases

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

###  NodeGuiReconciler

Ƭ **NodeGuiReconciler**: *Reconciler‹RNComponent, any, Set‹NodeWidget‹any››, any›*

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

###  setAbstractButtonProps

▸ **setAbstractButtonProps**<**Signals**>(`widget`: QAbstractButton‹Signals›, `newProps`: [AbstractButtonProps](interfaces/abstractbuttonprops.md)‹Signals›, `oldProps`: [AbstractButtonProps](interfaces/abstractbuttonprops.md)‹Signals›): *void*

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

###  useEventHandler

▸ **useEventHandler**<**Signals**>(`eventHandlerMap`: Partial‹[WidgetEventListeners](globals.md#widgeteventlisteners) | Signals›, `deps`: DependencyList): *object | object*

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
