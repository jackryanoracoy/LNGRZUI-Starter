import React from 'react';
import { GridProps, ColProps } from './Types';
import '../styles/Grid.scss';

export const Row: React.FC<GridProps> = ({
  children, className = '', align = 'flex-start', justify = 'flex-start', wrap = 'wrap', direction = 'row', gap = 0,
}) => {
  return (
    <div className={`flex is_${wrap} is_align-items-${align} is_justify-${justify} is_direction-${direction} gap-${gap} ${className || ''}`}>
      {children}
    </div>
  );
};

export const Col: React.FC<ColProps> = ({
  children,
  span,
  offset = 0,
  xs = 24,
  sm = xs,
  md = sm,
  lg = md,
  xl = lg,
  oxs = 0,
  osm = oxs,
  omd = osm,
  olg = omd,
  oxl = olg,
}) => {
  const responsiveItem = `flex-item-xs-${xs} flex-item-sm-${sm} flex-item-md-${md} flex-item-lg-${lg} flex-item-lg-${xl}`;
  const responsiveOffset = `offset-xs-${oxs} offset-sm-${osm} offset-md-${omd} offset-lg-${olg} offset-xl-${oxl}`;
  const classNames = span
  ? `flex-item-${span} offset-${offset}`
  : `${responsiveItem} ${responsiveOffset}`
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};
