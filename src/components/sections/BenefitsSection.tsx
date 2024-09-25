import React from "react";
import BenefitsGrid from "../BenefitsGrid";
import TopDots from "../TopDots";
import useAnimation from "@/hooks/useAnimation";
import Tagline from "../utils/Tagline";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Headline from "../utils/Headline";
import Image from "next/image";

export default function BenefitsSection() {
  return (
    <Section className="pt-0 bg-benefits-section">
      <Container>
        <BenefitsCard />
        <BackgroundPatterns />
      </Container>
    </Section>
  );
}

function BenefitsCard() {
  return (
    <div className="relative p-8 lg:p-12 bg-light rounded-xl shadow-[rgba(0,_0,_0,_0.1)_0px_60px_40px_-7px]">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-16">
        <div className="col-span-1 lg:col-span-2 w-full">
          <Tagline animated alignment="left">
            VOTRE RÉUSSITE EN LIGNE
          </Tagline>
          <Headline
            alignment="left"
            animated
            className="lg:text-4xl lg:leading-[1.3] max-w-[35ch]"
          >
            Renforcez Votre Entreprise avec un{" "}
            <span className="underline underline-offset-[6px] decoration-highlight ">
              Site Web Professionnel
            </span>
          </Headline>
        </div>
        <div className="lg:col-span-3">
          <BenefitsGrid />
        </div>
      </div>
    </div>
  );
}
function BackgroundPatterns() {
  return (
    <>
      <Image
        src="/patterns/benefits_pattern_bottom.svg"
        alt=""
        width={256}
        height={256}
        className="absolute bottom-0 left-0"
      />
      <Image
        src="/patterns/benefits_pattern_top.svg"
        alt=""
        width={256}
        height={256}
        className="absolute top-0 right-0"
      />
    </>
  );
}
