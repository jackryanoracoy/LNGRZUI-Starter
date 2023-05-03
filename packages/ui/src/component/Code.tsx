import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/agate.css';
import '../styles/Code.scss';

type CodeProps = {
  children: React.ReactNode;
  className?: string;
};

export const Code: React.FC<CodeProps> = ({
  children, className,
}) => {
  const classNames = className ? `code ${className}` : `code`;
  return (
    <div className={classNames}>
      <pre className='code-content'>
        <code ref={(node) => {hljs.highlightBlock(node as HTMLElement)}}>
          {children}
        </code>
      </pre>
    </div>
  )
}
