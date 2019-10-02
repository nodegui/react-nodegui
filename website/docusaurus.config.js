module.exports = {
  title: "React NodeGui",
  tagline: "Build performant, native, cross platform desktop apps with React",
  url: "https://react.nodegui.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nodegui", // Usually your GitHub org/user name.
  projectName: "react-nodegui", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "React NodeGui",
      logo: {
        alt: "NodeGui Logo",
        src: "img/logo-circle.png"
      },
      links: [
        { to: "docs/guides/getting-started", label: "Docs", position: "right" },
        {
          to: "docs/api/interfaces/buttonprops",
          label: "API",
          position: "right"
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/nodegui/react-nodegui",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { to: "docs/guides/getting-started", label: "Getting Started" },
            { to: "docs/api/interfaces/buttonprops", label: "API" }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Spectrum",
              href: "https://spectrum.chat/nodegui"
            },
            {
              label: "Twitter",
              to: "https://twitter.com/node_gui"
            },
            {
              label: "Medium",
              to: "https://medium.com/nodegui"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "NodeGui",
              to: "https://nodegui.org"
            },
            {
              label: "FAQ",
              to: "https://nodegui.org/faq"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NodeGui`
    },
    googleAnalytics: {
      trackingID: "UA-145065218-2"
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
