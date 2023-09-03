import React from 'react';
import { pre, mpre } from '../prefixConfig';
import { ButtonProps } from './ComponentTypes';
import '../styles/Button.scss';

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
