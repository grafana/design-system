import React from 'react';
import tokens from '../../tokens/tokens';

export const Button = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: tokens.button.color.background.primary.default,
        color: tokens.button.color.text.primary,
        border: 'none',
        padding: `${tokens.spacing.x1} ${tokens.spacing.x2}`,
        borderRadius: tokens.button.borderRadius,
        ...tokens.font.body,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
