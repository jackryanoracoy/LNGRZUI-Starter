import React from 'react';
import { pre, mpre } from '../prefixConfig';
import { PaperProps, ChildrenProps } from './ComponentTypes';
import '../styles/Paper.scss';

export const Paper: React.FC<PaperProps> = ({
  children, className = '', header, sticky
}) => {
  const classNames = className ? `${pre}paper ${className}` : `${pre}paper`;
  const headerClassNames = sticky ? `${pre}paper-header ${mpre}sticky` : `${pre}paper-header`;
  return (
    <div className={classNames}>
      {header ? <div className={headerClassNames}>{header}</div> : ''}
      <PaperContent>{children}</PaperContent>
    </div>
  )
}

const PaperContent: React.FC<ChildrenProps> = ({
  children
}) => {
  return <div className={`${pre}paper-content`}>{children}</div>
}
