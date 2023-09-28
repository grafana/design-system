import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { ComponentEmbed } from '@site/src/components/ComponentEmbed';
import { Badge, Tooltip } from '@grafana/ui';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Badge,
  Tooltip,
  ComponentEmbed,
};
