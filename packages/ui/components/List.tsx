import React from 'react';
import { pre, mpre } from '../prefixConfig';
import '../styles/List.scss';

type ListItem = {
  id: number;
  text?: string;
  link?: React.ReactNode;
}

type ListProps = {
  className?: string;
  type?: 'none' | 'disc' | 'circle' | 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman' | 'decimal' | 'decimal-leading-zero';
  position?: 'inside' | 'outside';
  items: ListItem[];
}

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
