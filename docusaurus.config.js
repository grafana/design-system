const baseConfig = require('./docusaurus.config.base');

// /** @type {import('@docusaurus/types').Config} */
const config = {
  ...baseConfig,
  url: 'https://grafana.com',
  baseUrl: '/design-system/',
};

module.exports = config;
