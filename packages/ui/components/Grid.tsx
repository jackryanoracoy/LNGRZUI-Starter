import React from 'react';
import { pre, mpre } from '../prefixConfig';
import '../styles/Grid.scss';

type ColWidth = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

type GapWidth =  5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100;

type RowProps = {
  children: React.ReactNode;
  className?: string;
  gap?: GapWidth;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

type ColProps = {
  children: React.ReactNode;
  offset?: ColWidth;
  span?: ColWidth;
  xs?: ColWidth;
  sm?: ColWidth;
  md?: ColWidth;
  lg?: ColWidth;
  xl?: ColWidth;
  oxs?: ColWidth;
  osm?: ColWidth;
  omd?: ColWidth;
  olg?: ColWidth;
  oxl?: ColWidth;
};

export const Row: React.FC<RowProps> = ({
  children, className = '', align = 'flex-start', justify = 'flex-start', wrap = 'wrap', direction = 'row', gap = 0,
}) => {
  return (
    <div className={`${pre}flex ${mpre}${wrap} ${mpre}align-items-${align} ${mpre}justify-${justify} ${mpre}direction-${direction} ${pre}gap-${gap} ${className || ''}`}>
      {children}
    </div>
  );
};

export const Col: React.FC<ColProps> = ({
  children, span, offset = 0, xs = 24, sm = xs, md = sm, lg = md, xl = lg, oxs = 0, osm = oxs, omd = osm, olg = omd, oxl = olg
}) => {
  const responsiveItem = `${pre}flex-item-xs-${xs} ${pre}flex-item-sm-${sm} ${pre}flex-item-md-${md} ${pre}flex-item-lg-${lg} ${pre}flex-item-xl-${xl}`;
  const responsiveOffset = `${pre}offset-xs-${oxs} ${pre}offset-sm-${osm} ${pre}offset-md-${omd} ${pre}offset-lg-${olg} ${pre}offset-xl-${oxl}`;
  const classNames = span
    ? `${pre}flex-item-${span} ${pre}offset-${offset}`
    : `${responsiveItem} ${responsiveOffset}`
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};
