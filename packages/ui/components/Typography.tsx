import React from 'react';
import { pre, mpre } from '../prefixConfig';
import '../styles/Typography.scss';

type Variant = 'primary' | 'secondary' | 'light' | 'dark' | 'success' | 'warning' | 'danger' | 'info';

type TypographyProps = {
  children: React.ReactNode;
  index?: boolean;
  className?: string;
  href?: string;
  target?: string;
  variant?: Variant;
  transform?: 'capitalize' | 'uppercase' | 'lowercase',
  type?: 'hero' | 'article' | 'section' | 'title' | 'sr-only' | 'paragraph' | 'code' | 'link';
  size?: 'small' | 'medium' | 'large' | 'extra-large' | 'super-large' | 'mega-large';
  weight?: 'normal' | 'bold' | 'bolder' | 'lighter';
  align?: 'center' | 'justify' | 'right' | 'left';
};

export const Text: React.FC<TypographyProps> = ({
  children, index, className = '', href, target, type = '', variant = '', size = '', weight = '', transform = '', align = '',
}) => {
  const Tag = index ? 'h4' : 'h1';
  const TyphographyClassNames = `
    ${className}
    ${size ? `${mpre}${size}` : ''}
    ${variant ? `${mpre}${variant}` : ''}
    ${weight ? `${mpre}${weight}` : ''}
    ${transform ? `${mpre}${transform}` : ''}
    ${align ? `${mpre}${align}` : ''}
  `.replace(/\s+/g, ' ').trim();
  const classNames = TyphographyClassNames ? `${pre}typography ${TyphographyClassNames}` : `${pre}typography`;
  switch (type) {
    case 'hero'     : return <Tag className={`${classNames} ${mpre}hero`}>{children}</Tag>;
    case 'section'  : return <h2 className={`${classNames} ${mpre}section`}>{children}</h2>;
    case 'article'  : return <h3 className={`${classNames} ${mpre}article`}>{children}</h3>;
    case 'title'    : return <h4 className={`${classNames} ${mpre}title`}>{children}</h4>;
    case 'paragraph': return <p className={`${classNames} ${mpre}paragraph`}>{children}</p>;
    case 'code'     : return <code className={`${classNames} ${mpre}code`}>{children}</code>;
    case 'link'     : return <a className={`${classNames} ${mpre}link`} href={href} target={target}>{children}</a>;
    default         : return <p className={`${classNames} ${mpre}paragraph`}>{children}</p>;
  }
};
