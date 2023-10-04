import React from 'react';
import { Badge, Input, Icon, Button, RadioButtonGroup, Select, AsyncSelect } from '@grafana/ui';

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

function Container({ children, ...props }) {
  return (
    <div style={{ width: '300px' }} {...props}>
      {children}
    </div>
  );
}

// Components must be added to this object in order for them to be "in scope" inside the live code previews
const ReactLiveScope = {
  React,
  Badge,
  Stack,
  Input,
  Icon,
  Button,
  RadioButtonGroup,
  Select,
  Container,
  AsyncSelect,
  ...React,
};

export default ReactLiveScope;
