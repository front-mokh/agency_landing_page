"use client";
import useAnimation from "@/hooks/useAnimation";
import useTextReveal from "@/hooks/useTextReveal";
import { HeadlineLevel, headlineStyle, headlineTag } from "@/lib/config";
import { cn } from "@/lib/utils";
import { headlineVariants } from "@/lib/variants";
import { VariantProps } from "class-variance-authority";
import React from "react";

type HeadlineProps = VariantProps<typeof headlineVariants> & {
  children: React.ReactNode;
  animated?: boolean;
  className?: string;
};

export default function Headline({
  children,
  animated = false,
  className,
  ...props
}: HeadlineProps) {
  const titleRef = useAnimation();
  const Tag = headlineTag[props.level as HeadlineLevel] ?? "h1";

  return (
    <Tag
      ref={animated ? titleRef : null}
      className={cn(headlineVariants({ ...props, className }))}
    >
      {children}
    </Tag>
  );
}
