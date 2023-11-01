import React, { CSSProperties, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren, CSSProperties {
  gap?: number;
}
export const Flex = ({ children, flexDirection = 'column', gap }: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: gap ? `${gap * 8}px` : undefined }}>{children}</div>
  );
};
