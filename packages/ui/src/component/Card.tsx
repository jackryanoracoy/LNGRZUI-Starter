import React from 'react';
import '../styles/Card.scss';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  children, className,
}) => {
  return (
    <div className={`card ${className || ''}`}>
      <div className='card-content'>{children}</div>
    </div>
  )
}
