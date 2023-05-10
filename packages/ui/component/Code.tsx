import React, { useEffect, useRef, memo } from 'react';
import { CodeProps } from './ComponentTypes';
import hljs from 'highlight.js';
import 'highlight.js/styles/lioshi.css';
import '../styles/Code.scss';

export const Code: React.FC<CodeProps> = memo(({ 
  children, className = '', language 
}) => {
  const classNames = className ? `code ${className}` : `code`;
  const codeEl = useRef(null);

  useEffect(() => {
    if (codeEl.current) {
      hljs.highlightElement(codeEl.current);
    }
  }, [language, children]);

  return (
    <div className={classNames}>
      <pre>
        <code ref={codeEl} className={language}>
          {children}
        </code>
      </pre>
    </div>
  );
});
