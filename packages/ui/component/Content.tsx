import React from 'react';
import { ContentProps } from './Types';
import { Text } from './Typography';
import '../styles/Content.scss';

export const Content: React.FC<ContentProps> = ({
  children, className = '', title, type = 'section', padding = 'normal'
}) => {
  const Tag = type;
  const classNames = className
    ? `${type} is_${padding} ${className}`
    : `${type} is_${padding} `;
  return (
    <Tag className={classNames}>
      {title ? <Text type={type === 'section' ? 'section' : 'article'}>{title}</Text> : ''}
      {children}
    </Tag>
  )
};
