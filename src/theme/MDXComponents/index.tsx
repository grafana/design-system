// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import { Badge, Icon } from '@grafana/ui';
import { StorybookLink } from '@site/src/components/StorybookLink';
import { ComponentEmbed } from '@site/src/components/ComponentEmbed';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Custom components
  Badge,
  Icon,
  StorybookLink,
  ComponentEmbed,
};
