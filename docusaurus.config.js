// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

export default {
  title: 'RAFFELLO Docs',
  tagline: 'Documentation for RAFFELLO.js',
  favicon: 'img/favicon.ico', // To change later on

  staticDirectories: ['static'], // For local images

  // Production url
  url: 'https://theokva.github.io',
  baseUrl: '/raffaello-docs/',

  // GitHub pages deployment config.
  organizationName: 'TheoKVA',
  projectName: 'raffaello-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // ← this makes docs/ the homepage
          sidebarPath: './sidebars.js',
          editUrl:
          'https://github.com/TheoKVA/raffaello-docs/tree/main/',
        },
        blog: false, // Disable the blog/ feature
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // ==============
      // NAVIGATION BAR
      // ==============
      navbar: {
        title: 'RAFFAELLO Documentation',
        logo: {
          alt: '',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'documentationSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/TheoKVA/raffaello-docs/',
            // label: 'GitHub',
            className: 'header--github-link',
            position: 'right',
          },
        ],
      },

      // ========
      //  FOOTER
      // ========
      footer: {
        style: 'dark',
        links: [
          /*
            On va mettre 
            - About
            - Github repo
            - report a bug
            - ask for a new feature          
          */
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Documentation',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'X',
          //       href: 'https://x.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Medium',
          //       to: 'https://github.com/TheoKVA/raffello-docs',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/TheoKVA/raffello-docs',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },

      // Other
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
