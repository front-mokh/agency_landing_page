import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

export default function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: (string | React.JSX.Element)[];
}) {


    
  return (
    <li>
      <article
        className={clsx("p-4 rounded-md", { "bg-mid-tone": true })}
        itemScope
        itemType="https://schema.org/Service"
      >
        <header>
          <button
            className="flex w-full items-center justify-between text-left"
            onClick={() => {
              isOpen ? onClick(-1) : onClick(index);
            }}
            aria-expanded={isOpen}
            aria-controls={itemId}
          >
            <span
              className={twMerge(
                "text-base text-dark-primary md:text-lg font-heading"
              )}
              itemProp="name"
            >
              {title}
            </span>
            <span className="relative w-5 h-5" aria-hidden="true">
              <span
                className={twMerge(
                  "absolute top-1/2 left-0 w-5 h-[1.5px] bg-dark transform -translate-y-1/2"
                )}
              ></span>
              <span
                ref={minusRef}
                className={twMerge(
                  "absolute top-0 left-1/2 w-[1.5px] h-5 bg-dark transform -translate-x-1/2"
                )}
              ></span>
            </span>
          </button>
        </header>

        <section>
          <div
           
            className={twMerge(
              "border-l-2 pl-4 pr-6 border-mid-tone overflow-hidden transition-all duration-300 ease-in-out",
              isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            )}
            role="region"
            aria-labelledby={itemId}
            itemScope
            itemType="https://schema.org/Service"
          >
            <div
              itemProp="description"
              ref={descriptionRef}
              className="text-dark-secondary"
            >
              {description}
            </div>
          </div>
        </section>
      </article>
    </li>
  );
}
