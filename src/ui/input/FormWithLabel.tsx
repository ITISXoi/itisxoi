import React from "react";
import { Controller } from "react-hook-form";
import Input, { InputProps } from "../input/input";
import { cn } from "../../utils/helper";
interface FormWithTitleProps extends InputProps {
  title?: string;
  subTitle?: string;
  containerClassName?: string;
  name: string;
  control: any;
  required?: boolean;
  hiddenError?: boolean;
}

function FormWithTitle({
  title,
  subTitle,
  containerClassName,
  name,
  control,
  required = false,
  hiddenError = false,
  className,
  ...props
}: FormWithTitleProps) {
  return (
    <div className={cn(containerClassName, "flex flex-col mb-4")}>
      <div className="flex flex-row items-center">
        {title && <p className="font-medium leading-normal mb-2">{title}</p>}
      </div>
      <Controller
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <Input
              {...props}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={cn(className, "mb-2 z-0")}
            />
            {!hiddenError && error?.message && (
              <p className="text-red-500">{error?.message}</p>
            )}
          </>
        )}
        name={name}
        control={control}
      />

      {subTitle && <p className="opacity-60">{subTitle}</p>}
    </div>
  );
}

export default FormWithTitle;
