const baseConfig = require('./docusaurus.config.base');

// /** @type {import('@docusaurus/types').Config} */
const config = {
  ...baseConfig,
  url: 'https://grafana.com',
  baseUrl: 'developers/saga/',
  trailingSlash: true,

  themeConfig: {
    ...baseConfig.themeConfig,
    navbar: {
      ...baseConfig.themeConfig.navbar,
      items: [
        ...baseConfig.themeConfig.navbar.items,
        {
          href: 'https://grafana.com/developers',
          label: 'Dev Portal Home',
          position: 'right',
        },
      ],
    },
  },

  customFields: {
    rudderStackTracking: {
      url: 'https://rs.grafana.com',
      writeKey: '1sBAgwTlZ2K0zTzkM8YTWorZI00',
      configUrl: 'https://rsc.grafana.com',
      sdkUrl: 'https://rsdk.grafana.com',
    },
    canSpamUrl: 'https://grafana.com/canspam',
  },
};

module.exports = config;
