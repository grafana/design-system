import { Global } from '@emotion/react';
import { useTheme2 } from '@grafana/ui';
import React from 'react';
import { getStyles } from '../css/getStyles';

export default function Root({ children }) {
  const theme = useTheme2();

  return (
    <>
      <Global styles={getStyles(theme)} />
      {children}
    </>
  );
}
