import React from 'react';
import tokens from '../../tokens/tokens';

export const Box = ({ children, background, padding, margin }) => {
  return (
    <div
      style={{
        backgroundColor: background,
        padding: padding,
        margin: margin,
        height: '50px',
        width: '50px',
        borderRadius: tokens.border.borderRadius.default,
        ...tokens.font.body,
      }}
    >
      {children}
    </div>
  );
};

Box.displayName = 'Box';
