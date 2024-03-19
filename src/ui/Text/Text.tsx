import { HTMLAttributes } from "react";

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
  body1: "font-text text-lg/6",
  body2: "font-text text-base/5",
  body3: "font-text text-sm",
  heading1: "font-heading text-5xl/[3.25rem]",
  heading2: "font-heading text-[2.5rem]/[2.75rem]",
  heading3: "font-heading text-[2rem]/9",
  heading4: "font-heading text-[1.75rem]/8",
  heading5: "font-heading text-2xl/7",
  heading6: "font-heading text-xl/6",
  lead: "font-text text-xl/6",
  small: "font-text text-xs",
  subtitle: "font-text text-xs",
  title1: "font-text text-base/5",
  title2: "font-text text-sm",
};

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  variant: TextVariantType;
};

export const Text = ({ variant, ...props }: TextProps) => {
  return <p className={STYLES_BY_VARIANT[variant]} {...props} />;
};
