import React from 'react';
import { pre, mpre } from '../prefixConfig';
import '../styles/Container.scss';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
};

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
