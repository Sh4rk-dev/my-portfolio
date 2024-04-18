import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ICarouselProps {
  title: string;
  imgURL?: string;
  avatar?: boolean;
  description: string;
  profession?: string;
}

export function CarouselItemContent({
  imgURL,
  title,
  profession,
  description,
  avatar,
}: ICarouselProps) {
  return (
    <div className=" flex flex-col w-[270px] h-96 rounded-lg border border-white/20 p-5">
      <div className="flex flex-col items-center">
        {avatar ? (
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src={imgURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <img src={imgURL} alt="error" />
        )}

        <nav className="flex flex-col items-center text-center mb-8 g-2">
          <span className="text-lg font-raleway text-white">{title}</span>
          <span className="text-sm font-raleway text-color_secondary">
            {profession}
          </span>
        </nav>
      </div>
      <p className="text-center text-white">" {description} "</p>
    </div>
  );
}
