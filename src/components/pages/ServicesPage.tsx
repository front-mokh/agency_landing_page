import React from "react";
import Headline from "../utils/Headline";
import Section from "../utils/Section";
import Container from "../utils/Container";
import { services } from "@/data";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Section>
        <Headline>Nos Services</Headline>

        {services.map((service, index) => (
          <Section key={index}>
            <Container className="items-start justify-start">
              <Headline level={2} alignment="left">
                {index + 1}. {service.title}
              </Headline>
              <div className="gap-10">
                <div className="col-span-2">
                  <p className="mt-6 leading-[1.6] max-w-[75ch] text-dark-secondary">
                    {service.longDescription}
                  </p>
                  <div className="mt-6">
                    <Headline level={3} alignment="left">
                      Pourquoi vous en avez besoin :
                    </Headline>
                    <ul className="mt-2 space-y-1">
                      {service.motivations?.map((motivation, index) => (
                        <li key={index}>{motivation}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-24">
                    <Headline level={3} className="lg:text-3xl">
                      Ce que vous obtiendrez
                    </Headline>
                    <ul className="mt-14 grid grid-cols-3 gap-8 gap-y-12">
                      {service.features?.map((feature, index) => (
                        <li key={index}>
                          <div>
                            <Image
                              src="icons/shuttle.svg"
                              alt=""
                              width={42}
                              height={42}
                            />
                            <p className="mt-6 text-lg font-semibold font-heading">
                              {feature.title}
                            </p>
                            <p className="mt-2 text-dark-secondary">
                              {feature.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div></div>
              </div>
            </Container>
          </Section>
        ))}
      </Section>
    </main>
  );
}
