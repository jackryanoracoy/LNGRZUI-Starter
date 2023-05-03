import React from 'react';
import '../styles/Container.scss';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  children, className, fluid,
}) => {
  return (
    <div className={`container ${fluid && 'is_fluid' || ''} ${className || ''}`}>
      {children}
    </div>
  );
};
