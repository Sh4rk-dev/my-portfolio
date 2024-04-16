import { ComponentProps } from "react";

import { clsx } from "clsx";

interface FormProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

interface FormInputProps extends ComponentProps<"input"> {
  type: string;
  placeholder: string;
  className: string;
}

interface FormLabelProps extends ComponentProps<"label"> {
  title: string;
}

function Form({ children, ...rest }: FormProps) {
  return <div {...rest}>{children}</div>;
}

function Label({ title }: FormLabelProps) {
  return <label>{title}</label>;
}

function Input({ placeholder, type, className, ...rest }: FormInputProps) {
  return (
    <div className={clsx("", { className })} {...rest}>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

Form.Input = Input;
Form.Label = Label;

export { Form };
