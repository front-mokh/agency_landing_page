import Image from "next/image";
import React from "react";

export default function RectDots() {
  return (
    <div className="relative w-32 aspect-[10/15]">
      <Image src={"/patterns/rect-dots.svg"} alt={""} layout="fill" objectFit="contain" />
    </div>
  );
}
