import { TextLink } from "./textLink";

import { LinkedinIcon, GithubIcon, InstagramIcon } from "lucide-react";

export function Header() {
  return (
    // lg:w-full lg:h-[70px] lg:px-32 lg:gap-[70px] lg:justify-center lg:items-center
    <header className="flex flex-col gap-3 pb-10 justify-center items-center mt-2 bg-color_primary lg:flex lg:flex-row lg:mt-0 lg:pt-10 lg:justify-around lg:items-center lg:max-w-[69.37rem] lg:w-full lg:h-[70px] lg:rounded-b-lg">
      <>
        <TextLink text="Home" href="" />

        <TextLink text="Case Studies" href="" />

        <TextLink text="Testimonials" href="" />

        <TextLink text="Recent work" href="" />

        <TextLink text="Get In Touch" href="" />
      </>
      <div className="flex gap-5 -mb-5 pt-10 lg:mb-0 lg:pt-0 ">
        <LinkedinIcon
          className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
          size={24}
        />
        <GithubIcon
          className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
          size={24}
        />
        <InstagramIcon
          className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
          size={24}
        />
      </div>
    </header>
  );
}
