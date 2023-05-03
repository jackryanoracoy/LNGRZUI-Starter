import React from 'react';
import '../styles/Grid.scss';

type ColWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

type GapWidth =  5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100;

type GridProps = {
  children: React.ReactNode;
  className?: string;
  gap?: GapWidth;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

export const Row: React.FC<GridProps> = ({
  children, className, align = 'center', justify = 'flex-start', wrap = 'wrap', direction = 'row', gap = 0,
}) => {
  return (
    <div className={`flex is_${wrap} is_align-items-${align} is_justify-${justify} is_direction-${direction} gap-${gap} ${className || ''}`}>
      {children}
    </div>
  );
};

type ColProps = {
  children: React.ReactNode;
  className?: string;
  offset?: ColWidth;
  span?: ColWidth;
};

export const Col: React.FC<ColProps> = ({
  children, className, span = 'auto', offset = 0,
}) => {
  return (
    <div className={`flex-item-${span} offset-${offset} ${className || ''}`}>
      {children}
    </div>
  );
};
