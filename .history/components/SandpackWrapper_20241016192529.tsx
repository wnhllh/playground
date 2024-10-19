// @/components/SandpackWrapper.tsx
import React, { useEffect } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
  useActiveCode,
  SandpackThemeProvider
} from "@codesandbox/sandpack-react";
import { useTheme } from 'next-themes'; // 导入 useTheme
import { nord, githubLight } from "@codesandbox/sandpack-themes"; // 导入主题

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
    </SandpackLayout>
  );
};

export const SandpackWrapper = ({ code, isGenerating, id, selectedId }) => {
  const { theme } = useTheme(); // 获取当前主题
  const sandpackTheme = theme === 'dark' ? nord : githubLight; // 设置 Sandpack 的主题

  // 定义 Tailwind CSS 配置
  const tailwindConfig = `
    module.exports = {
      darkMode: 'class',
      content: ["./App.js"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
  `;

  // 定义 PostCSS 配置
  const postcssConfig = `
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    };
  `;

  // 定义全局的 CSS 文件，包含 Tailwind 的指令
  const indexCss = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  `;

  // 将主题以环境变量的形式传递给 Sandpack 内的代码
  const codeWithTheme = `
    const theme = '${theme}';

    ${code}
  `;

  return (
    <SandpackProvider
      key={`${code}-${theme}`} // 根据代码和主题变化重新渲染
      theme={sandpackTheme} // 应用主题
      customSetup={{
        dependencies: {
          "react": "^18.0.0",
          "react-dom": "^18.0.0",
          "autoprefixer": "^10.4.2",
          "postcss": "^8.4.6",
          "postcss-cli": "^9.1.0",
          "tailwindcss": "^3.0.23",
          // 其他依赖...
        },
        entry: "/App.js",
      }}
      files={{
        "/App.js": {
          code: codeWithTheme, // 传递带有主题的代码
          active: true,
        },
        "/tailwind.config.js": {
          code: tailwindConfig,
        },
        "/postcss.config.js": {
          code: postcssConfig,
        },
        "/index.css": {
          code: indexCss,
        },
        // 如果需要，可以添加 index.html
      }}
    >
      <SandpackThemeProvider theme={sandpackTheme}>
        <SandpackContent 
          code={codeWithTheme} 
          isGenerating={isGenerating} 
          id={id} 
          selectedId={selectedId} 
        />
      </SandpackThemeProvider>
    </SandpackProvider>
  );
};
