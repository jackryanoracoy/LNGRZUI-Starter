import React from 'react';
import { pre } from '../prefixConfig';
import '../styles/Branding.scss';

type BrandingProps = {
  className?: string;
  index?: boolean;
  title?: any;
};

export const Branding: React.FC<BrandingProps> = ({
  index, className = '', title
}) => {
  const Tag = index ? 'h1' : 'p';
  const classNames = className ? `${pre}branding ${className}` : `${pre}branding`;
  return (
    <Tag className={classNames}>{title}</Tag>
  )
};
