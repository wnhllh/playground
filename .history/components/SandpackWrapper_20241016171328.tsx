// @/components/SandpackWrapper.tsx
import React, { useEffect } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
  useActiveCode
} from "@codesandbox/sandpack-react";

const SandpackContent = ({ code, isGenerating, id, selectedId }) => {
  const { sandpack } = useSandpack();
  const { code: activeCode, updateCode } = useActiveCode();

  useEffect(() => {
    if (code !== activeCode) {
      updateCode(code);
      sandpack.updateFile("/App.js", code);
    }
  }, [code, activeCode, updateCode, sandpack]);

  return (
    <SandpackLayout>
      <SandpackPreview style={{ height: '1000px' }} />
      {/* <SandpackCodeEditor 
        showLineNumbers
        style={{ height: '500px' }}
        readOnly={isGenerating && id === selectedId} 
      /> */}
    </SandpackLayout>
  );
};

export const SandpackWrapper = ({ code, isGenerating, id }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <SandpackProvider template="react" files={files}>
        <SandpackLayout style={{ width: '100%', height: '100%' }}>
          <SandpackCodeEditor showTabs={false} style={{ height: '100%' }} />
          <SandpackPreview style={{ height: '100%' }} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};
