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
    <div className="h-full flex flex-col">
      <div className="flex-grow overflow-auto">
        <PlaceholdersAndVanishInput
          placeholders={['Input your prompt...', '创建新组件...', '探索代码...']}
          onChange={(e) => setPrompt(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
          chatHistory={chatHistory}
          functionList={functionList}
          setFunctionsList={setFunctionsList}
          currentPageId={currentPageId}
          initialValue={prompt}
          autoSubmit={true}
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
