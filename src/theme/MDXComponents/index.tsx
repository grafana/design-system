// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import { Badge, Icon } from '@grafana/ui';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Custom components
  Badge,
  Icon,
};
