import { ClassNameValue } from "tailwind-merge";

export const sectionPadding = {
  small: "py-16",
  medium: "pt-24"  as ClassNameValue,
  large: "py-36",
};

export type SectionPaddingSize = keyof typeof sectionPadding;

export const sectionBackground = {
  none: "text-dark-primary",
  light: "bg-mid-tone text-dark-primary",
  dark: "bg-dark text-light-primary",
};

export type SectionBackgroundClass = keyof typeof sectionBackground;

export const containerSize = {
  small: "max-w-5xl",
  medium: "max-w-1xl border-2",
  large: "max-w-7xl",
};

export type ContainerSizeClass = keyof typeof containerSize;

export const headlineTag = {
  1: "h1",
  2: "h2",
  3: "h3",
} as const;

export type HeadlineLevel = keyof typeof headlineTag;

export const headlineStyle = {
  1: "text-2xl md:text-4xl lg:text-4xl font-bold leading-[135%] text-center text-red-300",
  2: "text-xl md:text-2xl lg:text-2xl font-semibold leading-[125%]",
  3: "md:text-lg lg:text-xl font-medium leading-[120%]",
};

export const buttonSize = {
  small: "px-8 py-2 bg-red-300  ",
  medium: "px-4 py-3 rounded-lg text-2xl bg-red-200",
  large: "p-4 text-xl",
};
export type ButtonSizeClass = keyof typeof buttonSize;
