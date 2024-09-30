import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import Headline from "./utils/Headline";
import Image from "next/image";
import CallToAction from "./CallToAction";
import BottomDots from "./BottomDots";
import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  iconPath,
  index,
}: {
  title: string;
  description: (string | React.JSX.Element)[];
  iconPath: string;
  index: number;
}) {
  return (
    <li>
      <div className="relative h-full flex flex-col">
        <div className="relative w-16 aspect-square flex items-center justify-center">
          <Image
            className="pointer-events-none select-none"
            src={`/illustrations/${index + 1}.svg`}
            alt={""}
            layout="fill"
            objectFit="contain"
          />
          <Image
            className="relative z-10 pointer-events-none select-none"
            src={iconPath}
            alt={""}
            width={28}
            height={28}
          />
        </div>
        <Headline alignment="left" className="mt-6 font-semibold" level={3}>
          {title}
        </Headline>

        <p className="my-2 mb-8 text-dark-secondary leading-[1.7]">
          {description}
        </p>

        <Link href={"/services"} className="inline-flex gap-2 font-semibold font-heading uppercase text-dark-secondary">Offres et Tarifs<Image src={"/icons/link.svg"} alt={""} width={28} height={28}></Image></Link>
      </div>
    </li>
  );
}
