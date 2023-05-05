import React from 'react';
import { CommonProps } from './Types';
import '../styles/Card.scss';

export const Card: React.FC<CommonProps> = ({
  children, className = '',
}) => {
  const classNames = className ? `card ${className}` : `card`;
  return (
    <div className={classNames}>
      <div className='card-content'>{children}</div>
    </div>
  )
}
