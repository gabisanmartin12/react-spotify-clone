import { HTMLAttributes } from "react";

type TextVariant =
  | `heading${1 | 2 | 3 | 4 | 5 | 6}`
  | `title${1 | 2}`
  | "subtitle"
  | "lead"
  | `body${1 | 2 | 3}`
  | "small";

const STYLES_BY_VARIANT: Record<TextVariant, HTMLElement["className"]> = {
  body1: "",
  body2: "",
  body3: "",
  heading1: "",
  heading2: "",
  heading3: "",
  heading4: "",
  heading5: "",
  heading6: "",
  lead: "",
  small: "",
  subtitle: "",
  title1: "",
  title2: "",
};

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  variant: TextVariant;
};

export const Text = ({ variant, ...props }: TextProps) => {
  return <p className={STYLES_BY_VARIANT[variant]} {...props} />;
};
