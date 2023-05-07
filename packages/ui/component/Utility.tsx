import React from 'react';
import { UtilityProps } from './Types';
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
    ${sreenReader ? 'sr-only' : ''}
    ${padding ? 'pa-' + padding : ''}
    ${paddingTop ? 'pt-' + paddingTop : ''}
    ${paddingRight ? 'pr-' + paddingRight : ''}
    ${paddingBottom ? 'pb-' + paddingBottom : ''}
    ${paddingLeft ? 'pl-' + paddingLeft : ''}
    ${margin ? 'ma-' + margin : ''}
    ${marginTop ? 'mt-' + marginTop : ''}
    ${marginRight ? 'mr-' + marginRight : ''}
    ${marginBottom ? 'mb-' + marginBottom : ''}
    ${marginLeft ? 'ml-' + marginLeft : ''}
    ${color ? 'color-' + color : ''}
    ${width ? 'width-' + width : ''}
    ${height ? 'height-' + height : ''}
    ${overflow ? 'overflow-' + overflow : ''}
    ${overflowX ? 'overflow-x-' + overflowX : ''}
    ${overflowY ? 'overflow-y-' + overflowY : ''}
    ${backgroundColor ? 'bg-' + backgroundColor : ''}
    ${hiddenMin ? 'hidden-' + hiddenMin + '-min' : ''}
    ${hiddenMax ? 'hidden-' + hiddenMax + '-max' : ''}
  `.replace(/\s+/g, ' ').trim();

  return <div className={classNames}>{children}</div>;
};
