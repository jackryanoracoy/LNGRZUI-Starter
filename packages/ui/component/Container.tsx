import React from 'react';
import { ContainerProps } from './ComponentTypes';
import '../styles/Container.scss';

export const Container: React.FC<ContainerProps> = ({
  children, className = '', fluid,
}) => {
  const classNames = className
    ? `container ${fluid && 'is_fluid' || ''} ${className}`
    : `container ${fluid && 'is_fluid' || ''}`;
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};
