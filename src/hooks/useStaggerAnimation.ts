"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useStaggerAnimation(
  staggerDelay = 0.1,
  initialDelay = 0.3
) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const elements = container ? container.children : null;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      elements,
      { y: 15, scale: 1.04 },
      {
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: staggerDelay,
        delay: initialDelay,
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [staggerDelay, initialDelay]);

  return containerRef;
}
