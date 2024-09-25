import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Headline from "../utils/Headline";
import { servicesPricing } from "@/data/pricing";
import CallToAction from "../CallToAction";
import Image from "next/image";
import BottomDots from "../BottomDots";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function PlanCard({
  title,
  price,
  description,
  note,
  features,
  recommended,
}: {
  title: string;
  price: string;
  description: string;
  note: string;
  features: string[];
  recommended?: boolean;
}) {
  return (
    <div
      className={twMerge(
        clsx(
          "relative px-4 pt-6 pb-4 flex flex-col rounded-md bg-mid-tone",
          "border-[1.5px] border-black/5",

          { "border-[1.5px] border-highlight": recommended }
        )
      )}
    >
      {recommended && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 p-2 bg-highlight rounded-tr-sm  rounded-tl-sm text-sm font-semibold font-heading uppercase">
          recommandée
        </div>
      )}
      <Headline level={3}>{title}</Headline>
      <p className="mt-6 text-dark-secondary/70 text-xs text-center uppercase">
        à partir de
      </p>
      <div className="mt-1" itemScope itemType="http://schema.org/Offer">
        <p className="text-highlight font-semibold text-2xl text-center font-heading">
          <data value="1500.00" itemProp="price">
            {price}
            <span className="text-dark-secondary/65 text-base"> DA</span>
          </data>
          <meta itemProp="priceCurrency" content="EUR" />
        </p>
      </div>
      <p className="mt-6 text-center text-dark-secondary text-base">
        {description}
      </p>

      <div className="my-4  mx-auto w-28 h-[2px] bg-dark/10"></div>

      <ul className="space-y-2 my-6">
        {features.map((feature, index) => (
          <li key={index} className="flex ">
            <div className="flex-shrink-0 w-6 h-6 mr-2">
              <Image src="/icons/check.png" alt="" width={24} height={24} />
            </div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <p className="text-center text-sm text-dark-secondary">{note}</p>
        <div className="my-4  mx-auto w-28 h-[2px] bg-dark/10"></div>
        <CallToAction size={"small"} href="" className="w-full text-center">
          Commencez maintenant
        </CallToAction>
      </div>
    </div>
  );
}
export default function PricingPage() {
  return (
    <main className="overflow-hidden">
      <Section>
        <div>
          <Headline>Nos Tarifs</Headline>
        </div>
        {servicesPricing.map((service, index) => (
          <Section padding="small" key={index} className="w-full">
            <Container size="small">
              <Headline level={2}>{service.title}</Headline>
              <p>{service.description}</p>
              <div className="mt-16 grid grid-cols-3 gap-4 w-full">
                {service.plans.map((plan) => (
                  <PlanCard key={plan.title} {...plan} />
                ))}
              </div>
            </Container>
          </Section>
        ))}
      </Section>
    </main>
  );
}
