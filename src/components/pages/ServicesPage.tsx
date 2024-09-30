"use client";
import React from "react";
import Headline from "../utils/Headline";
import Section from "../utils/Section";
import Container from "../utils/Container";
import { faq, services } from "@/data";
import Image from "next/image";
import CallToAction from "../CallToAction";
import ContactBanner from "../sections/ContactBanner";
import FAQTable from "../FAQTable";
import Tagline from "../utils/Tagline";
import LinkButton from "../LinkButton";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Section padding={"large"}>
        <Headline>découvrez nos divers services</Headline>

        {services.map((service, index) => (
          <Section
            key={index}
            background={index % 2 === 0 ? "none" : "light"}
            className="overflow-hidden min-h-0"
          >
            <Container className="grid grid-cols-2 gap-16 items-start justify-start">
              <div className={index % 2 !== 0 ? "order-1" : "order-2"}>
                <Image
                  src={service.imagePath}
                  alt={""}
                  width={48}
                  height={48}
                />
                <Headline level={2} alignment="left" className="mt-4">
                  {service.title}
                </Headline>
                <p className="mt-6 leading-[1.6] max-w-[75ch] md:text-lg text-dark-secondary">
                  {service.description}
                </p>
                <LinkButton href={service.link} className="mt-4 justify-center gap-4 w-fit">
                  Découvrez les détails
                </LinkButton>
              </div>
              <div
                className={`w-full h-full border-2 ${
                  index % 2 === 0 ? "order-1" : "order-2"
                }`}
              ></div>
            </Container>
          </Section>
        ))}
        <div className="mt-24 w-full">
          <ContactBanner />
        </div>

        <div className="mt-24 flex flex-col items-center">
          <Tagline animated>Nous sommes là pour vous</Tagline>
          <Headline animated className="font-semibold text-2xl md:text-4xl">
            plus d'informations sur nos services
          </Headline>
          <FAQTable faq={faq} />
        </div>
      </Section>
    </main>
  );
}
