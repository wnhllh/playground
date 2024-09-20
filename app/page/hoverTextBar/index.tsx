"use client";

import { useState } from "react";
import { Link } from "@nextui-org/react";

export default function HoverTextBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center mb-2 pt-1 ">
      <div className="relative text-xs w-3/5 h-5  overflow-hidden flex justify-center items-center">
        <div
          className={`absolute transition-transform duration-300 text-gray-200 ${
            isHovered ? "-translate-y-5 opacity-0" : "translate-y-0 opacity-100"
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          Build front-end with React, Tailwind &amp; Vite.
        </div>
        <div
          className={`absolute transition-transform duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          <Link
            isBlock
            showAnchorIcon
            href="#"
            color="foreground"
            className="text-xs text-gray-200"
          >
            Learn more about the beta
          </Link>
        </div>
        <div
          className="w-full h-full cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}
