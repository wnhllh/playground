// @/components/wrapper.tsx
import React, { useState, useEffect, createContext } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import { MonitorPlay, Smartphone, Tablet, Code, Redo, Undo, Save, Upload, Eye, EyeOff } from 'lucide-react';
import { getOutputCode } from '@/lib/code-gen';
import { CodeView } from '@/components/code-view';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCodeGenerationContext } from '@/hooks/useCodeGenerationContext';


export const PreviewContext = createContext({
  isPreview: true,
  setIsPreview: (value: boolean) => {}
});

type WrapperProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Wrapper = ({ children, style = {} }: WrapperProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { query, actions, canUndo, canRedo } = useEditor((state, query) => ({
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const [wrapperWidth, setWrapperWidth] = useState('w-full');
  const [output, setOutput] = useState<string | null>();
  const [codeOpen, setCodeOpen] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);
  const [loadOpen, setLoadOpen] = useState(false);
  const [layoutName, setLayoutName] = useState('');
  const [savedLayouts, setSavedLayouts] = useState<string[]>([]);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    const layouts = Object.keys(localStorage).filter(key => key.startsWith('craftjs_layout_'));
    setSavedLayouts(layouts.map(key => key.replace('craftjs_layout_', '')));
  }, []);

  const { generatedCodes } = useCodeGenerationContext();

  const generateCode = () => {
    const nodes = query.getNodes();
    const { importString, output } = getOutputCode(nodes, generatedCodes);
    setOutput(`${importString}\n\n${output}`);
  };

  const handleIconClick = (newWidth: string) => {
    setWrapperWidth(newWidth);
  };

  const handleSave = () => {
    if (layoutName) {
      const json = query.serialize();
      localStorage.setItem(`craftjs_layout_${layoutName}`, JSON.stringify(json));
      setSavedLayouts([...savedLayouts, layoutName]);
      setLayoutName('');
      setSaveOpen(false);
    }
  };

  const handleLoad = (name: string) => {
    const json = localStorage.getItem(`craftjs_layout_${name}`);
    if (json) {
      actions.deserialize(JSON.parse(json));
      setLoadOpen(false);
    }
  };

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <PreviewContext.Provider value={{ isPreview, setIsPreview }}>
      <div className="w-full h-full flex justify-center" style={style}>
        <div className={`${wrapperWidth} flex flex-col h-full border rounded-sm bg-white shadow-lg`}>
          <div
            className="flex-1 bg-white rounded-b-lg mx-auto w-full h-full overflow-auto"
            ref={(ref) => {
              if (ref) {
                connect(drag(ref));
              }
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </PreviewContext.Provider>
  );
};

Wrapper.craft = {
  displayName: 'Wrapper',
  props: {
    className: 'w-full h-full',
  },
};
