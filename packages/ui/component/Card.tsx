import React from 'react';
import { pre } from '../prefixConfig';
import { CardProps, ChildrenProps } from './ComponentTypes';
import '../styles/Card.scss';

export const Card: React.FC<CardProps> = ({
  children, className = '', header
}) => {
  const classNames = className ? `${pre}card ${className}` : `${pre}card`;
  return (
    <div className={classNames}>
      {header ? <div className={`${pre}card-header`}>{header}</div> : ''}
      <CardContent>{children}</CardContent>
    </div>
  );
};

const CardContent: React.FC<ChildrenProps> = ({
  children
}) => {
  return <div className={`${pre}card-content`}>{children}</div>
};
