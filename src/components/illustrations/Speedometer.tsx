import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Speedometer = () => {
  const gaugeRef = useRef(null);
  const needleRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    const gauge = gaugeRef.current;
    const needle = needleRef.current;
    const value = valueRef.current;

    gsap.set(needle, { transformOrigin: '50% 90%', rotation: -90 });

    const tl = gsap.timeline();

    tl.to(needle, {
      rotation: 90,
      duration: 2,
      ease: 'power2.inOut',
    });

    tl.to(gauge, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.inOut',
    }, 0);

    tl.to(value, {
      innerHTML: 100,
      duration: 2,
      ease: 'power2.inOut',
      roundProps: 'innerHTML',
    }, 0);

  }, []);

  return (
    <svg viewBox="0 0 200 150" width="200" height="120">
      <circle cx="100" cy="100" r="90" fill="none" stroke="#ccc" strokeWidth="10" strokeLinecap='butt' />
      
      <path d=" M86,227,A100,100,55,1,1,279,220" />

      
      <line
        ref={needleRef}
        x1="100"
        y1="100"
        x2="100"
        y2="20"
        stroke="#dc3545"
        strokeWidth="4"
      />
      
      <circle cx="100" cy="100" r="5" fill="#333" />
      
      <text x="28" y="140" fontFamily="Arial" fontSize="14" fill="#333">0</text>
      <text x="172" y="140" fontFamily="Arial" fontSize="14" fill="#333">100</text>
      <text
        ref={valueRef}
        x="100"
        y="85"
        fontFamily="Arial"
        fontSize="20"
        fill="#333"
        textAnchor="middle"
      >
        0
      </text>

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ff00" />
          <stop offset="50%" stopColor="#ffff00" />
          <stop offset="100%" stopColor="#ff0000" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Speedometer;