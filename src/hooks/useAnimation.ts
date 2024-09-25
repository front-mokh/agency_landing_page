"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type AnimationOptions = {
  y?: number | string;
  duration?: number;
  delay?: number;
  ease?: gsap.EaseString;
};
export default function useAnimation(options: AnimationOptions = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element,
      { y: options.y || 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: options.duration || 1,
        delay: options.delay || 0.3,
        ease: options.ease || "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return ref;
}
