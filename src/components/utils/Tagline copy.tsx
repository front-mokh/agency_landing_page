import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Tagline({
  children,
  alignment = "center",
  animated = false,
}: {
  children: ReactNode;
  alignment?: "center" | "left";
  animated?: boolean;
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (animated && textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: "15" },
        {
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [animated]);

  return (
    <div ref={textRef} className="bg-light-highlight px-3 py-2 mb-2 rounded-md">
      <div className="flex gap-2 items-center">
        <span className="inline-block text-sm text-dark-secondary font-semibold font-heading uppercase tracking-wider">
          {children}
        </span>
      </div>
    </div>
  );
}
