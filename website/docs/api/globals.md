---
id: "globals"
title: "@nodegui/react-nodegui"
sidebar_label: "Globals"
---

## Index

### Interfaces

* [ButtonProps](interfaces/buttonprops.md)
* [CheckBoxProps](interfaces/checkboxprops.md)
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

### Functions

* [useEventHandler](globals.md#const-useeventhandler)

### Object literals

* [Renderer](globals.md#const-renderer)

## Type aliases

###  RendererOptions

Ƭ **RendererOptions**: *object*

#### Type declaration:

## Functions

### `Const` useEventHandler

▸ **useEventHandler**(`eventHandlerMap`: EventHandlerMap, `deps`: DependencyList): *object*

**Parameters:**

Name | Type |
------ | ------ |
`eventHandlerMap` | EventHandlerMap |
`deps` | DependencyList |

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

## Object literals

### `Const` Renderer

### ▪ **Renderer**: *object*

###  render

▸ **render**(`element`: React.ReactNode, `options?`: [RendererOptions](globals.md#rendereroptions)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`element` | React.ReactNode |
`options?` | [RendererOptions](globals.md#rendereroptions) |

**Returns:** *void*
