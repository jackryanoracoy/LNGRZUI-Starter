import React from 'react';
import { Text } from './Typography';
import '../styles/Content.scss';

type ContentProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  type?: 'article' | 'section';
  padding?: 'normal' | 'wide' | 'narrow' | 'zero';
};

export const Content: React.FC<ContentProps> = ({
  children, className, title, type = 'section', padding = 'normal'
}) => {
  const Tag = type;

  return (
    <Tag className={`${type} is_${padding} ${className || ''}`}>
      {title ? <Text type={type === 'section' ? 'section' : 'article'}>{title}</Text> : ''}
      {children}
    </Tag>
  )
};

