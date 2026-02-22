"use client";

import { useState } from "react";
import { NAV_ITEMS, G } from "./constants";

type RightNavProps = {
  active: string;
  onGoTo: (id: string) => void;
};

export default function RightNav({ active, onGoTo }: RightNavProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-14 shrink-0 flex items-center justify-center mr-6 overflow-visible">
      <div className="right-nav-pill flex flex-col items-center justify-evenly min-h-[520px] bg-[rgba(30,30,30,0.7)] backdrop-blur-xl border border-[#c4c4c4] rounded-[28px] py-4 px-1.5 overflow-visible">
        {NAV_ITEMS.map(({ id, label, Icon }) => {
          const isActive = active === id;
          const showTooltip = hoveredId === id;
          return (
            <div
              key={id}
              className="relative flex items-center justify-center right-nav-item"
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {showTooltip && (
                <span className="right-nav-tooltip absolute right-full mr-2 py-1 px-2 bg-[rgba(30,30,30,0.95)] border border-[#c4c4c4] rounded-md text-[11px] text-[#ddd] whitespace-nowrap pointer-events-none z-[100]">
                  {label}
                </span>
              )}
              <button
                type="button"
                onClick={() => onGoTo(id)}
                title={label}
                className="w-8 h-8 rounded-full border border-[#c4c4c4] flex items-center justify-center cursor-pointer transition-all duration-200 [&>svg]:w-4 [&>svg]:h-4"
                style={{
                  background: isActive ? "rgba(57, 255, 126, 0.15)" : "transparent",
                  color: isActive ? G : "#ddd",
                }}
              >
                <Icon />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
