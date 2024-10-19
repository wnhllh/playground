// @/components/SandpackWrapper.tsx
import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

export const SandpackWrapper = ({ code, isGenerating, id, style = {} }) => {
  return (
    <div style={{ flexGrow: 1, ...style }}>
      <Sandpack
        template="react"
        files={{
          '/App.js': code,
        }}
        options={{
          showLineNumbers: true,
          showNavigator: true,
          editorHeight: '100%',
          editorWidthPercentage: 50,
        }}
      />
    </div>
  );
};
