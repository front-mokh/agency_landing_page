import React from "react";
import Image from "next/image";
import Headline from "./utils/Headline";

export default function ServiceBanner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-inverted flex flex-col items-center justify-center w-full h-64">
      <Image
        src={"/patterns/grid.svg"}
        alt=""
        layout="fill"
        objectFit="cover"
      />

      <Headline className="z-10 text-light-primary">{title}</Headline>
      <p className="z-10 max-w-[50ch] text-center mt-6 md:text-xl text-light-secondary">
        {description}
      </p>
    </div>
  );
}
