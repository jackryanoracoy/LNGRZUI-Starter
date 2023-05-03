import React from 'react';
import '../styles/Typography.scss';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  type?: 'hero' | 'article' | 'section' | 'title' | 'sr-only' | 'paragraph' | 'code' | 'link';
  variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'default' | 'small' | 'medium' | 'large' | 'extra-large' | 'super-large' | 'mega-large';
  weight?: 'normal' | 'bold' | 'bolder' | 'lighter';
  align?: 'center' | 'justify' | 'right' | 'left';
};

export const Text: React.FC<TypographyProps> = ({
  children, className, href, target, type = 'paragraph', variant = 'dark', size = 'default', weight = 'normal', align = 'left'
}) => {
  const classNames = className ? `typography ${className}` : `typography`;
  switch (type) {
    case 'hero': return <h1 className={`${classNames} is_hero is_${variant} is_${size} is_${align}`}>{children}</h1>;
    case 'section': return <h2 className={`${classNames} is_section is_${variant} is_${size} is_${align}`}>{children}</h2>;
    case 'article': return <h3 className={`${classNames} is_article is_${variant} is_${size} is_${align}`}>{children}</h3>;
    case 'title': return <h4 className={`${classNames} is_title is_${variant} is_${size} is_${align}`}>{children}</h4>;
    case 'sr-only': return <h6 className={`${classNames} is_sr-only`}>{children}</h6>;
    case 'paragraph': return <p className={`${classNames} is_paragraph is_${variant} is_${size} is_${weight} is_${align}`}>{children}</p>;
    case 'code': return <code className={`${classNames} is_code is_${variant} is_${size} is_${weight} is_${align}`}>{children}</code>;
    case 'link': return <a className={`${classNames} is_link is_${size} is_${weight} is_${align}`} href={href} target={target}>{children}</a>;
    default: return <p className={`${classNames} is_paragraph is_${variant} is_${size} is_${weight} is_${align}`}>{children}</p>;
  }
};
