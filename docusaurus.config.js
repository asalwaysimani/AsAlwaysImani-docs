// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "As Always Imani",
  tagline: "doing all the things all over the internet",
  // Set the production url of your site here
  url: "https://asalwaysimani.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: 'throw',
  favicon: "img/asalwaysimani_wordmark.ico",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'as always imani', // Usually your GitHub org/user name.
  projectName: 'AsAlwaysImani-docs', // Usually your repo name.
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  staticDirectories: ['static', 'blog'],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
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
        
        exclude: ['**/*.wip'],
        breadcrumbs: true,
        // showLastUpdateAuthor: true,
        // showLastUpdateTime: true,
        
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        hideOnScroll: false,
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
          { to: "/blog", 
          label: "on CoHost", 
          position: "left" },
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
