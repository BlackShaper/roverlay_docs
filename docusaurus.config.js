/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Roverlay",
  tagline: "Overlay for everything",
  url: "https://roverlay.github.io",
  baseUrl: "/roverlay_docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "roverlay", // Usually your GitHub org/user name.
  projectName: "roverlay_docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Roverlay",
      logo: {
        alt: "Roverlay Logo",
        src: "img/roverlay.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Документация",
        },
        // { to: "/blog", label: "Новости", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Документация",
          items: [
            {
              label: "Вступление",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            {
              label: "Discord",
              href: "https://discord.gg/ZNTG53SgqC",
            },
          ],
        },
        {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Roverlay, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/roverlay/roverlay_docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
