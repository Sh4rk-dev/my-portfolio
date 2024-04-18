import { ComponentProps } from "react";

interface ITextLinkProps extends ComponentProps<"a"> {
  text: string;
  href: string;
}

export function TextLink({ text, href, ...rest }: ITextLinkProps) {
  return (
    <a
      href={href}
      className="text-color_secondary font-medium cursor-pointer hover:text-white/90 ease-linear duration-300"
      {...rest}
    >
      {text}
    </a>
  );
}
