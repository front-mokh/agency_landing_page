import React from "react";
import Image from "next/image";
import Tagline from "@/components/utils/Tagline";
import Headline from "@/components/utils/Headline";

export default function ServiceBenefits({
  title,
  tagline,
  benefits,
}: {
  title: string;
  tagline: string;
  benefits: string[];
}) {
  return (
    <div className="grid grid-cols-2 gap-16">
      <div>
        <Tagline animated alignment="left">
          {tagline}
        </Tagline>
        <Headline level={3} alignment="left" className="md:text-xl lg:text-3xl">
          {title}
        </Headline>
        <ul className="mt-6 space-y-2">
          {benefits?.map((benefits, index) => (
            <li key={index} className="flex gap-4 md:text-lg">
              <Image
                src="/icons/check-mark.svg"
                alt=""
                width={32}
                height={32}
              />
              {benefits}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full border-2"></div>
    </div>
  );
}
