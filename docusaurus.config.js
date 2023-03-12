// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "As Always Imani",
  tagline: "doing all the things all over the internet",
  url: "https://asalwaysimani.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/asalwaysimani_wordmark.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "As Always Imani", // Usually your GitHub org/user name.
  projectName: "As Always Imani Docs", // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/asalwaysimani/AsAlwaysImani-docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl: "https://github.com/asalwaysimani/AsAlwaysImani-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "As Always Imani",
        logo: {
          alt: "As Always Imani Logo",
          src: "img/asalwaysimani_wordmark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Intro",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://cohost.org/asalwaysimani/",
            label: "cohost",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Links",
                to: "/docs/contact",
              },
              {
                label: "Twitch",
                href: "https://www.twitch.tv/asalwaysimani",
              },
              {
                label: "Ko-fi",
                href: "https://ko-fi.com/asalwaysimani",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/asalwaysimani",
              },
            ],
          },
          {
            title: "Margaret Catter Development",
            items: [
              {
                label: "Projects",
                to: "src/pages/projects/MargaretCatterDevelopment",
              },
              {
                label: "Itch.io",
                href: "https://margaretcatter.itch.io/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = {
  url: 'gilded-gnome-c6fbaa.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/', // Base directory of your site relative to your repo
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
