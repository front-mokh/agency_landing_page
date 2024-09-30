"use client";
import React, { useEffect, useRef } from "react";
import { faq } from "@/data/index";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useStaggerAnimation from "@/hooks/useStaggerAnimation";

gsap.registerPlugin(useGSAP);

export function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const itemId = `faq-item-${index}`;

  const minusRef = useRef(null);
  const answerContainerRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef(null);

  useEffect(() => {
    gsap.to(minusRef.current, {
      rotate: isOpen ? 90 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
    if (answerContainerRef.current) {
      if (isOpen) {
        gsap.set(answerContainerRef.current, { maxHeight: "none" });
        const height = answerContainerRef.current.offsetHeight;

        gsap
          .timeline()
          .fromTo(
            answerContainerRef.current,
            { maxHeight: 0 },
            { maxHeight: height, duration: 0.3, ease: "power2.out" }
          )
          .from(answerRef.current, {
            y: -5,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            delay: -0.2,
          });
      } else {
        gsap.to(answerContainerRef.current, {
          maxHeight: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  }, [answerContainerRef, isOpen]);
  return (
    <li
      className={clsx("p-4 rounded-sm bg-gradient bg-mid-tone")}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <h2>
        <button
          className="flex w-full items-center justify-between gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={itemId}
        >
          <span className={twMerge("text-left md:text-lg font-medium")}>
            {question}
          </span>
          <span className="relative w-5 h-5 flex-shrink-0" aria-hidden="true">
            <span
              className={twMerge(
                "absolute top-1/2 left-0 w-5 h-[1.5px] rounded-md bg-inverted transform -translate-y-1/2"
              )}
            ></span>
            <span
              ref={minusRef}
              className={twMerge(
                "absolute top-0 left-1/2 w-[1.5px] rounded-md h-5 bg-inverted  transform -translate-x-1/2"
              )}
            ></span>
          </span>
        </button>
      </h2>
      <div
        id={itemId}
        ref={answerContainerRef}
        className={twMerge(
          "border-l-2 pl-4 pr-6 border-mid-tone/25 overflow-hidden max-h-0"
        )}
        role="region"
        aria-labelledby={`${itemId}-question
         itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"`}
      >
        <p ref={answerRef} itemProp="text" className="mt-2 text-dark-secondary">
          {answer}
        </p>
      </div>
    </li>
  );
}

export default function FAQTable({
  faq,
}: {
  faq: { question: string; answer: string }[];
}) {
  const containerRef = useStaggerAnimation();
  return (
    <div className="mt-16 w-full max-w-5xl mx-auto">
      <ul
        ref={containerRef as React.Ref<HTMLUListElement>}
        className="list-none p-0 space-y-2"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faq.map((item, index) => (
          <div>
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}
