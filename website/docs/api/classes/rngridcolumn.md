---
id: "rngridcolumn"
title: "RNGridColumn"
sidebar_label: "RNGridColumn"
---

## Hierarchy

* Component

  ↳ **RNGridColumn**

## Implements

* RNComponent

## Index

### Constructors

* [constructor](rngridcolumn.md#constructor)

### Properties

* [actualWidget](rngridcolumn.md#optional-actualwidget)
* [columnIndex](rngridcolumn.md#optional-columnindex)
* [latestProps](rngridcolumn.md#optional-latestprops)
* [native](rngridcolumn.md#native)
* [nodeChildren](rngridcolumn.md#nodechildren)
* [nodeParent](rngridcolumn.md#optional-nodeparent)
* [parentRow](rngridcolumn.md#optional-parentrow)
* [prevProps](rngridcolumn.md#optional-prevprops)
* [width](rngridcolumn.md#optional-width)
* [tagName](rngridcolumn.md#static-tagname)

### Methods

* [appendChild](rngridcolumn.md#appendchild)
* [appendInitialChild](rngridcolumn.md#appendinitialchild)
* [insertBefore](rngridcolumn.md#insertbefore)
* [remove](rngridcolumn.md#remove)
* [removeChild](rngridcolumn.md#removechild)
* [setNodeParent](rngridcolumn.md#setnodeparent)
* [setParentRowAndUpdateProps](rngridcolumn.md#setparentrowandupdateprops)
* [setProps](rngridcolumn.md#setprops)

## Constructors

###  constructor

\+ **new RNGridColumn**(): *[RNGridColumn](rngridcolumn.md)*

*Inherited from [RNGridColumn](rngridcolumn.md).[constructor](rngridcolumn.md#constructor)*

**Returns:** *[RNGridColumn](rngridcolumn.md)*

## Properties

### `Optional` actualWidget

• **actualWidget**? : *NodeWidget‹any›*

___

### `Optional` columnIndex

• **columnIndex**? : *undefined | number*

___

### `Optional` latestProps

• **latestProps**? : *[GridColumnProps](../globals.md#gridcolumnprops)*

___

###  native

• **native**: *any*

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

### `Optional` parentRow

• **parentRow**? : *[RNGridRow](rngridrow.md)*

___

### `Optional` prevProps

• **prevProps**? : *[GridColumnProps](../globals.md#gridcolumnprops)*

___

### `Optional` width

• **width**? : *undefined | number*

___

### `Static` tagName

▪ **tagName**: *string* = "gridcolumn"

## Methods

###  appendChild

▸ **appendChild**(`child`: NodeWidget‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | NodeWidget‹any› |

**Returns:** *void*

___

###  appendInitialChild

▸ **appendInitialChild**(`child`: NodeWidget‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | NodeWidget‹any› |

**Returns:** *void*

___

###  insertBefore

▸ **insertBefore**(`child`: NodeWidget‹any›, `beforeChild`: NodeWidget‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | NodeWidget‹any› |
`beforeChild` | NodeWidget‹any› |

**Returns:** *void*

___

###  remove

▸ **remove**(): *void*

**Returns:** *void*

___

###  removeChild

▸ **removeChild**(`child`: NodeWidget‹any›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | NodeWidget‹any› |

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

###  setParentRowAndUpdateProps

▸ **setParentRowAndUpdateProps**(`parentRow`: [RNGridRow](rngridrow.md), `index`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parentRow` | [RNGridRow](rngridrow.md) |
`index` | number |

**Returns:** *void*

___

###  setProps

▸ **setProps**(`newProps`: [GridColumnProps](../globals.md#gridcolumnprops), `oldProps`: [GridColumnProps](../globals.md#gridcolumnprops)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newProps` | [GridColumnProps](../globals.md#gridcolumnprops) |
`oldProps` | [GridColumnProps](../globals.md#gridcolumnprops) |

**Returns:** *void*
