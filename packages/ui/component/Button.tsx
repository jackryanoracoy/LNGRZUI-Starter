import React from 'react';
import { ButtonProps } from './Types';
import '../styles/Button.scss';

export const Button: React.FC<ButtonProps> = ({
  children, className = '', display = 'inline-block', size = 'small', variant = 'primary', ...rest
}) => {
  const classNames = className
    ? `button is_${variant} is_${size} is_${display} ${className}`
    : `button is_${variant} is_${size} is_${display}`;
  return (
    <button
      className={classNames}
      {...rest}
    >
      {children}
    </button>
  );
};
