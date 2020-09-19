---
id: "rnaction"
title: "RNAction"
sidebar_label: "RNAction"
---

## Hierarchy

* QAction

  ↳ **RNAction**

## Implements

* RNComponent

## Index

### Constructors

* [constructor](rnaction.md#constructor)

### Properties

* [icon](rnaction.md#optional-icon)
* [menu](rnaction.md#optional-menu)
* [native](rnaction.md#native)
* [nodeChildren](rnaction.md#nodechildren)
* [nodeParent](rnaction.md#optional-nodeparent)
* [tagName](rnaction.md#static-tagname)

### Methods

* [addEventListener](rnaction.md#addeventlistener)
* [appendChild](rnaction.md#appendchild)
* [appendInitialChild](rnaction.md#appendinitialchild)
* [font](rnaction.md#font)
* [inherits](rnaction.md#inherits)
* [insertBefore](rnaction.md#insertbefore)
* [isCheckable](rnaction.md#ischeckable)
* [isChecked](rnaction.md#ischecked)
* [isSeparator](rnaction.md#isseparator)
* [objectName](rnaction.md#objectname)
* [property](rnaction.md#property)
* [removeChild](rnaction.md#removechild)
* [removeEventListener](rnaction.md#removeeventlistener)
* [setCheckable](rnaction.md#setcheckable)
* [setChecked](rnaction.md#setchecked)
* [setEnabled](rnaction.md#setenabled)
* [setFont](rnaction.md#setfont)
* [setIcon](rnaction.md#seticon)
* [setMenu](rnaction.md#setmenu)
* [setNodeParent](rnaction.md#setnodeparent)
* [setObjectName](rnaction.md#setobjectname)
* [setProperty](rnaction.md#setproperty)
* [setProps](rnaction.md#setprops)
* [setSeparator](rnaction.md#setseparator)
* [setShortcut](rnaction.md#setshortcut)
* [setShortcutContext](rnaction.md#setshortcutcontext)
* [setText](rnaction.md#settext)

## Constructors

###  constructor

\+ **new RNAction**(): *[RNAction](rnaction.md)*

*Inherited from [RNAction](rnaction.md).[constructor](rnaction.md#constructor)*

*Overrides void*

**Returns:** *[RNAction](rnaction.md)*

\+ **new RNAction**(`native`: NativeElement): *[RNAction](rnaction.md)*

*Inherited from [RNAction](rnaction.md).[constructor](rnaction.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`native` | NativeElement |

**Returns:** *[RNAction](rnaction.md)*

\+ **new RNAction**(`parent`: NodeWidget‹any›): *[RNAction](rnaction.md)*

*Inherited from [RNAction](rnaction.md).[constructor](rnaction.md#constructor)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | NodeWidget‹any› |

**Returns:** *[RNAction](rnaction.md)*

## Properties

### `Optional` icon

• **icon**? : *QIcon*

*Inherited from [RNAction](rnaction.md).[icon](rnaction.md#optional-icon)*

___

### `Optional` menu

• **menu**? : *QMenu*

*Inherited from [RNAction](rnaction.md).[menu](rnaction.md#optional-menu)*

___

###  native

• **native**: *NativeElement*

*Inherited from [RNAction](rnaction.md).[native](rnaction.md#native)*

*Overrides void*

___

###  nodeChildren

• **nodeChildren**: *Set‹Component›*

*Inherited from [RNAction](rnaction.md).[nodeChildren](rnaction.md#nodechildren)*

___

### `Optional` nodeParent

• **nodeParent**? : *Component*

*Inherited from [RNAction](rnaction.md).[nodeParent](rnaction.md#optional-nodeparent)*

___

### `Static` tagName

▪ **tagName**: *string* = "action"

## Methods

###  addEventListener

▸ **addEventListener**‹**SignalType**›(`signalType`: SignalType, `callback`: QActionSignals[SignalType]): *void*

*Inherited from [RNAction](rnaction.md).[addEventListener](rnaction.md#addeventlistener)*

**Type parameters:**

▪ **SignalType**: *keyof QActionSignals*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`signalType` | SignalType | SignalType is a signal from the widgets signals interface. |
`callback` | QActionSignals[SignalType] | Corresponding callback for the signal as mentioned in the widget's signal interface |

**Returns:** *void*

void

For example in the case of QPushButton:
```js
const button = new QPushButton();
button.addEventListener('clicked',(checked)=>console.log("clicked"));
// here clicked is a value from QPushButtonSignals interface
```

▸ **addEventListener**(`eventType`: WidgetEventTypes, `callback`: function): *void*

*Inherited from [RNAction](rnaction.md).[addEventListener](rnaction.md#addeventlistener)*

**Parameters:**

▪ **eventType**: *WidgetEventTypes*

▪ **callback**: *function*

For example in the case of QPushButton:
```js
const button = new QPushButton();
button.addEventListener(WidgetEventTypes.HoverEnter,()=>console.log("hovered"));
```

▸ (`event?`: NativeRawPointer‹"QEvent"›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | NativeRawPointer‹"QEvent"› |

**Returns:** *void*

___

###  appendChild

▸ **appendChild**(`child`: Component): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | Component |

**Returns:** *void*

___

###  appendInitialChild

▸ **appendInitialChild**(`child`: Component): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | Component |

**Returns:** *void*

___

###  font

▸ **font**(): *QFont*

*Inherited from [RNAction](rnaction.md).[font](rnaction.md#font)*

**Returns:** *QFont*

___

###  inherits

▸ **inherits**(`className`: string): *boolean*

*Inherited from [RNAction](rnaction.md).[inherits](rnaction.md#inherits)*

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *boolean*

___

###  insertBefore

▸ **insertBefore**(`child`: Component, `beforeChild`: Component): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | Component |
`beforeChild` | Component |

**Returns:** *void*

___

###  isCheckable

▸ **isCheckable**(): *boolean*

*Inherited from [RNAction](rnaction.md).[isCheckable](rnaction.md#ischeckable)*

**Returns:** *boolean*

___

###  isChecked

▸ **isChecked**(): *boolean*

*Inherited from [RNAction](rnaction.md).[isChecked](rnaction.md#ischecked)*

**Returns:** *boolean*

___

###  isSeparator

▸ **isSeparator**(): *boolean*

*Inherited from [RNAction](rnaction.md).[isSeparator](rnaction.md#isseparator)*

**Returns:** *boolean*

___

###  objectName

▸ **objectName**(): *string*

*Inherited from [RNAction](rnaction.md).[objectName](rnaction.md#objectname)*

**Returns:** *string*

___

###  property

▸ **property**(`name`: string): *QVariant*

*Inherited from [RNAction](rnaction.md).[property](rnaction.md#property)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *QVariant*

___

###  removeChild

▸ **removeChild**(`child`: Component): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | Component |

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**‹**SignalType**›(`signalType`: SignalType, `callback`: QActionSignals[SignalType]): *void*

*Inherited from [RNAction](rnaction.md).[removeEventListener](rnaction.md#removeeventlistener)*

**Type parameters:**

▪ **SignalType**: *keyof QActionSignals*

**Parameters:**

Name | Type |
------ | ------ |
`signalType` | SignalType |
`callback` | QActionSignals[SignalType] |

**Returns:** *void*

▸ **removeEventListener**(`eventType`: WidgetEventTypes, `callback`: function): *void*

*Inherited from [RNAction](rnaction.md).[removeEventListener](rnaction.md#removeeventlistener)*

**Parameters:**

▪ **eventType**: *WidgetEventTypes*

▪ **callback**: *function*

▸ (`event?`: NativeRawPointer‹"QEvent"›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | NativeRawPointer‹"QEvent"› |

**Returns:** *void*

___

###  setCheckable

▸ **setCheckable**(`isCheckable`: boolean): *void*

*Inherited from [RNAction](rnaction.md).[setCheckable](rnaction.md#setcheckable)*

**Parameters:**

Name | Type |
------ | ------ |
`isCheckable` | boolean |

**Returns:** *void*

___

###  setChecked

▸ **setChecked**(`isChecked`: boolean): *void*

*Inherited from [RNAction](rnaction.md).[setChecked](rnaction.md#setchecked)*

**Parameters:**

Name | Type |
------ | ------ |
`isChecked` | boolean |

**Returns:** *void*

___

###  setEnabled

▸ **setEnabled**(`enabled`: boolean): *void*

*Inherited from [RNAction](rnaction.md).[setEnabled](rnaction.md#setenabled)*

**Parameters:**

Name | Type |
------ | ------ |
`enabled` | boolean |

**Returns:** *void*

___

###  setFont

▸ **setFont**(`font`: QFont): *void*

*Inherited from [RNAction](rnaction.md).[setFont](rnaction.md#setfont)*

**Parameters:**

Name | Type |
------ | ------ |
`font` | QFont |

**Returns:** *void*

___

###  setIcon

▸ **setIcon**(`icon`: QIcon): *void*

*Inherited from [RNAction](rnaction.md).[setIcon](rnaction.md#seticon)*

**Parameters:**

Name | Type |
------ | ------ |
`icon` | QIcon |

**Returns:** *void*

___

###  setMenu

▸ **setMenu**(`menu`: QMenu): *void*

*Inherited from [RNAction](rnaction.md).[setMenu](rnaction.md#setmenu)*

**Parameters:**

Name | Type |
------ | ------ |
`menu` | QMenu |

**Returns:** *void*

___

###  setNodeParent

▸ **setNodeParent**(`parent?`: Component): *void*

*Inherited from [RNAction](rnaction.md).[setNodeParent](rnaction.md#setnodeparent)*

**Parameters:**

Name | Type |
------ | ------ |
`parent?` | Component |

**Returns:** *void*

___

###  setObjectName

▸ **setObjectName**(`objectName`: string): *void*

*Inherited from [RNAction](rnaction.md).[setObjectName](rnaction.md#setobjectname)*

**Parameters:**

Name | Type |
------ | ------ |
`objectName` | string |

**Returns:** *void*

___

###  setProperty

▸ **setProperty**(`name`: string, `value`: QVariantType): *boolean*

*Inherited from [RNAction](rnaction.md).[setProperty](rnaction.md#setproperty)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | QVariantType |

**Returns:** *boolean*

___

###  setProps

▸ **setProps**(`newProps`: [ActionProps](../interfaces/actionprops.md), `oldProps`: [ActionProps](../interfaces/actionprops.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newProps` | [ActionProps](../interfaces/actionprops.md) |
`oldProps` | [ActionProps](../interfaces/actionprops.md) |

**Returns:** *void*

___

###  setSeparator

▸ **setSeparator**(`isSeparator`: boolean): *void*

*Inherited from [RNAction](rnaction.md).[setSeparator](rnaction.md#setseparator)*

**Parameters:**

Name | Type |
------ | ------ |
`isSeparator` | boolean |

**Returns:** *void*

___

###  setShortcut

▸ **setShortcut**(`keysequence`: QKeySequence): *void*

*Inherited from [RNAction](rnaction.md).[setShortcut](rnaction.md#setshortcut)*

**Parameters:**

Name | Type |
------ | ------ |
`keysequence` | QKeySequence |

**Returns:** *void*

___

###  setShortcutContext

▸ **setShortcutContext**(`shortcutContext`: ShortcutContext): *void*

*Inherited from [RNAction](rnaction.md).[setShortcutContext](rnaction.md#setshortcutcontext)*

**Parameters:**

Name | Type |
------ | ------ |
`shortcutContext` | ShortcutContext |

**Returns:** *void*

___

###  setText

▸ **setText**(`text`: string): *void*

*Inherited from [RNAction](rnaction.md).[setText](rnaction.md#settext)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *void*
