import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';

type AnimationProps = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  delay?: number;
  duration?: number;
  ease?: string | gsap.EaseFunction;
  repeat?: number;
  yoyo?: boolean;
  onComplete?: () => void;
};

function useGSAPAnimation({
  from,
  to,
  delay = 0,
  duration = 0.7,
  ease = 'power3.out',
  repeat = 0,
  yoyo = false,
  onComplete,
}: AnimationProps): RefObject<HTMLElement> {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      from,
      {
        ...to,
        delay,
        duration,
        ease,
        repeat,
        yoyo,
        onComplete,
      }
    );
  }, [from, to, delay, duration, ease, repeat, yoyo, onComplete]);

  return elementRef;
}

export default useGSAPAnimation;