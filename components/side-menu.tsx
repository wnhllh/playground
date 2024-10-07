// @/components/side-menu.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { useEditor } from '@craftjs/core';
import { Components } from '@/components/node/components-map';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';

export interface SideMenuProps {
  componentsMap: Components[];
  pages: { id: string; componentStrings: string[] }[];
  currentPageIndex: number;
  onPageChange: (index: number) => void;
  chatHistory: { id: string; content: string; isUser: boolean }[];
  functionList: { id: string; content: string }[];
  setFunctionsList: (newFunctionList: { id: string; content: string }[], pageId: string) => void;
  currentPageId: string;
  prompt: string;
  setPrompt: (value: string) => void;
  handleGenerate: () => void;
}

export const SideMenu = ({
  componentsMap,
  pages,
  currentPageIndex,
  onPageChange,
  chatHistory,
  functionList,
  setFunctionsList,
  currentPageId,
  prompt,
  setPrompt,
  handleGenerate,
}: SideMenuProps) => {
  const { connectors } = useEditor();

  return (
    <div className="flex flex-col border-r h-full w-80">
      {/* 页面切换按钮 */}
      {/* <div className="p-2 border-b">
        <div className="flex flex-wrap gap-2">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => onPageChange(index)}
              className={cn(
                'p-2 border rounded',
                currentPageIndex === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              )}
            >
              Page {index + 1}
            </button>
          ))}
        </div>
      </div> */}

      {/* 聊天历史和功能列表 */}
      {/* <div className="flex-grow overflow-auto p-2">
        <div className="mb-4">
          <h3 className="font-bold mb-2">聊天历史</h3>
          {chatHistory.map((message) => (
            <div key={message.id} className={`mb-2 ${message.isUser ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded ${message.isUser ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {message.content}
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-bold mb-2">功能列表</h3>
          {functionList.map((func) => (
            <div key={func.id} className="mb-2 p-2 bg-gray-100 rounded">
              {func.content}
            </div>
          ))}
        </div>
      </div> */}

      {/* 聊天输入框 */}
      <div className="mt-auto p-4 border-t">
        <PlaceholdersAndVanishInput
          placeholders={['Input your message...', 'Create a new component...', 'Explore the code...']}
          onChange={(e) => setPrompt(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
          chatHistory={chatHistory}
          functionList={functionList}
          setFunctionsList={setFunctionsList}
          currentPageId={currentPageId}
        />
      </div>
    </div>
  );
};

// ListItem 组件保持不变

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, children, ...props }, ref) => {
  return (
    <li className="w-full p-2">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block w-full select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm w-full font-medium leading-none">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
