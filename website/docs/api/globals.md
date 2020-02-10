---
id: "globals"
title: "@nodegui/react-nodegui - v0.4.0"
sidebar_label: "Globals"
---

## Index

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
* [SpinBoxProps](interfaces/spinboxprops.md)
* [TextProps](interfaces/textprops.md)
* [ViewProps](interfaces/viewprops.md)
* [WindowProps](interfaces/windowprops.md)

### Type aliases

* [RendererOptions](globals.md#rendereroptions)
* [WidgetEventListeners](globals.md#widgeteventlisteners)

### Variables

* [appProxy](globals.md#let-appproxy)

### Functions

* [hot](globals.md#hot)
* [setAbstractButtonProps](globals.md#setabstractbuttonprops)
* [useEventHandler](globals.md#useeventhandler)

## Type aliases

###  RendererOptions

Ƭ **RendererOptions**: *object*

#### Type declaration:

___

###  WidgetEventListeners

Ƭ **WidgetEventListeners**: *object*

#### Type declaration:

## Variables

### `Let` appProxy

• **appProxy**: *ReactProxyComponent*

## Functions

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
