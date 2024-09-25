"use client";
import { benefits } from "@/data/index";
import clsx from "clsx";
import Image from "next/image";
import Headline from "./utils/Headline";
import useStaggerAnimation from "@/hooks/useStaggerAnimation";

export default function BenefitsGrid() {
  const containerRef = useStaggerAnimation();
  return (
    <div className=" min-w-full">
      <div
        ref={containerRef}
        className="grid grid-cols-1  md:grid-cols-2 gap-12"
      >
        {benefits.map((motivation, index) => (
          <div
            key={index}
            className={clsx("w-full flex flex-col gap-4")}
          >
            <Image
              className=""
              src={motivation.iconPath}
              alt=""
              width={42}
              height={42}
            />
            <div>
              <Headline level={2} className="lg:text-xl" alignment="left">
                {motivation.title}
              </Headline>
              <p className="mt-1 leading-[1.6] text-dark-secondary max-w-[50ch] md:max-w-[65ch]">
                {motivation.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
