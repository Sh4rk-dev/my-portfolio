import { Button } from "./ui/button";

import { ChevronRight } from "lucide-react";

interface IRecentWorkProps {
  url: string;
  title: string;
  description: string;
}

export function RecentWork({ url, title, description }: IRecentWorkProps) {
  return (
    <div className="flex flex-col">
      <div className="flex md:max-w-[445px] md:h-80 overflow-hidden">
        <img className="rounded-lg object-cover " src={url} alt="Error" />
      </div>

      <div className="flex flex-col lg:text-balance items-start md:max-w-md">
        <h1 className="text-2xl text-black mt-10 font-raleway font-extrabold">
          {title}
        </h1>
        <span className="text-base text-color_secondary mt-5 font-mono leading-6">
          {description}
        </span>
      </div>

      <Button className="mt-7 md:w-full w-[10.75rem] gap-2 font-raleway text-white font-extrabold bg-color_third border border-lime-500 shadow-2xl shadow-lime-500 hover:bg-color_third/80">
        View case study
        <ChevronRight color="#fff" size={18} />
      </Button>
    </div>
  );
}
