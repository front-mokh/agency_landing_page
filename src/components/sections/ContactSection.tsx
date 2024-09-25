import React from "react";
import Image from "next/image";
import Gradient from "../Gradient";
import ContactForm from "../ContactForm";
import CallToAction from "../CallToAction";
import { ctaList } from "@/data/index";
import ContactGradient from "../ContactGradient";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Headline from "../utils/Headline";

export default function ContactSection() {
  return (
    <Section id="contact" background="dark">
      <ContactGradient />
      <Container className="grid md:grid-cols-2 gap-12">
        <div>
          <Headline animated>Contactez-nous maintenant</Headline>
          <CATList />
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}

function CATList() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 md:mt-16">
      {ctaList.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          <Image src={"/icons/check.svg"} alt={""} width={24} height={24} />
          <p className="text-sm text-light-primary">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
