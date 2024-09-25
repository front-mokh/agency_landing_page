import useAnimation from "@/hooks/useAnimation";
import React from "react";
import Tagline from "../utils/Tagline";
import Headline from "../utils/Headline";
import Section from "../utils/Section";

export default function AboutSection() {
  return (
    <Section className="min-h-0">
      <Tagline animated>EXPERTISE LOCALE, STANDARDS MONDIAUX</Tagline>
      <Headline animated>WebPlus : Concepteurs Web Algériens</Headline>

      <p className="mt-10 text-dark-secondary text-lg md:text-xl leading-9 text-center max-w-[75ch]">
        Nous somme une équipe algérienne qui propulse votre entreprise dans
        l&apos;ère numérique. Nous créons des sites web modernes et performants
        pour renforcer votre présence en ligne, attirer des prospects et générer
        des leads qualifiés. Notre expertise en conception web transforme vos
        ambitions digitales en réalité.
      </p>
    </Section>
  );
}
