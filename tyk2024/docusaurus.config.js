// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Türkçe Yazılım Konatı',
  tagline: 'Yazılımlar, yazılım dilleri, yazılım programlama dilleri, sözcükler, yazılımcılar, bilgisayarcılar, telefoncular, yazılım kullanıcıları ve dahası için bir araya gelerek genişleyip büyüyen bir konat oluyoruz.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://turkceyazilimkonati.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'turkce-yazilim-konati', // Usually your GitHub org/user name.
  projectName: 'turkce-yazilim-konati.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/turkce-yazilim-konati/turkce-yazilim-konati.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/turkce-yazilim-konati/turkce-yazilim-konati.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Türkçe Yazılım Konatı',
        logo: {
          alt: 'Türkçe Yazılım Konatı Damgası',
          src: 'img/damga.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Kılavuzlar',
          },
          {to: '/blog', label: 'Günlen', position: 'left'},
          {to: '/tartishmalar', label: 'Tartışmalar', position: 'left'},
          {
            href: 'https://github.com/turkce-yazilim-konati',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kılavuzlar',
            items: [
              {
                label: 'Tutorial',
                to: '/kilavuzlar/intro',
              },
            ],
          },
          {
            title: 'Topluluk',
            items: [
              {
                label: 'Discord',
                href: 'https://turkceyazilimkonati.com/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/turkceyazilim',
              },
            ],
          },
          {
            title: 'Dahası',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/turkce-yazilim-konati',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
