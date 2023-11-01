import React, { PropsWithChildren } from 'react';
import * as ui from '@grafana/ui';
import { Flex } from '@site/src/components/templates/Flex';
import { users } from '@site/src/data';
import { useColumns } from '@site/src/components/templates/TablePage/useColumns';
import { Page } from '@site/src/components/templates/Page/Page';

interface StackProps extends PropsWithChildren {
  direction?: 'horizontal' | 'vertical';
  gap?: number;
}

function Stack({ direction, gap, children }: StackProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: gap ?? 16,
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
      }}
    >
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
}

function Container({ children, ...props }: PropsWithChildren) {
  return (
    <div style={{ width: '300px' }} {...props}>
      {children}
    </div>
  );
}

// Components must be added to this object in order for them to be "in scope" inside the live code previews
const ReactLiveScope = {
  React,
  ...ui,
  Flex,
  users,
  useColumns,
  Page,
  ...React,
};

export default ReactLiveScope;
