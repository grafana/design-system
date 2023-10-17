const baseConfig = require('./docusaurus.config.base');

// /** @type {import('@docusaurus/types').Config} */
const config = {
  ...baseConfig,
  url: 'https://grafana-dev.com',
  baseUrl: '/developers/saga/',
};

module.exports = config;
