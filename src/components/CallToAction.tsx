import { cn } from "@/lib/utils";
import { ctaVariants } from "@/lib/variants";
import Lenis from "@studio-freight/lenis/types";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

type CallToActionProps = VariantProps<typeof ctaVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CallToAction({
  href,
  children,
  className,
  ...props
}: CallToActionProps) {
  return (
    <Link
      href={href}
      className={cn(ctaVariants({ ...props, className }))}
    >
      {children}
    </Link>
  );
}