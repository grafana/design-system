import React from 'react';
import tokens from '../../tokens/tokens';

export const Box = ({ children, background, padding, margin, opacity, height = '50px', width = '50px' }) => {
  return (
    <div
      style={{
        backgroundColor: background,
        padding: padding,
        margin: margin,
        height: height,
        width: width,
        opacity: opacity,
        ...tokens.font.body,
      }}
    >
      {children}
    </div>
  );
};

Box.displayName = 'Box';
