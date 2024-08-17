import React from "react";
import Input, { InputProps } from "./input";
import { cn } from "../../utils/helper";
interface InputWithTitleProps extends InputProps {
  title?: string;
  subTitle?: string;
  containerClassName?: string;
}

function InputWithTitle({
  title,
  subTitle,
  containerClassName,
  ...props
}: InputWithTitleProps) {
  return (
    <div className={cn(containerClassName, "flex flex-col mb-4")}>
      {title && <p className="mb-2 text-xl">{title}</p>}
      <Input {...props} />

      {subTitle && <p className="mt-2 opacity-60">{subTitle}</p>}
    </div> 
  );
}

export default InputWithTitle;
