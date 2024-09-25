"use client";
import { faqPageSections } from "@/data/index";
import React from "react";
import { FAQItem } from "@/components/FAQTable";
import ContactBanner from "@/components/sections/ContactBanner";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Headline from "@/components/utils/Headline";

export default function FAQPage() {
  useSmoothScroll();

  return (
    <main>
      <article className="relative px-4 pt-36 md:px-0 text-dark-primary">
        <Headline className="text-2xl md:text-4xl  font-semibold text-center">
          Questions Fréquemment Posées
        </Headline>

        <div className="mt-16 md:mt-36 space-y-12 max-w-5xl mx-auto">
          {faqPageSections.map((section, index) => (
            <section key={index}>
              <Headline
                level={2}
                className="text-xl md:text-3xl font-semibold"
              >
                {section.title}
              </Headline>

              <div key={index} className="mt-6 max-w-5xl mx-auto">
                <ul
                  className="list-none p-0 space-y-2"
                  itemScope
                  itemType="https://schema.org/FAQPage"
                >
                  {section.items.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      index={index}
                    />
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </article>
      <div className="px-4 md:px-0 py-16">
        <ContactBanner />
      </div>
    </main>
  );
}
