# React NodeGui

⚠️ React NodeGui is no longer maintained. Please fork it to continue development ⚠️ 
<br/>

[![Join the NodeGUI community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/nodegui)
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors)

Build **performant**, **native** and **cross-platform** desktop applications with React.🚀

React NodeGUI is powered by **React** ⚛️ and **Qt5** 💚 which makes it CPU and memory efficient as compared to other chromium based solutions like electron. React NodeGUI is essentially a React renderer for [NodeGUI](https://github.com/nodegui/nodegui).

Visit: https://react.nodegui.org for docs.

<img alt="logo" src="https://github.com/nodegui/nodegui/raw/master/extras/logo/nodegui.png" height="200" />

> This project is in active development. It should be okay for smaller projects but anything complex - electron is the way to go for now. 🚧

## How does it look?

<div style="display:inline; margin: 0 auto;">
<img alt="demo_linux" src="https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_linux.png" height="280" />
<img alt="demo_win" src="https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_win.jpg" height="280" />
<img alt="demo_mac" src="https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_mac.png" height="280" />
</div>

<div style="display:inline; margin: 0 auto;"><img alt="kitchen" src="https://github.com/nodegui/nodegui/raw/master/extras/assets/kitchen.png" height="280" /><img alt="demo_mac" src="https://github.com/nodegui/examples/raw/master/react-nodegui/weather-app-widget/weather_widget_mac.png" height="280" /><img alt="demo_win" src="https://github.com/nodegui/examples/raw/master/react-nodegui/image-view/image_view_win.jpg" height="280" />
</div>

**More screenshots?**

[See examples](https://github.com/nodegui/examples/)

## Features

- 🧬 Cross platform. Should work on major Linux flavours, Windows and MacOS
- 📉 Low CPU and memory footprint. Current CPU stays at 0% on idle and memory usage is under 20mb for a hello world program.
- 💅 Styling with CSS (includes actual cascading). Also has full support for Flexbox layout (thanks to Yoga).
- ✅ Complete Nodejs api support (Currently runs on Node v12.x - and is easily upgradable). Hence has access to all nodejs compatible npm modules.
- 🎪 Native widget event listener support. supports all event available from Qt / NodeJs.
- 💸 Can be used for Commercial applications.
- 🕵️‍♂️ Good Devtools support (supports react-devtools, node debugger).
- 📚 Good documentation and website.
- 🧙‍♂️ Good documentation for contributors.
- 🦹🏻‍♀️ Good support for dark mode (Thanks to QT).
- 🏅First class Typescript support. (Works on regular JS projects too 😉).

## Getting Started

- Check out [react-nodegui-starter](https://github.com/nodegui/react-nodegui-starter) to get up and running with your own React NodeGUI app!
- Read through the [docs](https://react.nodegui.org)

**Community Guides**
- https://gregbenner.life/node-gui-react-component-by-component/ - An awesome intro to all base components in react nodegui

- https://blog.logrocket.com/electron-alternatives-exploring-nodegui-and-react-nodegui/ - Electron alternatives: Exploring NodeGUI and React NodeGUI by [Siegfried Grimbeek](https://blog.logrocket.com/author/siegfriedgrimbeek/).

## SVG

React NodeGUI can render inline SVG trees by serializing SVG-like React components and rendering the result with Qt's SVG widget.

```jsx
import React from "react";
import { Renderer, Svg, Rect, Circle, Path, Window } from "@nodegui/react-nodegui";

const App = () => (
  <Window>
    <Svg width={160} height={120} viewBox="0 0 160 120">
      <Rect x={10} y={10} width={140} height={100} rx={12} fill="#20242a" />
      <Circle cx={80} cy={60} r={28} fill="#61dafb" />
      <Path d="M68 60l9 9 18-22" fill="none" stroke="#20242a" strokeWidth={8} />
    </Svg>
  </Window>
);

Renderer.render(<App />);
```

For complete SVG documents, pass `src`, `buffer`, or `content` to `Svg`.

Most inline SVG primitives can be used as lowercase JSX tags or via the exported helpers like `Rect` and `Circle`.
Use `SvgText` for SVG text nodes.

**Talks/Podcasts**

- [NodeGui and React NodeGui at KarmaJS Nov 2019 meetup: https://www.youtube.com/watch?v=8jH5gaEEDv4](https://www.youtube.com/watch?v=8jH5gaEEDv4)

- <audio data-theme="night" data-src="https://changelog.com/jsparty/96/embed" src="https://cdn.changelog.com/uploads/jsparty/96/js-party-96.mp3" preload="none" class="changelog-episode" controls></audio><p><a href="https://changelog.com/jsparty/96">JS Party 96: Performant Node desktop apps with NodeGUI</a> – Listen on <a href="https://changelog.com/">Changelog.com</a></p>


## Docs for contributing

Looking to contribute? If you wish to implement a new widget/add more features and need help understanding the codebase. You can start here:

Contributing developer docs link:

https://github.com/nodegui/nodegui/tree/master/website/docs/development

Please read: https://github.com/nodegui/.github/blob/master/CONTRIBUTING.md

## Building

`npm run build`

## Verification

`npm run verify:svg`

## Using custom Qt

`QT_INSTALL_DIR=/path/to/qt npm install`

`npm run build`

## Updating docs

`npm run docs`

then followed by:

`cd website &&  GIT_USER=<your_git_username> yarn deploy`

## Funding

React NodeGUI is an open source project and requires your support. If you like this project, please consider supporting my work by clicking on the sponsor button on this Github repo or via Ko-Fi. Alternatively, Issues on React NodeGui can be funded by anyone via Issuehunt and the amount will be distributed to respective contributors.

<p>
 <a href='https://ko-fi.com/E1E510AV9' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> &nbsp; &nbsp; 
 <a href="https://issuehunt.io/r/nodegui/react-nodegui"><img alt="issuehunt" src="https://github.com/BoostIO/issuehunt-materials/raw/master/v1/issuehunt-button-v1.svg?sanitize=true"  height="36px" /></a>
</p>

## Special Thanks

- [Logo: Thanks to Vishwas Shetty from the Noun Project.](https://github.com/nodegui/nodegui/blob/master/extras/legal/logo/thanks.md)

## Code of Conduct

https://github.com/nodegui/.github/blob/master/CODE_OF_CONDUCT.md

## License

MIT

## Maintainers ✨

People maintaining this project.

<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://blog.atulr.com"><img src="https://avatars2.githubusercontent.com/u/4029423?v=4" width="100px;" alt="Atul R"/><br /><sub><b>Atul R</b></sub></a></td>
  </tr>
</table>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://rahulgaba.com"><img src="https://avatars3.githubusercontent.com/u/7898942?v=4?s=100" width="100px;" alt="Rahul Gaba"/><br /><sub><b>Rahul Gaba</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=rgabs" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/kakulgupta"><img src="https://avatars3.githubusercontent.com/u/10727047?v=4?s=100" width="100px;" alt="Kakul Gupta"/><br /><sub><b>Kakul Gupta</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=kakulgupta" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/Nicify"><img src="https://avatars3.githubusercontent.com/u/24217275?v=4?s=100" width="100px;" alt="Eva1ent"/><br /><sub><b>Eva1ent</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=Nicify" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/slidinghotdog"><img src="https://avatars3.githubusercontent.com/u/33790211?v=4?s=100" width="100px;" alt="slidinghotdog"/><br /><sub><b>slidinghotdog</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=slidinghotdog" title="Code">💻</a></td>
      <td align="center"><a href="https://www.linkedin.com/in/roysommer/"><img src="https://avatars2.githubusercontent.com/u/6681893?v=4?s=100" width="100px;" alt="Roy Sommer"/><br /><sub><b>Roy Sommer</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=illBeRoy" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/nateshmbhat"><img src="https://avatars1.githubusercontent.com/u/23279926?v=4?s=100" width="100px;" alt="Natesh M Bhat"/><br /><sub><b>Natesh M Bhat</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=nateshmbhat" title="Documentation">📖</a></td>
      <td align="center"><a href="https://www.greatapes.fi"><img src="https://avatars3.githubusercontent.com/u/3404389?v=4?s=100" width="100px;" alt="Mikko Sairio"/><br /><sub><b>Mikko Sairio</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=msairio" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/shubhamzanwar"><img src="https://avatars0.githubusercontent.com/u/15626155?v=4?s=100" width="100px;" alt="Shubham Zanwar"/><br /><sub><b>Shubham Zanwar</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=shubhamzanwar" title="Code">💻</a></td>
      <td align="center"><a href="https://matrunchyk.com"><img src="https://avatars0.githubusercontent.com/u/2089828?v=4?s=100" width="100px;" alt="Serhii Matrunchyk"/><br /><sub><b>Serhii Matrunchyk</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=matrunchyk" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/Solant"><img src="https://avatars2.githubusercontent.com/u/5971578?v=4?s=100" width="100px;" alt="Solant"/><br /><sub><b>Solant</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=Solant" title="Code">💻</a></td>
      <td align="center"><a href="https://cbp.io"><img src="https://avatars1.githubusercontent.com/u/995050?v=4?s=100" width="100px;" alt="Christian Petersen"/><br /><sub><b>Christian Petersen</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=fnky" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/agg23"><img src="https://avatars1.githubusercontent.com/u/238679?v=4?s=100" width="100px;" alt="Adam Gastineau"/><br /><sub><b>Adam Gastineau</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=agg23" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/gluaxspeed"><img src="https://avatars2.githubusercontent.com/u/16431709?v=4?s=100" width="100px;" alt="gluaxspeed"/><br /><sub><b>gluaxspeed</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=gluaxspeed" title="Code">💻</a></td>
      <td align="center"><a href="http://chrisshepherd.me"><img src="https://avatars1.githubusercontent.com/u/1379888?v=4?s=100" width="100px;" alt="Chris Shepherd"/><br /><sub><b>Chris Shepherd</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=sheepsteak" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/MistahMojo"><img src="https://avatars1.githubusercontent.com/u/51117537?v=4?s=100" width="100px;" alt="Jak"/><br /><sub><b>Jak</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=MistahMojo" title="Code">💻</a></td>
      <td align="center"><a href="https://gregbenner.life"><img src="https://avatars3.githubusercontent.com/u/1177690?v=4?s=100" width="100px;" alt="Greg B"/><br /><sub><b>Greg B</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=gregbenner" title="Documentation">📖</a></td>
      <td align="center"><a href="http://eeems.website"><img src="https://avatars1.githubusercontent.com/u/1176979?v=4?s=100" width="100px;" alt="Nathaniel van Diepen"/><br /><sub><b>Nathaniel van Diepen</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=Eeems" title="Code">💻</a></td>
      <td align="center"><a href="http://N/A"><img src="https://avatars.githubusercontent.com/u/61944859?v=4?s=100" width="100px;" alt="KR Tirtho"/><br /><sub><b>KR Tirtho</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=KRTirtho" title="Code">💻</a></td>
      <td align="center"><a href="http://thelmgn.com"><img src="https://avatars.githubusercontent.com/u/12257112?v=4?s=100" width="100px;" alt="theLMGN"/><br /><sub><b>theLMGN</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=theLMGN" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/KaMeHb-UA"><img src="https://avatars.githubusercontent.com/u/20382677?v=4?s=100" width="100px;" alt="KaMeHb-UA"/><br /><sub><b>KaMeHb-UA</b></sub></a><br /><a href="https://github.com/nodegui/react-nodegui/commits?author=KaMeHb-UA" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
