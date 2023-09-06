import React from 'react';
import { pre, mpre } from '../prefixConfig';
import { ListProps } from '../components/ComponentTypes';
import '../styles/List.scss';

export const List: React.FC<ListProps> = ({
  className = '', items, type = '', position = 'inside'
}) => {
  const classNames = className ? `${pre}list ${mpre}${type} ${mpre}${position} ${className}` : `${pre}list ${mpre}${type} ${mpre}${position}`;
  return (
    <ul className={classNames}>
      {items.map((item) => (
        <li key={item.id}>{item.text || item.link}</li>
      ))}
    </ul>
  );
};
