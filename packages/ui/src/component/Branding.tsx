import React from 'react';
import '../styles/Branding.scss';

type BrandingProps = {
  home?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Branding: React.FC<BrandingProps> = ({ home, children, className }) => {
  const Tag = home ? 'h1' : 'p';
  const classNames = className ? `branding ${className}` : 'branding';
  return <Tag className={classNames}>{children}</Tag>;
};
