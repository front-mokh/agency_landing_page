import ContactForm from "../ContactForm";
import CallToAction from "../CallToAction";
import Image from "next/image";
import TopDots from "../TopDots";
import BottomDots from "../BottomDots";
import Section from "../utils/Section";
import Headline from "../utils/Headline";
import RectDots from "../RectDots";
import Container from "../utils/Container";

export default function ContactBanner() {
  return (
    <Section className="min-h-0 p-0">
      <Container className="p-0">
        <Banner />
        <BackgroundPatterns />
      </Container>
    </Section>
  );
}

function Banner() {
  return (
    <div className="bg-inverted flex flex-col justify-center rounded-0 md:rounded-lg w-full md:min-h-96 p-6">
      <div className="z-10 flex flex-col items-center justify-center">
        <Headline  className="text-light-primary max-w-[35ch] font-semibold text-xl">
          PRÊT À COMMANCER VOTRE PRÉSENCE WEB PROFESSIONNELLE ?
        </Headline>
        <p className="mt-6 text-center max-w-[75ch] text-lg text-light-secondary">
          Obtenez votre devis gratuit dès maintenant et découvrez comment nos
          solutions peut transformer votre entreprise.
        </p>
        <CallToAction
          className="mt-6 bg-light-highlight text-dark-primary w-full md:w-60"
          href="/#contact"
        >
         Contactez-Nous
        </CallToAction>
      </div>
    </div>
  );
}

function BackgroundPatterns() {
  return (
    <>
      <Image
        src="/patterns/contact_banner_pattern.svg"
        alt=""
        width={256}
        height={256}
        className="absolute bottom-0 left-0 pointer-events-none select-none"
      />
      <Image
        src="/patterns/contact_banner_pattern.svg"
        alt=""
        width={256}
        height={256}
        className="rotate-180 absolute top-0 right-0 pointer-events-none select-none"
      />
    </>
  );
}
