import React from 'react';
import { pre } from '../prefixConfig';
import '../styles/Global.scss';
import '../styles/Layout.scss';

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout: React.FC<CommonProps> = ({ children }) => {
  const hasChildLayout = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === Layout
  );
  const className = hasChildLayout ? `${pre}layout-container` : `${pre}layout-content`;
  return <div className={className}>{children}</div>;
};

export const Header: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `${pre}header ${className}` : `${pre}header`;
  return <header className={classNames}>{children}</header>;
};

export const Main: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `${pre}main ${className}` : `${pre}main`;
  return <main className={classNames}>{children}</main>;
};

export const Sider: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `${pre}aside ${className}` : `${pre}aside`;
  return <aside className={classNames}>{children}</aside>;
};

export const Footer: React.FC<CommonProps> = ({ children, className = '' }) => {
  const classNames = className ? `${pre}footer ${className}` : `${pre}footer`;
  return <footer className={classNames}>{children}</footer>;
};
