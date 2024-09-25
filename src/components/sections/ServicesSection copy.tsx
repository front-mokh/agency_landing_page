"use client";
import { services } from "@/data/index";
import React, { useState } from "react";
import ServiceCard from "../ServiceCsard";
import useAnimation from "@/hooks/useAnimation";
import Tagline from "../utils/Tagline";
import Headline from "../utils/Headline";
import Section from "../utils/Section";
import Container from "../utils/Container";
import CallToAction from "../CallToAction";
import Image from "next/image";
import Speedometer from "../illustrations/Speedometer";

export default function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleClick(index: number) {
    setSelectedIndex(index);
  }

  return (
    <Section>
      <Container className="grid grid-cols-2 gap-12 ">
        <div>
          <Speedometer />
          <Tagline alignment="left">La Qualité, Notre Priorité</Tagline>
          <Headline alignment="left">
            Un site professionnel qui parle à vos clients
          </Headline>
          <p className="mt-8 text-lg text-dark-secondary leading-[1.6]">
            Nous comprenons les besoins de votre entreprise :{" "}
            <span className="font-medium text-dark-primary/90">
              une présence en ligne solide en Algérie
            </span>
            . Nous vous proposons des{" "}
            <span className="font-medium text-dark-primary/90">
              {" "}
              services web de qualité
            </span>
            , allant de la création de{" "}
            <span className="font-medium text-dark-primary/90">
              sites web professionnels
            </span>{" "}
            au référencement optimisé, pour donner à votre entreprise les
            meilleures chances de prospérer sur le web.
          </p>

          <CallToAction className="mt-6" variant="secondary" href="/services">
            Explorer nos services
          </CallToAction>
        </div>

        <div className="relative w-full h-full">
          {/* <ul className="p-0 list-none space-y-2">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                {...service}
                isOpen={selectedIndex === index}
                onClick={handleClick}
              />
            ))}
          </ul> */}

          <Image
            src={"/images/hero.svg"}
            alt={""}
            layout="fill"
            objectFit="contain"
          />
            {/* <p className="mt-8 text-lg text-dark-secondary leading-[1.6]">
          Nous comprenons les besoins de votre entreprise :{" "}
          <span className="font-medium text-dark-primary/90">
            une présence en ligne solide en Algérie
          </span>
          . Nous vous proposons des{" "}
          <span className="font-medium text-dark-primary/90">
            {" "}
            services web de qualité
          </span>
          , allant de la création de{" "}
          <span className="font-medium text-dark-primary/90">
            sites web professionnels
          </span>{" "}
          au référencement optimisé, pour donner à votre entreprise les
          meilleures chances de prospérer sur le web.
        </p> */}
        </div>
      </Container>
    </Section>
  );
}
