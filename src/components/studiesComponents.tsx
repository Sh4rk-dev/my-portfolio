import clsx from "clsx";

import { ComponentProps } from "react";

interface StudiesProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

interface StudiesTagProps extends ComponentProps<"p"> {
  tagName: string;
  className?: string;
}

interface StudiesTitleProps extends ComponentProps<"h1"> {
  title: string;
}

interface StudiesDescriptionProps extends ComponentProps<"p"> {
  description: string;
}

interface StudiesImageProps extends ComponentProps<"img"> {
  imgURL?: string;
}
function Studies({ children, className, ...rest }: StudiesProps) {
  return (
    <div className={clsx("", className)} {...rest}>
      {children}
    </div>
  );
}

function Tag({ tagName, className, ...rest }: StudiesTagProps) {
  return (
    <p
      className={clsx(
        "w-fit py-1 px-3 mb-2 mt-3 lg:mt-0 font-plexMono text-xs font-extrabold rounded-full",
        className
      )}
      {...rest}
    >
      {tagName}
    </p>
  );
}

function Title({ title, ...rest }: StudiesTitleProps) {
  return (
    <h1 className="font-raleway font-bold text-2xl mb-3" {...rest}>
      {title}
    </h1>
  );
}

function Description({ description, ...rest }: StudiesDescriptionProps) {
  return (
    <p className="font-plexMono text-color_secondary" {...rest}>
      {description}
    </p>
  );
}

function Image({ imgURL, className, ...rest }: StudiesImageProps) {
  return (
    <img
      className={clsx("rounded-lg", className)}
      src={imgURL}
      alt="foto do projeto"
      {...rest}
    />
  );
}

Studies.Tag = Tag;
Studies.Title = Title;
Studies.Image = Image;
Studies.Description = Description;

export { Studies };
