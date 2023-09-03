import React from 'react';
import { pre } from '../prefixConfig';
import { LoadingProps } from './ComponentTypes';
import '../styles/Loading.scss';

export const Loading: React.FC<LoadingProps> = ({
  className = '', label = 'Loading...'
}) => {
  const classNames = className ? `${pre}loading ${className}` : `${pre}loading`;
  return (
    <div className={classNames}>
      <div className="ring"><div></div><div></div><div></div><div></div></div>
      <span>{label}</span>
    </div>
  );
};
