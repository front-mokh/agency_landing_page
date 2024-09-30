"use client";
import FAQTable from "@/components/FAQTable";
import ContactBanner from "@/components/sections/ContactBanner";
import ServiceBanner from "@/components/ServiceBanner";
import ServiceBenefits from "@/components/ServiceBenefits";
import ServiceFAQ from "@/components/ServiceFAQ";
import ServiceFeatures from "@/components/ServiceFeatures";
import Container from "@/components/utils/Container";
import Headline from "@/components/utils/Headline";
import Section from "@/components/utils/Section";
import Tagline from "@/components/utils/Tagline";
import { faq, landingPageService } from "@/data";
import { Service } from "@/lib/definitions";
import Image from "next/image";
import React from "react";

export default function Page() {
  return <ServicePage service={landingPageService} />;
}
export function ServicePage({ service }: { service: Service }) {
  return (
    <Section>
      <Container>
        <ServiceBanner
          title={service.title}
          description={service.description}
        />
        <div className="mt-24 space-y-36">
          <ServiceBenefits
            title={service.benefitsTitle}
            tagline={service.benefitsTagline}
            benefits={service.benefits}
          />
          <ServiceFeatures
            title={service.featuresTitle}
            tagline={service.featuresTagline}
            features={service.features}
          />
          <ContactBanner />
          <ServiceFAQ faq={service.faq}/>
        </div>
      </Container>
    </Section>
  );
}
