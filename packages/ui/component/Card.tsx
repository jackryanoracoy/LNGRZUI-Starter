import React from 'react';
import { CardProps, ChildrenProps } from './ComponentTypes';
import '../styles/Card.scss';

export const Card: React.FC<CardProps> = ({
  children, className = '', header
}) => {
  const classNames = className ? `card ${className}` : 'card';
  return (
    <div className={classNames}>
      {header ? <div className='card-header'>{header}</div> : ''}
      <PaperContent>{children}</PaperContent>
    </div>
  )
}

const PaperContent: React.FC<ChildrenProps> = ({
  children
}) => {
  return <div className='card-content'>{children}</div>
}
