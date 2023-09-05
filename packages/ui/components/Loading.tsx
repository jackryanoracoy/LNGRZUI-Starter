import React from 'react';
import { pre } from '../prefixConfig';
import { LoadingProps } from './ComponentTypes';
import '../styles/Loading.scss';

export const Loading: React.FC<LoadingProps> = ({
  className = '', type = 'ring', label = ''
}) => {
  const classNames = className ? `${pre}loading ${className}` : `${pre}loading`;
  return (
    <div className={classNames}>
      <div className={pre + type}><div></div><div></div><div></div><div></div></div>
      {label ? <span>{label}</span> : ''}
    </div>
  );
};
