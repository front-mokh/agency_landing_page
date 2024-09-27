import React from "react";
import Image from "next/image";
import Tagline from "@/components/utils/Tagline";
import Headline from "@/components/utils/Headline";
import { Feature } from "@/lib/definitions";

export default function ServiceFeatures({
  title,
  tagline,
  features,
}: {
  title: string;
  tagline: string;
  features: Feature[];
}) {
  return (
    <div className="flex flex-col items-center">
      <Tagline animated>{tagline}</Tagline>
      <Headline level={3} className="lg:text-3xl" alignment="center" animated>
    {title}
      </Headline>
      <ul className="mt-14 grid grid-cols-3 gap-8 gap-y-12">
        {features?.map((feature, index) => (
          <li key={index}>
            <div>
              <Image src="/icons/shuttle.svg" alt="" width={42} height={42} />
              <p className="mt-6 text-lg font-semibold font-heading">
                {feature.title}
              </p>
              <p className="mt-2 text-dark-secondary">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
