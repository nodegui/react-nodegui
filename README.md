# NodeGUI React Desktop

Building **performant**, **native** and **cross-platform** desktop applications with **JavaScript** + powerful **CSS like styling**. React Desktop is powered by **React** and **Qt5** which makes it CPU and memory efficient as compared to other chromium based solutions like electron. React Desktop is essentially a React renderer for [NodeGUI](https://github.com/nodegui/nodegui).

Visit: https://nodegui.github.io/nodegui for docs.

<img alt="logo" src="https://github.com/nodegui/nodegui/raw/master/extras/logo/nodegui.png" height="200" />

## How does it look?

<div style="display:inline; margin: 0 auto;">
<img alt="demo_linux" src="https://github.com/nodegui/nodegui/raw/master/examples/calculator/calculator_linux.png" height="300" />
<img alt="demo_win" src="https://github.com/nodegui/nodegui/raw/master/examples/calculator/calculator_win.jpg" height="300" />
<img alt="demo_mac" src="https://github.com/nodegui/nodegui/raw/master/examples/calculator/calculator_mac.png" height="300" />
</div>

**More screenshots?**

[See examples](https://github.com/nodegui/react-desktop/tree/master/examples/)

## Features

- 🧬 Cross platform. Should work on major Linux flavours, Windows and MacOS
- 📉 Low CPU and memory footprint. Current CPU stays at 0% on idle and memory usage is under 20mb for a hello world program.
- 💅 Styling with CSS (includes actual cascading). Also has full support for Flexbox layout (thanks to Yoga).
- ✅ Complete Nodejs api support (Currently runs on Node v12.x - and is easily upgradable). Hence has access to all nodejs compatible npm modules.
- 🎪 Native widget event listener support. supports all event available from Qt / NodeJs.
- 💸 Can be used for Commercial applications.
- 🕵️‍♂️ Good Devtools support (hot reload, live reload, debugging etc).
- 📚 Good documentation and website.
- 🧙‍♂️ Good documentation for contributors.
- 🦹🏻‍♀️ Good support for dark mode (Thanks to QT).
- 🏅First class Typescript support. (Works on regular JS projects too 😉).

## Current focus:

- [ ] (Partial support is present) Easily exstensible for creating custom native widgets (like react native).
- [ ] (Partial) Should have a decent list of stylable native widgets.
- [ ] Easy build and packaging process.

## Getting Started

- Check out [react-desktop-starter](https://github.com/nodegui/react-desktop-starter) to get up and running with your own React Desktop app!
- Read through the [docs](https://nodegui.github.io/nodegui)

## Docs for contributing

Looking to contribute? If you wish to implement a new widget/add more features and need help understanding the codebase. You can start here:

Contributing developer docs link:

https://github.com/nodegui/nodegui/tree/master/docs/development

## Building

`npm run build [--qt_home_dir=/path/to/qt]`

### LICENSE

MIT
