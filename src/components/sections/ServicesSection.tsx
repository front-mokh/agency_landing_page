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
import { services } from "@/data";
import useStaggerAnimation from "@/hooks/useStaggerAnimation";
import Link from "next/link";
import TopDots from "../TopDots";

gsap.registerPlugin(ScrollTrigger);

function ServiceCard({
  service,
}: {
  service: {
    imagePath: string;
    link: string;
    title: string;
    description: string;
  };
}) {
  return (
    <Link
      href={service.link}
      className={twMerge(
        clsx(
          "group relative block bg-gradient-to-br from-mid-tone via-mid-tone/50 to-mid-tone/90 rounded-xl p-6 overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_3px_4px_rgb(0,0,0,0.05)]"
        )
      )}
    >
      <Image
        src={service.imagePath}
        alt=""
        width={42}
        height={42}
        className="transition-all duration-300 group-hover:scale-[1.2] pointer-events-none select-none"
      />
      <Headline level={2} alignment="left" className="mt-4 font-bold">
        {service.title}
      </Headline>
      <p className="mt-4 leading-[1.8] text-dark-secondary font-medium">
        {service.description}
      </p>

      <Image
        src="/patterns/benefits_pattern_bottom.svg"
        alt=""
        width={256}
        height={256}
        className="absolute bottom-0 -left-14 transition-all duration-300 group-hover:left-0 pointer-events-none select-none"
      />
    </Link>
  );
}

function ServicesSection() {
  const containerRef = useStaggerAnimation();
  return (
    <Section>
      <TopDots/>
      <Container className="">
        <Tagline animated>couvre tous vos besoins</Tagline>
        <Headline animated className="max-w-[35ch]">
          découvrez nos divers services
        </Headline>
        <div
          ref={containerRef as React.Ref<HTMLDivElement>}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ServicesSection;
