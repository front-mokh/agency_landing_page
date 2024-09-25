import { cva } from "class-variance-authority";

export const ctaVariants = cva(
  "font-heading flex gap-2 items-center w-fit font-semibold  text-white uppercase rounded-sm",
  {
    variants: {
      variant: {
        primary: "bg-highlight",
        secondary: "bg-transparent border-[1.5px] border-white text-white",
      },
      size: {
        small: ["px-4 py-3 text-sm"],
        medium: ["px-4 py-3"],
        large: ["px-4 py-2 text-2xl"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export const sectionVariants = cva(
  "relative flex flex-col items-center justify-center min-h-screen w-full",
  {
    variants: {
      padding: {
        small: "py-16",
        medium: "py-24",
        large: "py-36",
      },
      background: {
        none: "text-dark-primary",
        light: "bg-mid-tone text-dark-primary",
        dark: "bg-inverted",
      },
    },
    defaultVariants: {
      padding: "medium",
      background: "none",
    },
  }
);

export const containerVariants = cva(
  "relative z-10 h-full w-full mx-auto flex flex-col items-center justify-center px-4 md:px-0",
  {
    variants: {
      size: {
        small: "max-w-5xl",
        medium: "max-w-6xl",
        large: "max-w-7xl",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export const headlineVariants = cva("uppercase font-heading inline-block overflow-hidden", {
  variants: {
    level: {
      1: "text-2xl md:text-4xl lg:text-4xl font-semibold lg:leading-[135%]",
      2: "text-xl md:text-2xl lg:text-2xl font-semibold leading-[130%]",
      3: "text-xl font-heading  lg:text-xl font-semibold leading-[130%]",
    },
    alignment: {
      left: "",
      center: "text-center",
    },
  },
  defaultVariants: {
    level: 1,
    alignment: "center",
  },
});
