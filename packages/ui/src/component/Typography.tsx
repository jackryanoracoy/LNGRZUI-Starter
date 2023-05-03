import React from 'react';
import '../styles/Typography.scss';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  type?: 'hero' | 'article' | 'section' | 'title' | 'sr-only' | 'paragraph' | 'link';
  variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'success' | 'warnig' | 'danger' | 'info';
};

export const Text: React.FC<TypographyProps> = ({
  children, className, href, target, type = 'paragraph', variant = 'dark',
}) => {
  switch (type) {
    case 'hero': return <h1 className={`typography is_hero is_${variant} ${className || ''}`}>{children}</h1>;
    case 'section': return <h2 className={`typography is_section is_${variant} ${className || ''}`}>{children}</h2>;
    case 'article': return <h3 className={`typography is_article is_${variant} ${className || ''}`}>{children}</h3>;
    case 'title': return <h4 className={`typography is_title is_${variant} ${className || ''}`}>{children}</h4>;
    case 'sr-only': return <h6 className={`typography is_sr-only`}>{children}</h6>;
    case 'paragraph': return <p className={`typography is_paragraph is_${variant} ${className || ''}`}>{children}</p>;
    case 'link': return <a className={`typography is_link ${className || ''}`} href={href} target={target}>{children}</a>;
    default: return <p className={`typography is_paragraph is_${variant} ${className || ''}`}>{children}</p>;
  }
};
