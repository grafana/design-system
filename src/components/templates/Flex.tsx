import React, { PropsWithChildren } from 'react';

export const Flex = ({ children }: PropsWithChildren) => {
  return <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>;
};
