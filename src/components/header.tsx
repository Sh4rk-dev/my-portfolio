import { LinkedinIcon, GithubIcon, InstagramIcon } from "lucide-react";

export function Header() {
  return (
    <nav className="w-full h-[70px] gap-[70px] justify-center items-center flex-row flex bg-color_primary rounded-b-lg">
      <a className="text-color_secundary font-medium cursor-pointer hover:text-white/90 ease-linear duration-300">
        Home
      </a>
      <a className="text-color_secundary font-medium cursor-pointer hover:text-white/90 ease-linear duration-300">
        Case Studies
      </a>
      <a className="text-color_secundary font-medium cursor-pointer hover:text-white/90 ease-linear duration-300">
        Testimonials
      </a>
      <a className="text-color_secundary font-medium cursor-pointer hover:text-white/90 ease-linear duration-300">
        Recent work
      </a>
      <a className="text-color_secundary font-medium cursor-pointer hover:text-white/90 ease-linear duration-300">
        Get In Touch
      </a>

      <div className=" flex gap-5">
        <LinkedinIcon
          className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
          size={20}
        />
        <GithubIcon
          className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
          size={20}
        />
        <InstagramIcon
          className="text-white/30 hover:text-white/70 cursor-pointer ease-linear duration-300"
          size={20}
        />
      </div>
    </nav>
  );
}
