import React from 'react';
import { TypographyProps } from './Types';
import '../styles/Typography.scss';

export const Text: React.FC<TypographyProps> = ({
  children, className = '', href, target, type = '', variant = '', size = '', weight = '', align = ''
}) => {
  const classNames = `${className} ${size ? 'is_' + size : ''} ${variant ? 'is_' + variant : ''} ${weight ? 'is_' + weight : ''} ${align ? 'is_' + align : ''}`.replace(/\s+/g, ' ').trim();
  switch (type) {
    case 'hero'     : return <h1 className={`typography is_hero ${classNames}`}>{children}</h1>;
    case 'section'  : return <h2 className={`typography is_section ${classNames}`}>{children}</h2>;
    case 'article'  : return <h3 className={`typography is_article ${classNames}`}>{children}</h3>;
    case 'title'    : return <h4 className={`typography is_title ${classNames}`}>{children}</h4>;
    case 'sr-only'  : return <h6 className={`typography is_sr-only`}>{children}</h6>;
    case 'paragraph': return <p className={`typography is_paragraph ${classNames}`}>{children}</p>;
    case 'code'     : return <code className={`typography is_code ${classNames}`}>{children}</code>;
    case 'link'     : return <a className={`typography is_link ${classNames}`} href={href} target={target}>{children}</a>;
    default         : return <p className={`typography is_paragraph ${classNames}`}>{children}</p>;
  }
};
