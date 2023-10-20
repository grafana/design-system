const baseConfig = require('./docusaurus.config.base');

// /** @type {import('@docusaurus/types').Config} */
const config = {
  ...baseConfig,
  url: 'https://grafana-dev.com/',
  baseUrl: 'developers/saga/',

  customFields: {
    rudderStackTracking: {
      url: 'https://rs.grafana-dev.com',
      writeKey: '1w02fcWseyqcwsJA9CSKRkfEOfU',
      configUrl: 'https://rsc.grafana.com',
      sdkUrl: 'https://rsdk.grafana.com',
    },
    canSpamUrl: 'https://grafana-dev.com/canspam',
  },
};

module.exports = config;
