import React from 'react';
import { pre } from '../prefixConfig';
import { UtilityProps } from '../components/ComponentTypes';
import '../styles/Utility.scss';

export const Utility: React.FC<UtilityProps> = ({
  children,
  className = '',
  display = '',
  padding = '',
  paddingTop = '',
  paddingRight = '',
  paddingBottom = '',
  paddingLeft = '',
  margin = '',
  marginTop = '',
  marginRight = '',
  marginBottom = '',
  marginLeft = '',
  width = '',
  height = '',
  color = '',
  overflow = '',
  overflowX = '',
  overflowY = '',
  hiddenMin = '',
  hiddenMax = '',
  backgroundColor = '',
  sreenReader,
}) => {
  const classNames = `
    ${className}
    ${display}
    ${sreenReader ? `${pre}sr-only` : ''}
    ${padding ? `${pre}pa-` + padding : ''}
    ${paddingTop ? `${pre}pt-` + paddingTop : ''}
    ${paddingRight ? `${pre}pr-` + paddingRight : ''}
    ${paddingBottom ? `${pre}pb-` + paddingBottom : ''}
    ${paddingLeft ? `${pre}pl-` + paddingLeft : ''}
    ${margin ? `${pre}ma-` + margin : ''}
    ${marginTop ? `${pre}mt-` + marginTop : ''}
    ${marginRight ? `${pre}mr-` + marginRight : ''}
    ${marginBottom ? `${pre}mb-` + marginBottom : ''}
    ${marginLeft ? `${pre}ml-` + marginLeft : ''}
    ${color ? `${pre}color-` + color : ''}
    ${width ? `${pre}width-` + width : ''}
    ${height ? `${pre}height-` + height : ''}
    ${overflow ? `${pre}overflow-` + overflow : ''}
    ${overflowX ? `${pre}overflow-x-` + overflowX : ''}
    ${overflowY ? `${pre}overflow-y-` + overflowY : ''}
    ${backgroundColor ? `${pre}bg-` + backgroundColor : ''}
    ${hiddenMin ? `${pre}hidden-` + hiddenMin + '-min' : ''}
    ${hiddenMax ? `${pre}hidden-` + hiddenMax + '-max' : ''}
  `.replace(/\s+/g, ' ').trim();
  return <div className={classNames}>{children}</div>;
};
