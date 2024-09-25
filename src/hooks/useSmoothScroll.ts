import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.009 - Math.pow(2, -10 * t)), // Adjust this to control the smoothness
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
