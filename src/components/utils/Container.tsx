import { cn } from "@/lib/utils";
import { containerVariants } from "@/lib/variants";
import { VariantProps } from "class-variance-authority";

import React from "react";

type SectionProps = VariantProps<typeof containerVariants> & {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className, ...props }: SectionProps) {
  return (
    <div className={cn(containerVariants({ ...props, className }))}>
      {children}
    </div>
  );
}

export default React.forwardRef(Container);
