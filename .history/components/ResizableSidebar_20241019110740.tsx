// @/components/ResizableSidebar.tsx

import React, { useState, useRef, useEffect } from 'react';

interface ResizableSidebarProps {
  children: React.ReactNode;
  mainContent: React.ReactNode;
  minWidth?: number;
  maxWidth?: number;
  initialWidth?: number;
}

export const ResizableSidebar: React.FC<ResizableSidebarProps> = ({
  children,
  mainContent,
  minWidth = 200,
  maxWidth = 400,
  initialWidth = 250,
}) => {
  const [width, setWidth] = useState(initialWidth);
  const isResizing = useRef(false);

  const onMouseDown = (e: React.MouseEvent) => {
    isResizing.current = true;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isResizing.current) return;
    let newWidth = e.clientX;
    if (newWidth < minWidth) {
      newWidth = minWidth;
    } else if (newWidth > maxWidth) {
      newWidth = maxWidth;
    }
    setWidth(newWidth);
  };

  const onMouseUp = () => {
    isResizing.current = false;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className="flex h-full">
      <div style={{ width }} className="flex-shrink-0 h-full">
        {children}
      </div>
      <div
        onMouseDown={onMouseDown}
        className="w-1 cursor-col-resize bg-gray-300"
        style={{ userSelect: 'none' }}
      />
      <div className="flex-grow h-full">
        {mainContent}
      </div>
    </div>
  );
};
