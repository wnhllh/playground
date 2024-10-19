import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { CodeView } from "@/components/code-view";
import { useEditor } from "@craftjs/core";
import { useState } from "react";
import { getOutputCode } from "@/lib/code-gen";

export const Viewport = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      {children}
    </div>
  );
};
