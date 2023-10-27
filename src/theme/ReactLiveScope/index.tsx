import React, { PropsWithChildren } from 'react';
import {
  Alert,
  AsyncSelect,
  Badge,
  Button,
  Field,
  Icon,
  IconButton,
  InlineSwitch,
  Input,
  InteractiveTable,
  RadioButtonGroup,
  Select,
  Switch,
  Text,
  TextLink,
  Tooltip,
  TextArea,
  Toggletip,
} from '@grafana/ui';
import { Box } from '@site/src/components/Box';
import { users } from '@site/src/data';

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
  Alert,
  AsyncSelect,
  Badge,
  Box,
  Button,
  Container,
  Field,
  Icon,
  IconButton,
  InlineSwitch,
  Input,
  InteractiveTable,
  RadioButtonGroup,
  Select,
  Stack,
  Switch,
  Text,
  TextLink,
  Tooltip,
  TextArea,
  Toggletip,
  users,
  ...React,
};

export default ReactLiveScope;
