import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface IRecentWorkProps {
  url: string;
  title: string;
  description: string;
}

export function RecentWork({ url, title, description }: IRecentWorkProps) {
  return (
    <div className="flex w-[445px] flex-col">
      <div className="flex w-[445px] h-[300px] justify-center overflow-hidden">
        <img className="rounded-lg " src={url} alt="Error" />
      </div>

      <div className="flex flex-col items-start">
        <h1 className="text-2xl text-black mt-10 font-raleway font-extrabold">
          {title}
        </h1>
        <span className="text-base text-color_secundary mt-5 font-mono leading-6">
          {description}
        </span>
      </div>

      <Button className="mt-7 w-56 gap-2 font-raleway text-white font-extrabold bg-color_third border border-lime-500 shadow-2xl shadow-lime-500 hover:bg-color_third/80">
        View case study
        <ChevronRight color="#fff" size={18} />
      </Button>
    </div>
  );
}
