import React from 'react';
import { Icon } from '@grafana/ui';

interface StorybookLinkProps {
  path: string;
}

export const StorybookLink = ({ path }: StorybookLinkProps) => {
  return (
    <a
      href={'https://developers.grafana.com/ui/canary/index.html?path=' + path}
      target="_blank"
      className="header-links"
    >
      Storybook <Icon name="external-link-alt" />
    </a>
  );
};
