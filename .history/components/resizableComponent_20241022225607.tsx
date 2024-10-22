// @/components/resizableComponent.tsx
import React, { useRef, useEffect, useState, useContext } from 'react';
import { useNode } from '@craftjs/core';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { useCodeGenerationContext } from '@/hooks/useCodeGenerationContext';
import { PreviewContext } from '@/components/wrapper';

const GRID_SIZE = 40; // Size of each grid cell in pixels

export const ResizableComponent = ({id = '1', width = '100%', height = '100%', children }) => {
  const { connectors: { connect, drag }, actions: { setProp } } = useNode();
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const { selectedId, setSelectedId } = useCodeGenerationContext();
  const { isPreview } = useContext(PreviewContext);

  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        const { offsetWidth, offsetHeight } = containerRef.current.parentElement;
        setContainerSize({ width: offsetWidth, height: offsetHeight });
      };
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  const getPixelValue = (value, dimension) => {
    if (typeof value === 'string' && value.endsWith('%')) {
      return (parseInt(value) / 100) * containerSize[dimension];
    }
    return parseInt(value) || (dimension === 'width' ? 100 : 50); // Default sizes
  };

  const pixelWidth = getPixelValue(width, 'width');
  const pixelHeight = getPixelValue(height, 'height');

  const handleClick = () => {
    if (!isPreview) {
      setSelectedId(id);
    }
  };

  const snapToGrid = (size) => {
    return {
      width: Math.round(size.width / GRID_SIZE) * GRID_SIZE,
      height: Math.round(size.height / GRID_SIZE) * GRID_SIZE
    };
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    >
      <div
        ref={(ref) => connect(drag(ref)) as any}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            // 触发拖动操作
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          border: isPreview ? 'none' : selectedId === id ? '2px solid transparent' : '1px solid #ccc',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
        onClick={handleClick}
      >
        {typeof children === 'string' ? children : React.Children.map(children, (child) => child)}
      </div>
    </div>
  );
};

// ResizableSettings component remains the same
export const ResizableSettings = () => {
  // ... (unchanged)
};

ResizableComponent.craft = {
  props: {
    width: '100%',
    height: '100%',
  },
  related: {
    toolbar: ResizableSettings,
  },
};
