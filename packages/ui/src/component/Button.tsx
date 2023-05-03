import React, { ButtonHTMLAttributes } from 'react';
import '../styles/Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  display?: 'inline-block' | 'block';
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'success' | 'warnig' | 'danger' | 'info';
}

export const Button: React.FC<ButtonProps> = ({
  children, className, display = 'inline-block', size = 'medium', variant = 'primary', ...rest
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
