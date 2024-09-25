import { cn } from "@/lib/utils";
import { sectionVariants } from "@/lib/variants";
import { VariantProps } from "class-variance-authority";
import React, { forwardRef, ReactNode } from "react";

type SectionProps = VariantProps<typeof sectionVariants> & {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn(sectionVariants({ ...props, className }))}>
      {children}
    </section>
  );
}

export default forwardRef(Section);
