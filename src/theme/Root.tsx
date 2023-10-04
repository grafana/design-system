import { Global } from '@emotion/react';

import React, { PropsWithChildren } from 'react';

import { useTheme2 } from '@grafana/ui';

import { getStyles } from '../css/getStyles';

export default function Root({ children }: PropsWithChildren) {
  const theme = useTheme2();

  return (
    <>
      <Global styles={getStyles(theme)} />
      {children}
    </>
  );
}
