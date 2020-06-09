(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(169),c=a(173),i=a(179);const o=i.a.header``,m=i.a.section`
  display: flex;
  align-items: center;
  padding: 2rem 0 0 0;
  width: 100%;
  margin: 0 auto;
`,s=i.a.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  max-width: var(--ifm-container-width);
  padding-left: 1rem;
  padding-left: var(--ifm-spacing-horizontal);
  padding-right: 1rem;
  padding-right: var(--ifm-spacing-horizontal);
  width: 100%;
`,u=i.a.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`,d=(i.a.ol``,i.a.li`
  font-size: 20px;
`,i.a.h1``),p=i.a.h2``,g=(i.a.h4`
  font-weight: 600;
`,i.a.code`
  color: white !important;
  background: black;
  font-size: 14px;
  position: relative;
  &::before {
    content: "$";
    position: absolute;
    left: -13px;
    color: gray;
  }
`),E=i.a.div`
  background: black;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 50px 30px 30px 30px;
  width: 600px;
  max-width: 100%;
  position: relative;
  margin-bottom: 20px;
  &::before {
    content: "○ ○ ○";
    color: gray;
    font-size: 14px;
    position: absolute;
    left: 15px;
    top: 5px;
  }
`,h=i.a.h4`
  font-weight: 400;
`,f=i.a.div`
  width: 600px;
  max-width: 100%;
`,w=()=>l.a.createElement(m,{id:"quick-start"},l.a.createElement(s,null,l.a.createElement(u,null,l.a.createElement(p,null,"Give it a try"),l.a.createElement(f,null,l.a.createElement(h,null,"1. Use the CRA template"),l.a.createElement(E,null,l.a.createElement(g,null,"create-react-app --template react-nodegui rn-starter"),l.a.createElement(g,null,"cd rn-starter"),l.a.createElement(g,null,"npm run dev"),l.a.createElement(g,null,"npm start")),l.a.createElement(h,null,"2. Run these commands"),l.a.createElement(E,null,l.a.createElement(g,null,"git clone https://github.com/nodegui/react-nodegui-starter"),l.a.createElement(g,null,"cd react-nodegui-starter"),l.a.createElement(g,null,"npm install"),l.a.createElement(g,null,"npm run dev"),l.a.createElement(g,null,"npm start")),l.a.createElement(h,null,"3."," ",l.a.createElement("a",{className:"LinkBasics",href:"docs/guides/getting-started"},"Learn the basics")," ","or dive deeper and take a"," ",l.a.createElement("a",{className:"LinkBasics",href:"docs/api/interfaces/buttonprops"},"look at the APIs."))))));var b=a(94),v=a.n(b),x=a(174);const y=i.a.a`
  ${e=>{switch(e.type){case"primary":return"\n          color: white; \n          background: var(--ifm-color-primary);\n          &:hover {\n            color: white;\n            text-decoration: none;\n            background: var(--ifm-color-primary-dark);\n          }\n        ";case"secondary":return'\n          &::after {\n            content: "\u203a";\n            font-size: 24px;\n            margin-left: 5px;\n            text-align: center;\n          }\n        '}}}
  padding: 0.7rem 1.1rem;
  font-size: 1.2em;
`,k=Object(i.a)(d)`
  font-size: 3em;
  font-weight: 600;
`,N=i.a.p`
  font-size: 1.6em;
  text-align: center;
`,j=i.a.img`
  max-width: 170px;
`,O=Object(i.a)(o)`
  padding-bottom: 40px;
`;function R(){return l.a.createElement("div",null,l.a.createElement(y,{type:"primary",href:"#quick-start",target:"_self"},"Quick start"),l.a.createElement(y,{type:"secondary",href:Object(x.a)("docs/guides/getting-started"),target:"_self"},"Learn basics"))}const C=()=>{const e=Object(r.a)(),{siteConfig:t={}}=e;return l.a.createElement(O,null,l.a.createElement(s,null,l.a.createElement(u,null,l.a.createElement(j,{src:"img/logox200.png"}),l.a.createElement(k,null,t.title),l.a.createElement(N,null,t.tagline),l.a.createElement("div",{className:v.a.buttons},l.a.createElement(R,null)))))};var z=a(170),S=a.n(z);const G=[{title:l.a.createElement(l.a.Fragment,null,"Powered by React"),imageUrl:"img/undraw_react.svg",description:l.a.createElement(l.a.Fragment,null,"With React NodeGui, you can build truly native apps with React. If you dont want to use React, there is also a pure"," ",l.a.createElement("a",{href:"https://nodegui.org"},"JavaScript based version"),".")},{title:l.a.createElement(l.a.Fragment,null,"Open Source"),imageUrl:"img/undraw_code_review.svg",description:l.a.createElement(l.a.Fragment,null,"React NodeGui is an open source project maintained by an active community of contributors.")},{title:l.a.createElement(l.a.Fragment,null," Cross Platform"),imageUrl:"img/undraw_windows.svg",description:l.a.createElement(l.a.Fragment,null,"React NodeGui apps build and run on Mac, Windows, and Linux platforms.")}],T=()=>l.a.createElement("section",{className:v.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},G.map(({imageUrl:e,title:t,description:a},n)=>l.a.createElement("div",{key:n,className:S()("col col--4",v.a.feature)},e&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:v.a.featureImage,src:Object(x.a)(e),alt:t})),l.a.createElement("h3",{className:"text--center"},t),l.a.createElement("p",{className:"text--center"},a))))));a(153);const J=e=>l.a.createElement(m,null,l.a.createElement("div",{className:"SplitView"},l.a.createElement("div",{className:"column first left "+e.columnOneClass},e.columnOne),l.a.createElement("div",{className:"column last right "+e.columnTwoClass},e.columnTwo))),L=i.a.img`
  max-height: 300px;
  padding-bottom: 40px;
`,_=()=>{const e=()=>l.a.createElement(L,{src:"/img/demo.png"}),t=()=>l.a.createElement("div",null,l.a.createElement("h3",null,"Create native apps for Windows, MacOs and Linux using React and CSS"),l.a.createElement("p",null,"lets you create truly native apps and doesn't compromise on your users' experience. It provides a core set of platform agnostic native widgets that map directly to the platform\u2019s native UI building blocks."),l.a.createElement("p",null,"React NodeGui widgets are built on top of"," ",l.a.createElement("a",{href:"https://www.qt.io/",target:"_blank"},"Qt")," ","which is a mature desktop apps framework. React NodeGui components are extremely customizable just like in the web but does"," ",l.a.createElement("strong",null,"NOT")," use a Web browser under the hood."));return l.a.createElement(J,{columnTwoClass:"text",columnOne:l.a.createElement(e,null),columnTwo:l.a.createElement(t,null)})},F=i.a.img`
  max-height: 300px;
  padding-bottom: 40px;
`,U=()=>{const e=()=>l.a.createElement("div",null,l.a.createElement(F,{src:"img/code-sample.png"})),t=()=>l.a.createElement("div",null,l.a.createElement("h3",null,"Written in React\u2014rendered with native code by Qt"),l.a.createElement("p",null,"Apps can be built completely in JavaScript. This enables native app development for whole new teams of developers, and can let existing native teams work much faster."),l.a.createElement("p",null,"With NodeGui you get flexibility of web and perfromance of Native desktop apps."));return l.a.createElement(J,{columnOneClass:"text",columnOne:l.a.createElement(t,null),columnTwo:l.a.createElement(e,null)})},W=i.a.h2`
  margin-top: 20px;
  margin-bottom: 40px;
`,I=i.a.div`
  padding: 40px;
`,P=()=>(Object(n.useEffect)(()=>{const e=document.createElement("script");e.src="//cdn.changelog.com/embed.js",e.async=!0,document.body.appendChild(e)},[]),l.a.createElement(m,{id:"quick-start"},l.a.createElement(s,null,l.a.createElement(u,null,l.a.createElement(W,null,"Talks"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://changelog.com/jsparty/96"},"JS Party 96: Performant Node desktop apps with NodeGui")," ","\u2013 Listen on Changelog.com"),l.a.createElement("audio",{"data-theme":"night","data-src":"https://changelog.com/jsparty/96/embed",src:"https://cdn.changelog.com/uploads/jsparty/96/js-party-96.mp3",preload:"none",class:"changelog-episode",controls:!0}))),l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.meetup.com/KarmaJS/events/265554520/"},"KarmaJS Nov'19 Stockholm")),l.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/8jH5gaEEDv4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))),l.a.createElement(I,null)))));t.default=function(){const e=Object(r.a)(),{siteConfig:t={}}=e;return l.a.createElement(c.a,{title:"Hello from "+t.title,description:"Build performant, native and cross-platform desktop applications with React \ud83d\ude80"},l.a.createElement(C,null),l.a.createElement("main",null,l.a.createElement(T,null),l.a.createElement(_,null),l.a.createElement(U,null),l.a.createElement(w,null),l.a.createElement(P,null)))}}}]);