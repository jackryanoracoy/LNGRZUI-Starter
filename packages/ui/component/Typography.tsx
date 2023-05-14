import React from 'react';
import { pre, mpre } from '../prefixConfig';
import { TypographyProps } from './ComponentTypes';
import '../styles/Typography.scss';

export const Text: React.FC<TypographyProps> = ({
  children, className = '', href, target, type = '', variant = '', size = '', weight = '', transform = '', align = '',
}) => {
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
    case 'hero'     : return <h1 className={`${classNames} ${mpre}hero`}>{children}</h1>;
    case 'section'  : return <h2 className={`${classNames} ${mpre}section`}>{children}</h2>;
    case 'article'  : return <h3 className={`${classNames} ${mpre}article`}>{children}</h3>;
    case 'title'    : return <h4 className={`${classNames} ${mpre}title`}>{children}</h4>;
    case 'paragraph': return <p className={`${classNames} ${mpre}paragraph`}>{children}</p>;
    case 'code'     : return <code className={`${classNames} ${mpre}code`}>{children}</code>;
    case 'link'     : return <a className={`${classNames} ${mpre}link`} href={href} target={target}>{children}</a>;
    default         : return <p className={`${classNames} ${mpre}paragraph`}>{children}</p>;
  }
};
