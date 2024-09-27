import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Headline from "../utils/Headline";
import Image from "next/image";
import { services } from "@/data";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function FeaturesSection() {
  return (
    <Section>
      <Container>
        <Headline className="max-w-[40ch]">Pourquoi Nos Sites Web Sont Parfaits pour Votre Entreprise</Headline>

        {services.map((feature, index) => (
          <Section
            key={index}
            padding="small"
            className="min-h-0 grid grid-cols-1 md:grid-cols-2 items-start gap-12"
          >
            <div
              className={twMerge(
                clsx("md:order-1", { "md:order-2": index % 2 === 1 })
              )}
            >
              {" "}
              <span className="mb-2 block text-6xl font-heading font-semibold text-highlight">
                0{index + 1}
              </span>
              <Headline level={2} alignment="left">
                {feature.title}
              </Headline>
              <p className="mt-6 leading-[1.7] text-dark-secondary">
                {feature.description}
              </p>
            </div>
            <div
              className={twMerge(
                clsx("md:order-2", "relative aspect-video", {
                  "md:order-1": index % 2 === 1,
                })
              )}
            >
              <Image
                src={feature.imagePath}
                alt={""}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Section>
        ))}
      </Container>
    </Section>
  );
}
