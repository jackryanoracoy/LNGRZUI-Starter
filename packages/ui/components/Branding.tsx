import React from 'react';
import { pre } from '../prefixConfig';
import { BrandingProps } from '../components/ComponentTypes';
import '../styles/Branding.scss';

export const Branding: React.FC<BrandingProps> = ({
  index, className = '', title
}) => {
  const Tag = index ? 'h1' : 'p';
  const classNames = className ? `${pre}branding ${className}` : `${pre}branding`;
  return (
    <Tag className={classNames}>{title}</Tag>
  )
};
