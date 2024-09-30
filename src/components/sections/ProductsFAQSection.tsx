"use client";
import FAQTable from "../FAQTable";
import BottomDots from "../BottomDots";
import Link from "next/link";
import Headline from "../utils/Headline";
import Tagline from "../utils/Tagline";
import Section from "../utils/Section";
import Container from "../utils/Container";
import { faq } from "@/data";

export default function ProductsFAQSection() {
  return (
    <Section>
      <Container>
        <Tagline animated>Nous sommes là pour vous</Tagline>
        <Headline animated className="font-semibold text-2xl md:text-4xl">
          plus d'informations sur nos produits
        </Headline>
        <FAQTable faq={faq} />
      </Container>
      <BottomDots />
    </Section>
  );
}
