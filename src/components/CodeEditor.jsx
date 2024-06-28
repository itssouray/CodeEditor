import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import '../editor.css';

const CodeEditor = ({language}) => {
  const [code, setCode] = useState(`
  import React,{useState} from "react";

  const App = () => (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
  `);

  const updateTextAreaHeight = () => {
    const preElement = document.querySelector('.code-highlighter');
    const textarea = document.querySelector('.code-input');
    if (preElement && textarea) {
      textarea.style.height = `${preElement.clientHeight}px`;
    }
  };



  return (
    <div className="editor-container">
      <Highlight code={code} language={language} theme={themes.vsDark}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`code-highlighter ${className}`} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
        className="code-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onInput={updateTextAreaHeight} 
        placeholder='Type some code...'
      />
    </div>
  );
};

export default CodeEditor;
