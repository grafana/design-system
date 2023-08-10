import React from 'react';
import tokens from '../../tokens/tokens';

export const Button = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: tokens.button.primary.fill,
        border: 'none',
        padding: `${tokens.spacing.x1} ${tokens.spacing.x2}`,
        borderRadius: tokens.button.primary.borderRadius,
        ...tokens.font.body,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
