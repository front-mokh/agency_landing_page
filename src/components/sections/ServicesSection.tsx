"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Tagline from "../utils/Tagline";
import Headline from "../utils/Headline";
import Section from "../utils/Section";
import Container from "../utils/Container";
import { features } from "@/data";
import useStaggerAnimation from "@/hooks/useStaggerAnimation";

gsap.registerPlugin(ScrollTrigger);

function FeatureCard({
  feature,
}: {
  feature: { imagePath: string; title: string; description: string };
}) {
  return (
    <div
      className={twMerge(
        clsx(
          "relative bg-gradient-to-br from-mid-tone via-mid-tone/50 to-mid-tone/90 rounded-xl p-6 overflow-hidden transition-all duration-300"
        )
      )}
    >
      <Image src={feature.imagePath} alt="" width={42} height={42} />
      <Headline level={2} alignment="left" className="mt-4 font-bold">
        {feature.title}
      </Headline>
      <p className="mt-4 leading-[1.8] text-dark-secondary font-medium">
        {feature.description}
      </p>

      <Image
        src="/patterns/benefits_pattern_bottom.svg"
        alt=""
        width={256}
        height={256}
        className="absolute bottom-0 left-0"
      />
      {/* <Image
        className="absolute opacity-10 z-10 -right-10 top-1/2"
        src={feature.imagePath}
        alt=""
        width={200}
        height={200}
      /> */}
    </div>
  );
}

function ServicesSection() {
  const containerRef = useStaggerAnimation();
  return (
    <Section>
      <Container className="">
        <Tagline animated>La Qualité, Notre Priorité</Tagline>
        <Headline animated className="max-w-[35ch]">
          Un site professionnel qui parle à vos clients
        </Headline>
        <div
          ref={containerRef}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ServicesSection;
