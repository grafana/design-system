import React from 'react';
import tokens from '../../tokens/tokens';

export const Button = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: tokens.color.blue[200],
        border: 'none',
        padding: `${tokens.spacing[50]} ${tokens.spacing[100]}`,
        borderRadius: tokens.border.boderRadius,
        ...tokens.font.body,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
