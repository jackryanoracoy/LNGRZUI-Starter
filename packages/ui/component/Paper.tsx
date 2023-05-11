import React from 'react';
import { PaperProps, ChildrenProps } from './ComponentTypes';
import '../styles/Paper.scss';

export const Paper: React.FC<PaperProps> = ({
  children, className = '', header, sticky
}) => {
  const classNames = className ? `paper ${className}` : 'paper';
  const headerClassNames = sticky ? 'paper-header is_sticky' : 'paper-header';
  return (
    <div className={classNames}>
      <div className={headerClassNames}>{header}</div>
      <PaperContent>{children}</PaperContent>
    </div>
  )
}

const PaperContent: React.FC<ChildrenProps> = ({
  children
}) => {
  return <div className='paper-content'>{children}</div>
}
