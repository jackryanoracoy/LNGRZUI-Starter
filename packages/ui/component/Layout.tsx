import React from 'react';
import { CommonProps } from './ComponentTypes';
import '../styles/Global.scss';
import '../styles/Layout.scss';

export const Layout: React.FC<CommonProps> = ({ children }) => {
  const hasChildLayout = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === Layout
  );
  const className = hasChildLayout ? 'layout-container' : 'layout-content';
  return <div className={className}>{children}</div>;
};

export const Header: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `header ${className}` : 'header';
  return <header className={classNames}>{children}</header>;
};

export const Main: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `main ${className}` : 'main';
  return <main className={classNames}>{children}</main>;
};

export const Sider: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `aside ${className}` : 'aside';
  return <aside className={classNames}>{children}</aside>;
};

export const Footer: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `footer ${className}` : 'footer';
  return <footer className={classNames}>{children}</footer>;
};
