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
  body1: "text-lg/6",
  body2: "text-base/5",
  body3: "text-sm",
  heading1: "text-5xl/[3.25rem]",
  heading2: "text-[2.5rem]/[2.75rem]",
  heading3: "text-[2rem]/9",
  heading4: "text-[1.75rem]/8",
  heading5: "text-2xl/7",
  heading6: "text-xl/6",
  lead: "text-xl/6",
  small: "text-xs",
  subtitle: "text-xs",
  title1: "text-base/5",
  title2: "text-sm",
};

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  variant: TextVariantType;
};

export const Text = ({ variant, ...props }: TextProps) => {
  return <p className={STYLES_BY_VARIANT[variant]} {...props} />;
};
