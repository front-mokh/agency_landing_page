"use client";
import FAQTable from "../FAQTable";
import BottomDots from "../BottomDots";
import Link from "next/link";
import Headline from "../utils/Headline";
import Tagline from "../utils/Tagline";
import Section from "../utils/Section";
import Container from "../utils/Container";
import { faq } from "@/data";

export default function FAQSection() {
  return (
    <Section>
      <Container>
        <Tagline animated>Nous sommes là pour vous</Tagline>
        <Headline animated className="font-semibold text-2xl md:text-4xl">
          Trouvez les réponses à vos questions
        </Headline>
        <FAQTable faq={faq} />
        <p className="mt-6 text-dark-secondary">
          Besoin de plus d&apos;aide ? Explorez notre guide complet des{" "}
          <Link href={"/faq"} className="font-semibold">
            questions fréquentes
          </Link>
        </p>
      </Container>
      <BottomDots />
    </Section>
  );
}
