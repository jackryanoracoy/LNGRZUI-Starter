import React from 'react';
import { TypographyProps } from './ComponentTypes';
import '../styles/Typography.scss';

export const Text: React.FC<TypographyProps> = ({
  children, className = '', href, target, type = '', variant = '', size = '', weight = '', transform = '', align = '',
}) => {
  const TyphographyClassNames = `
    ${className}
    ${size ? 'is_' + size : ''}
    ${variant ? 'is_' + variant : ''}
    ${weight ? 'is_' + weight : ''}
    ${transform ? 'is_' + transform : ''}
    ${align ? 'is_' + align : ''}
  `.replace(/\s+/g, ' ').trim();
  const classNames = TyphographyClassNames ? `typography ${TyphographyClassNames}` : 'typography';
  switch (type) {
    case 'hero'     : return <h1 className={`${classNames} is_hero`}>{children}</h1>;
    case 'section'  : return <h2 className={`${classNames} is_section`}>{children}</h2>;
    case 'article'  : return <h3 className={`${classNames} is_article`}>{children}</h3>;
    case 'title'    : return <h4 className={`${classNames} is_title`}>{children}</h4>;
    case 'paragraph': return <p className={`${classNames} is_paragraph`}>{children}</p>;
    case 'code'     : return <code className={`${classNames} is_code`}>{children}</code>;
    case 'link'     : return <a className={`${classNames} is_link`} href={href} target={target}>{children}</a>;
    default         : return <p className={`${classNames} is_paragraph`}>{children}</p>;
  }
};
