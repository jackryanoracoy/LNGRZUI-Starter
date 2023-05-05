import React from 'react';
import { BrandingProps } from './Types';
import '../styles/Branding.scss';

export const Branding: React.FC<BrandingProps> = ({ home, children, className = '' }) => {
  const Tag = home ? 'h1' : 'p';
  const classNames = className ? `branding ${className}` : 'branding';
  return <Tag className={classNames}>{children}</Tag>;
};
