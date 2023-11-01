// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import { Badge, Icon } from '@grafana/ui';
import { StorybookLink } from '@site/src/components/StorybookLink';

declare global {
  interface Window {
    __grafana_public_path__: string;
  }
}

if (typeof window !== 'undefined') {
  // Set the root path for icons to load them from Grafana's CDN instead of bundling locally
  window.__grafana_public_path__ = 'https://grafana-assets.grafana.net/grafana/10.3.0/public/';
}

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Custom components
  Badge,
  Icon,
  StorybookLink,
};
