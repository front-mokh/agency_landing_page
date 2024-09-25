import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Splitting from "splitting";

interface WordRevealOptions {
  stagger?: number;
  duration?: number;
  yOffset?: string;
}

const useTextReveal = (
  options: WordRevealOptions = {}
): React.RefObject<HTMLDivElement> => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const result = Splitting({ target: textRef.current, by: "chars" });

    const lines = result[0].words;

    const tl = gsap.timeline();

    tl.fromTo(
      lines!,
      {
        y: "200%",
        opacity: 0,
        ease: "power2.out",
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: options.stagger || 0.05,
        duration: options.duration || 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: true,
        },
      }
    );

    return () => {
      tl.pause();
    };
  }, [textRef, options.stagger, options.duration, options.yOffset]);

  return textRef;
};

export default useTextReveal;
