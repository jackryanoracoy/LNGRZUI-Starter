import React from 'react';
import { BrandingProps } from './Types';
import '../styles/Branding.scss';

export const Branding: React.FC<BrandingProps> = ({
  index, className = '', title
}) => {
  const Tag = index ? 'h1' : 'p';
  const classNames = className ? `branding ${className}` : 'branding';
  return (
    <Tag className={classNames}>{title}</Tag>
  )
};
