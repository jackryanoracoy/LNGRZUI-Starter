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
  return (
    <header className={`header ${className || ''}`}>
      <div className='header-content'>{children}</div>
    </header>
  )
};

export const Main: React.FC<LayoutProps> = ({ children, className }) => {
  return <main className={`main ${className || ''}`}>{children}</main>;
};

export const Footer: React.FC<LayoutProps> = ({ children, className }) => {
  return <footer className={`footer ${className || ''}`}>{children}</footer>;
};

