---
id: "rngridrow"
title: "RNGridRow"
sidebar_label: "RNGridRow"
---

## Hierarchy

* Component

  ↳ **RNGridRow**

## Implements

* RNComponent

## Index

### Constructors

* [constructor](rngridrow.md#constructor)

### Properties

* [childColumns](rngridrow.md#childcolumns)
* [height](rngridrow.md#optional-height)
* [latestProps](rngridrow.md#optional-latestprops)
* [native](rngridrow.md#native)
* [nodeChildren](rngridrow.md#nodechildren)
* [nodeParent](rngridrow.md#optional-nodeparent)
* [parentGrid](rngridrow.md#optional-parentgrid)
* [prevProps](rngridrow.md#optional-prevprops)
* [rowIndex](rngridrow.md#optional-rowindex)
* [tagName](rngridrow.md#static-tagname)

### Methods

* [appendChild](rngridrow.md#appendchild)
* [appendInitialChild](rngridrow.md#appendinitialchild)
* [insertBefore](rngridrow.md#insertbefore)
* [remove](rngridrow.md#remove)
* [removeChild](rngridrow.md#removechild)
* [setNodeParent](rngridrow.md#setnodeparent)
* [setParentGridAndUpdateProps](rngridrow.md#setparentgridandupdateprops)
* [setProps](rngridrow.md#setprops)
* [updateChildren](rngridrow.md#updatechildren)

## Constructors

###  constructor

\+ **new RNGridRow**(): *[RNGridRow](rngridrow.md)*

*Inherited from [RNGridColumn](rngridcolumn.md).[constructor](rngridcolumn.md#constructor)*

**Returns:** *[RNGridRow](rngridrow.md)*

## Properties

###  childColumns

• **childColumns**: *Array‹[DataWithOffset](../interfaces/datawithoffset.md)‹[RNGridColumn](rngridcolumn.md)››* = []

___

### `Optional` height

• **height**? : *undefined | number*

___

### `Optional` latestProps

• **latestProps**? : *[GridRowProps](../globals.md#gridrowprops)*

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

### `Optional` parentGrid

• **parentGrid**? : *RNGridView*

___

### `Optional` prevProps

• **prevProps**? : *[GridRowProps](../globals.md#gridrowprops)*

___

### `Optional` rowIndex

• **rowIndex**? : *undefined | number*

___

### `Static` tagName

▪ **tagName**: *string* = "gridrow"

## Methods

###  appendChild

▸ **appendChild**(`child`: [RNGridColumn](rngridcolumn.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | [RNGridColumn](rngridcolumn.md) |

**Returns:** *void*

___

###  appendInitialChild

▸ **appendInitialChild**(`child`: [RNGridColumn](rngridcolumn.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | [RNGridColumn](rngridcolumn.md) |

**Returns:** *void*

___

###  insertBefore

▸ **insertBefore**(`child`: [RNGridColumn](rngridcolumn.md), `beforeChild`: [RNGridColumn](rngridcolumn.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | [RNGridColumn](rngridcolumn.md) |
`beforeChild` | [RNGridColumn](rngridcolumn.md) |

**Returns:** *void*

___

###  remove

▸ **remove**(): *void*

**Returns:** *void*

___

###  removeChild

▸ **removeChild**(`child`: [RNGridColumn](rngridcolumn.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`child` | [RNGridColumn](rngridcolumn.md) |

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

###  setParentGridAndUpdateProps

▸ **setParentGridAndUpdateProps**(`parentGrid`: RNGridView, `index`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parentGrid` | RNGridView |
`index` | number |

**Returns:** *void*

___

###  setProps

▸ **setProps**(`newProps`: [GridRowProps](../globals.md#gridrowprops), `oldProps`: [GridRowProps](../globals.md#gridrowprops)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newProps` | [GridRowProps](../globals.md#gridrowprops) |
`oldProps` | [GridRowProps](../globals.md#gridrowprops) |

**Returns:** *void*

___

###  updateChildren

▸ **updateChildren**(`startIndex`: number): *void*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`startIndex` | number | 0 |

**Returns:** *void*
