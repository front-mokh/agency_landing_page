import { processSteps } from "@/data/index";
import useAnimation from "@/hooks/useAnimation";
import Image from "next/image";
import React from "react";
import Tagline from "../utils/Tagline";

export default function Process() {
  const titleRef = useAnimation();
  return (
    <section className="min-h-screen flex flex-col items-center py-36">
      <Tagline>DU CONCEPT AU SITE WEB</Tagline>
      <h1
        ref={titleRef}
        className="text-2xl md:text-4xl text-center font-semibold text-dark-primary"
      >
        Comment nous travaillons
      </h1>
      <div className="max-w-5xl px-4 md:px-0 mx-auto mt-1">
        <ul className="grid md:grid-cols-4 gap-4 md:gap-10">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              style={{ paddingTop: `${(processSteps.length - index) * 40}px` }}
              className="pt-0"
            >
              <div className="relative p-4 rounded-md bg-mid-tone bg-gradient overflow-hidden">
                <span className="absolute -top-6 -left-10 leading-none text-dark-secondary/10 text-[150px] font-semibold">
                  {step.number}
                </span>
                <Image
                  className="mx-auto mt-12"
                  src={step.iconPath}
                  alt={""}
                  width={40}
                  height={40}
                />
                <div className="mt-12">
                  <h2 className="text-center text-lg text-dark-primary font-medium">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm text-dark-secondary text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
