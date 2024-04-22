import { useModal } from "@/context/useModal";
import { TextLink } from "./textLink";

import {
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
  DownloadIcon,
} from "lucide-react";

import { SelectModal } from "./selectModal";

interface IHeaderProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ setIsOpen }: IHeaderProps) {
  const { openModal } = useModal();

  function handleCloseModalOnClick() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

  return (
    <header className="flex flex-col gap-3 pb-10 justify-center items-center mt-2 bg-color_primary lg:flex lg:flex-row lg:mt-0 lg:pt-10 lg:justify-around lg:items-center lg:max-w-[69.37rem] lg:w-full lg:h-[70px] lg:rounded-b-lg">
      <>
        <TextLink
          onClick={handleCloseModalOnClick}
          text="Home"
          href="#01"
        />

        <TextLink
          onClick={handleCloseModalOnClick}
          text="Case Studies"
          href="#02"
        />

        <TextLink
          onClick={handleCloseModalOnClick}
          text="Testimonials"
          href="#03"
        />

        <TextLink
          onClick={handleCloseModalOnClick}
          text="Recent work"
          href="#04"
        />

        <TextLink
          onClick={handleCloseModalOnClick}
          text="Get In Touch"
          href="#05"
        />
      </>

      <div className="flex gap-5 -mb-5 pt-10 lg:mb-0 lg:pt-0 ">
        <a href="https://www.linkedin.com/in/renan-rapace/">
          <LinkedinIcon
            onClick={() => {}}
            className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
            size={24}
          />
        </a>

        <a href="https://github.com/Sh4rk-dev">
          <GithubIcon
            className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
            size={24}
          />
        </a>

        <a href="https://www.instagram.com/r.rapace_04/">
          <InstagramIcon
            className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
            size={24}
          />
        </a>

        <DownloadIcon
          onClick={() =>
            openModal({
              content: <SelectModal />,
              title: "Download",
              description: "Qual formato de visualização do currículo? ",
            })
          }
          className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
          size={24}
        />
      </div>
    </header>
  );
}
