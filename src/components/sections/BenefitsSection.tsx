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
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="col-span-1 lg:col-span-2 w-full">
          <Tagline animated alignment="left">
            VOTRE RÉUSSITE NUMÉRIQUE
          </Tagline>
          <Headline
            alignment="left"
            animated
            className="lg:text-[2rem] lg:leading-[1.3] tracking-wide max-w-[35ch]"
          >
            RRENFORCEZ VOTRE ENTREPRISE AVEC NOS{" "}
            <span className="underline underline-offset-[6px] decoration-highlight ">
              SOLUTIONS LOGICIELLES PROFESSIONNELLES
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
