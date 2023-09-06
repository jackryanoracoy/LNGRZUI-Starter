import React from 'react';
import { pre, mpre } from '../prefixConfig';
import { RowProps, ColProps } from '../components/ComponentTypes';
import '../styles/Grid.scss';

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
