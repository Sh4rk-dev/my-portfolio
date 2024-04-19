import { ComponentProps, forwardRef } from "react";

import { clsx } from "clsx";

interface FormProps extends ComponentProps<"form"> {
  children: React.ReactNode;
  className?: string;
}
interface FormLabelProps extends ComponentProps<"label"> {
  title: string;
  className?: string;
}

interface FormInputProps extends ComponentProps<"input"> {
  type: string;
  placeholder: string;
  className?: string;
}

interface FormTextareaProps extends ComponentProps<"textarea"> {
  placeholder?: string;
  className?: string;
}

function Form({ children, className, ...rest }: FormProps) {
  return (
    <form className={clsx("flex justify-start flex-col", className)} {...rest}>
      {children}
    </form>
  );
}

function Label({ title, className }: FormLabelProps) {
  return (
    <label className={clsx("text-white font-bold font-mono", className)}>
      {title}
    </label>
  );
}

const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, placeholder, type, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "h-10 w-[21.87rem] text-xs mt-1 p-3 mb-5 rounded-md text-color_primary font-plexMono focus-visible",

          className
        )}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

const Textarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, placeholder, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        id="about"
        name="about"
        rows={3}
        defaultValue={""}
        className={clsx(
          "h-32 mt-1 p-3 mb-5 rounded-md text-color_primary font-plexMono sm:text-sm sm:leading-6",
          className
        )}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

Form.Input = Input;
Form.Label = Label;
Form.Textarea = Textarea;

export { Form };
