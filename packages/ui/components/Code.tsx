import React, { useEffect, useRef } from 'react';
import { pre } from '../prefixConfig';
import hljs from 'highlight.js';
import 'highlight.js/styles/lioshi.css';
import '../styles/Code.scss';

type CodeProps = {
  children?: React.ReactNode;
  className?: string;
  language?: string;
}

export const Code: React.FC<CodeProps> = ({
  children, className = '', language
}) => {
  const classNames = className ? `${pre}code ${className}` : `${pre}code`;
  const codeEl = useRef(null);

  useEffect(() => {
    if (codeEl.current) hljs.highlightElement(codeEl.current)
  }, [codeEl, language, children]);
  return (
    <div className={classNames}>
      <pre><code ref={codeEl} className={language}>{children}</code></pre>
    </div>
  );
};
