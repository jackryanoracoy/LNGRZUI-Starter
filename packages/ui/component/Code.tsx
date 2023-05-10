import React, { useEffect, useRef } from 'react';
import { CodeProps } from './ComponentTypes';
import hljs from 'highlight.js';
import 'highlight.js/styles/lioshi.css';
import '../styles/Code.scss';

export const Code: React.FC<CodeProps> = ({
  children, className = '', language
}) => {
  const classNames = className ? `code ${className}` : `code`;
  const codeEl = useRef(null);

  useEffect(() => {
    if (codeEl.current) {
      hljs.highlightElement(codeEl.current);
    }
  }, [codeEl, language, children]);

  return (
    <div className={classNames}>
      <pre>
        <code ref={codeEl} className={language}>
          {children}
        </code>
      </pre>
    </div>
  )
}
