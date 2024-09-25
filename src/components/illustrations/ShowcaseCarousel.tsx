import React, { useEffect, useRef } from "react";
import Image from "next/image";

const AnimatedColumn = ({ images, speed }) => {
  const columnRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let offset = 0;
    const column = columnRef.current;
    const content = contentRef.current;

    const animate = () => {
      offset -= speed;
      if (offset <= -content.offsetHeight / 2) {
        offset = 0;
      }
      content.style.transform = `translateY(${offset}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div ref={columnRef} className="overflow-hidden h-screen relative">
      <div ref={contentRef} className="will-change-transform ">
        {images.concat(images).map((src, index) => (
          <div key={index} className="w-full overflow-hidden">
            <Image
            className="hover:scale-110  transition-all duration-300"
              src={src} 
              alt=""
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedBoxes = () => {
  const column1Images = [
    "/showcase/1.svg",
    "/showcase/2.svg",
    "/showcase/3.svg",
  ];
  const column2Images = [
    "/showcase/4.svg",
    "/showcase/5.svg",
    "/showcase/6.svg",
    "/showcase/7.svg",
    "/showcase/8.svg",
  ];
  const column3Images = [
    "/showcase/9.svg",
    "/showcase/7.svg",
    "/showcase/3.svg",
  ];

  return (
    <div className="mt-24 grid grid-cols-3 w-full relative max-w-5xl mx-auto rounded-xl border-[1.5px] border-white/80 overflow-hidden aspect-video">
      {/* <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-inverted via-inverted/20 to-inverted/0 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-inverted via-inverted/20  to-inverted/0 z-10" /> */}
      <AnimatedColumn images={column1Images} speed={0.75} />
      <AnimatedColumn images={column2Images} speed={0.5} />
      <AnimatedColumn images={column3Images} speed={1} />
    </div>
  );
};

export default AnimatedBoxes;
