import React from 'react';
import '../styles/Card.scss';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  children, className,
}) => {
  const classNames = className ? `card ${className}` : `card`;
  return (
    <div className={classNames}>
      <div className='card-content'>{children}</div>
    </div>
  )
}
