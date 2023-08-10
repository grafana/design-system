import React from 'react';
import tokens from '../../tokens/tokens';

export const Button = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: tokens.color.blue[400],
        border: 'none',
        padding: `${tokens.spacing.x0_5} ${tokens.spacing.x1}`,
        borderRadius: tokens.border.borderRadius.default,
        ...tokens.font.body,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
