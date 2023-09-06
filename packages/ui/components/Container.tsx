import React from 'react';
import { pre, mpre } from '../prefixConfig';
import { ContainerProps } from '../components/ComponentTypes';
import '../styles/Container.scss';

export const Container: React.FC<ContainerProps> = ({
  children, className = '', fluid,
}) => {
  const classNames = className
    ? `${pre}container ${fluid && `${mpre}fluid` || ''} ${className}`
    : `${pre}container ${fluid && `${mpre}fluid` || ''}`;
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};
