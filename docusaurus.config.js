// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grafana Labs Design System',
  tagline: 'Design Systems are cool',
  url: 'https://design.grafana.com',
  baseUrl: '/design-system/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  staticDirectories: ['static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Grafana", // Usually your GitHub org/user name.
  projectName: "design-system", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
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
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/grafana/design-system/blob/main/",
        },
        blog: false, // disabled for now but maybe we can have a design system blog later :)
        pages: {
          path: 'pages'
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
      // announcementBar: {
      //   id: 'welcome',
      //   content:
      //     'Welcome to our design system! Learn more <a target="_blank" rel="noopener noreferrer" href="#">here</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'Design System logo',
          href: 'about',
          src: '/img/logo_with_text.png'
        },
        items: [
          {
            href: "https://github.com/grafana/design-system",
            label: "GitHub",
            position: "right",
          },
        ],
      },
    }),
};

module.exports = config;
