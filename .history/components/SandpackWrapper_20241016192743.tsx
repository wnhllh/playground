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
import { useTheme } from 'next-themes'; // 导入 useTheme

const SandpackContent = ({ code, isGenerating, id, selectedId, theme }) => {
  const { sandpack } = useSandpack();
  const { code: activeCode, updateCode } = useActiveCode();

  useEffect(() => {
    // 在代码中注入主题信息
    const codeWithTheme = `
      const theme = "${theme}";
      ${code}
    `;
    if (codeWithTheme !== activeCode) {
      updateCode(codeWithTheme);
      sandpack.updateFile("/App.js", codeWithTheme);
    }
  }, [code, activeCode, updateCode, sandpack, theme]);

  return (
    <SandpackLayout>
      <SandpackPreview style={{ height: '1000px' }} />
    </SandpackLayout>
  );
};

export const SandpackWrapper = ({ code, isGenerating, id, selectedId }) => {
  const { theme } = useTheme(); // 获取当前主题
  const sandpackTheme = theme === 'dark' ? 'dark' : 'light'; // 设置 Sandpack 的主题

  return (
    <SandpackProvider
      key={code}
      template="react"
      theme={sandpackTheme}
      files={{
        "/App.js": {
          code: code,
          active: true,
        },
        // 可以添加全局样式文件
        "/styles.css": {
          code: '', // 您可以在这里添加全局 CSS，如果需要
        },
      }}
      customSetup={{
        dependencies: {
          // 您的依赖
        }
      }}
    >
      <SandpackContent
        code={code}
        isGenerating={isGenerating}
        id={id}
        selectedId={selectedId}
        theme={theme} // 传递主题
      />
    </SandpackProvider>
  );
};
