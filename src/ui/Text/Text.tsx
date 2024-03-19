import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextVariant = [
  "body1",
  "body2",
  "body3",
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "heading6",
  "lead",
  "small",
  "subtitle",
  "title1",
  "title2",
] as const;

type TextVariantType = (typeof TextVariant)[number];

const STYLES_BY_VARIANT: Record<TextVariantType, string> = {
  body1: "font-text text-lg/6 -tracking-[.028em]",
  body2: "font-text text-base/5 -tracking-[.02em]",
  body3: "font-text text-sm -tracking-[0.01em]",
  heading1: "font-heading text-5xl/[3.25rem]",
  heading2: "font-heading text-[2.5rem]/[2.75rem]",
  heading3: "font-heading text-[2rem]/9",
  heading4: "font-heading text-[1.75rem]/8",
  heading5: "font-heading text-2xl/7",
  heading6: "font-heading text-xl/6",
  lead: "font-text text-xl/6 -tracking-[.02em]",
  small: "font-text text-xs -tracking-[.015em]",
  subtitle: "font-text font-bold text-xs",
  title1: "font-text font-bold text-base/5 -tracking-[.02em]",
  title2: "font-text font-bold text-sm -tracking-[.01em]",
};

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  /** This is a description */
  variant: TextVariantType;
};

export const Text = ({ className, variant, ...props }: TextProps) => {
  return (
    <p className={twMerge(STYLES_BY_VARIANT[variant], className)} {...props} />
  );
};
