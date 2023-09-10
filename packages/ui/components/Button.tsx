import React, { ButtonHTMLAttributes } from 'react';
import { pre, mpre } from '../prefixConfig';
import '../styles/Button.scss';

type Variant = 'primary' | 'secondary' | 'light' | 'dark' | 'success' | 'warning' | 'danger' | 'info';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  display?: 'inline-block' | 'block';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  children, className = '', display = 'inline-block', size = 'small', variant = 'primary', ...rest
}) => {
  const classNames = className
    ? `${pre}button ${mpre}${variant} ${mpre}${size} ${mpre}${display} ${className}`
    : `${pre}button ${mpre}${variant} ${mpre}${size} ${mpre}${display}`;
  return (
    <button
      className={classNames}
      {...rest}
    >
      {children}
    </button>
  );
};
