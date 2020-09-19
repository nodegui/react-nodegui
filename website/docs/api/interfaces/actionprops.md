---
id: "actionprops"
title: "ActionProps"
sidebar_label: "ActionProps"
---

## Hierarchy

* RNProps

  ↳ **ActionProps**

## Index

### Properties

* [checkable](actionprops.md#optional-checkable)
* [checked](actionprops.md#optional-checked)
* [enabled](actionprops.md#optional-enabled)
* [font](actionprops.md#optional-font)
* [icon](actionprops.md#optional-icon)
* [id](actionprops.md#optional-id)
* [on](actionprops.md#optional-on)
* [separator](actionprops.md#optional-separator)
* [shortcut](actionprops.md#optional-shortcut)
* [shortcutContext](actionprops.md#optional-shortcutcontext)
* [text](actionprops.md#optional-text)

## Properties

### `Optional` checkable

• **checkable**? : *undefined | false | true*

Sets whether the action is a checkable action. [QAction: setCheckable](https://docs.nodegui.org/docs/api/generated/classes/qaction#setcheckable)

___

### `Optional` checked

• **checked**? : *undefined | false | true*

Sets whether the action is checked. [QAction: setChecked](https://docs.nodegui.org/docs/api/generated/classes/qaction#setchecked)

___

### `Optional` enabled

• **enabled**? : *undefined | false | true*

Sets whether the action is enabled. [QAction: setEnabled](https://docs.nodegui.org/docs/api/generated/classes/qaction#setenabled)

___

### `Optional` font

• **font**? : *QFont*

Sets a font for the action. [QAction: setFont](https://docs.nodegui.org/docs/api/generated/classes/qaction#setfont)

___

### `Optional` icon

• **icon**? : *QIcon*

Sets an icon for the action. [QSystemTrayIcon: setIcon](https://docs.nodegui.org/docs/api/generated/classes/qsystemtrayicon#seticon)

___

### `Optional` id

• **id**? : *undefined | string*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

___

### `Optional` on

• **on**? : *Partial‹QActionSignals›*

Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)

___

### `Optional` separator

• **separator**? : *undefined | false | true*

Sets whether this action will be considered a separator. [QAction: setSeparator](https://docs.nodegui.org/docs/api/generated/classes/qaction#setseparator)

___

### `Optional` shortcut

• **shortcut**? : *QKeySequence*

Sets the action's primary shortcut key. [QAction: setShortcut](https://docs.nodegui.org/docs/api/generated/classes/qaction#setshortcut)

___

### `Optional` shortcutContext

• **shortcutContext**? : *ShortcutContext*

Sets the context for action's shortcut. [QAction: setShortcutContext](https://docs.nodegui.org/docs/api/generated/classes/qaction#setshortcutcontext)

___

### `Optional` text

• **text**? : *undefined | string*

Sets descriptive text. [QAction: setText](https://docs.nodegui.org/docs/api/generated/classes/qaction#settext)
