import React from 'react';
import { pre, mpre } from '../prefixConfig';
import { ContentProps } from './ComponentTypes';
import { Text } from './Typography';
import '../styles/Content.scss';

export const Content: React.FC<ContentProps> = ({
  children, className = '', title, type = 'section', padding = 'normal'
}) => {
  const Tag = type;
  const classNames = className
    ? `${pre}${type} ${mpre}${padding} ${className}`
    : `${pre}${type} ${mpre}${padding}`;
  return (
    <Tag className={classNames}>
      {title ? <Text type={type === 'section' ? 'section' : 'article'} transform='uppercase'>{title}</Text> : ''}
      {children}
    </Tag>
  );
};

