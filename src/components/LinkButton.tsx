import { cn } from "@/lib/utils";
import { ctaVariants } from "@/lib/variants";
import Lenis from "@studio-freight/lenis/types";
import { VariantProps } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CallToActionProps = VariantProps<typeof ctaVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function LinkButton({
  href,
  children,
  className,
  ...props
}: CallToActionProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative group transition-all hover:scale-[1.01] font-heading flex gap-2 items-center justify-between w-full font-semibold  text-white uppercase rounded-sm bg-highlight px-4 py-3",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-0  group-hover:w-full transition-all duration-300 h-full bg-highlight-hover"></div>
      <span className="z-10">{children}</span>
      <Image
        src={"/icons/link.svg"}
        alt={""}
        width={18}
        height={18}
        className="transition-transform -rotate-90 group-hover:-rotate-45"
      />
    </Link>
  );
}
