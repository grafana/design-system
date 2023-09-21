import React from 'react';
import { Badge } from '@grafana/ui';

function Stack({ direction, gap, children }) {
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

const ReactLiveScope = {
  React,
  Badge,
  Stack,
  ...React,
};
export default ReactLiveScope;
