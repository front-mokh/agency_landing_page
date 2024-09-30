"use client";
import LinkButton from "@/components/LinkButton";
import Container from "@/components/utils/Container";
import Headline from "@/components/utils/Headline";
import Section from "@/components/utils/Section";
import Tagline from "@/components/utils/Tagline";
import { products } from "@/data";
import Image from "next/image";
import React, { Ref } from "react";
import ContactBanner from "../sections/ContactBanner";
import FAQTable from "../FAQTable";
import ProductsFAQSection from "../sections/ProductsFAQSection";
import useStaggerAnimation from "@/hooks/useStaggerAnimation";
import useGSAPAnimation from "@/hooks/useGSAPAnimation";
import useAnimation from "@/hooks/useAnimation";

export default function ProductsPage() {
  const titleRef = useGSAPAnimation({
    from: { y: 15, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  const subtitleRef = useGSAPAnimation({
    from: { y: 15, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 0.3,
  });
  return (
    <Section className="py-0">
      <div className="flex flex-col justify-center w-full py-36 bg-gradient-to-t to-mid-tone from-light-background ">
        <Container className="mt-16 items-start">
          <div>
            <Headline ref={titleRef} className="opacity-0 max-w-[35ch]">
              Découvrez NOS SOLUTIONS LOGICIELLES
            </Headline>
            <p
              ref={subtitleRef as Ref<HTMLParagraphElement>}
              className="opacity-0 mt-6 text-xl max-w-[75ch] text-dark-secondary"
            >
              Découvrez comment nos produits peuvent transformer votre activité
              commerciale et booster votre productivité.
            </p>
          </div>
        </Container>
      </div>

      {products.map((product, index) => {
        return Product(product);
      })}
      <ContactBanner />
      <ProductsFAQSection />
    </Section>
  );

  function Product(product: {
    link: string;
    imagePath: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    tags: string[];
  }) {
    const elementRef = useAnimation();
    return (
      <Section>
        <Container>
          <div className="w-full flex flex-col items-center" ref={elementRef}>
            <Headline level={2} className="lg:text-3xl">
              {product.title}
            </Headline>
            <div className="relative aspect-[15/8] w-2/3">
              <Image
                src={"/mockups/desktop-mobile.svg"}
                alt={""}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-medium">{product.subtitle}</p>
              <p className="mt-4 max-w-[75ch] text-dark-secondary text-center">
                {product.description}
              </p>

              <LinkButton href={product.link} className="mt-6 w-fit gap-4">
                Détails complets du produit
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
}
