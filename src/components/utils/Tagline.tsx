import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import useAnimation from "@/hooks/useAnimation";

export default function Tagline({
  children,
  alignment = "center",
  animated = false,
}: {
  children: ReactNode;
  alignment?: "center" | "left";
  animated?: boolean;
}) {
  const ref = useAnimation({ delay: 0, duration: 0.8 });

  return (
    <div>
      <div ref={ref} className="flex gap-2 items-center mb-2">
        <span className="w-8 h-[2px] rounded-md bg-highlight"></span>
        <span className="overflow-hidden">
          <span className="inline-block text-highlight font-semibold font-heading uppercase tracking-wider text-sm md:text-base">
            {children}
          </span>
        </span>
        {alignment === "center" && (
          <span className="w-8 rounded-md h-[2px] bg-highlight"></span>
        )}
      </div>
    </div>
  );
}
