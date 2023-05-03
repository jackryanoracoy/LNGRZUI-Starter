import React from 'react';
import '../styles/Global.scss';
import '../styles/Layout.scss';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export const Header: React.FC<LayoutProps> = ({ children, className }) => {
  const classNames = className ? `header ${className}` : `header`;
  return <header className={classNames}>{children}</header>;
};

export const Main: React.FC<LayoutProps> = ({ children, className }) => {
  const classNames = className ? `main ${className}` : `main`;
  return <main className={classNames}>{children}</main>;
};

export const Footer: React.FC<LayoutProps> = ({ children, className }) => {
  const classNames = className ? `footer ${className}` : `footer`;
  return <footer className={classNames}>{children}</footer>;
};

