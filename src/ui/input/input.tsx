/* eslint-disable no-nested-ternary */
import { Label } from "@radix-ui/react-dropdown-menu";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/helper";
import { FCC } from "../../utils/types";
import { Show } from "../show";
import Subtitle1 from "../text/SubTitle1";

export const inputVariants = cva(
  cn(
    "border-input border bg-transparent ring-offset-background placeholder:text-muted-foreground",
    "focus-visible:ring-ring flex w-full file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-500 autofill:!bg-transparent"
  ),
  {
    variants: {
      variant: {
        default: "bg-light",
        filled: "bg-light",
      },
      inputSize: {
        sm: "h-11 px-3 py-2 text-sm rounded-sm file:text-sm file:font-medium",
        default: "h-10 px-4 text-sm rounded-lg file:text-sm file:font-medium",
      },
    },
    defaultVariants: {
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  errorClassName?: string;
  suffix?: React.ReactNode;
  fullWidth?: boolean;
  label?: React.ReactNode;
  isError?: boolean;
  asChild?: boolean;
  parentFocus?: boolean;
  defaultShowPassword?: boolean;
  inputClassName?: InputProps["className"];
  labelClassName?: InputProps["className"];
  currency?: React.ReactNode;
}

const Input: FCC<InputProps> = ({
  className,
  inputClassName,
  labelClassName,
  required,
  variant = "default",
  label,
  fullWidth,
  inputSize,
  type = "text",
  suffix,
  asChild,
  parentFocus,
  isError,
  defaultShowPassword = false,
  id,
  currency,
  ...props
}) => {
  const [{ show, isFocused }, setState] = React.useState({
    show: defaultShowPassword,
    isFocused: false,
  });
  return (
    <div
      className={cn(
        "relative flex cursor-text flex-col overflow-hidden py-0.5 px-0.5 border-transparent rounded-sm bg-light",
        className
      )}
    >
      {label && (
        <Label
          className={cn(
            {
              "translate-y-0 scale-100": asChild ? parentFocus : isFocused,
              "translate-y-4 scale-125": asChild ? !parentFocus : !isFocused,
            },
            "text-xxs absolute left-3 top-1 z-0 mb-2 origin-top-left rounded-full text-grey_light_4 transition-all duration-200 ease-in",
            labelClassName
          )}
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <div className="flex items-center">
        {currency && (
          <div className="pl-2">
            <Subtitle1 className="font-normal">{currency}</Subtitle1>
          </div>
        )}
        <input
          onFocus={() => setState((prev) => ({ ...prev, isFocused: true }))}
          onBlurCapture={(e) =>
            setState((prev) => ({
              ...prev,
              isFocused: Boolean(e.target.value),
            }))
          }
          autoComplete="new-password"
          id={id}
          type={
            type === "password" ? (show ? "text" : "password") : type.toString()
          }
          className={cn(
            "z-10 h-14 border-none bg-transparent px-3 py-2",
            inputVariants({ variant, inputSize, className: inputClassName })
          )}
          {...props}
        />

        <Show when={type !== "password"}>
          {suffix && (
            <div className="absolute right-[10px] top-1/2 z-10 -translate-y-1/2">
              {suffix}
            </div>
          )}
        </Show>
        <Show when={type === "password"}>
          <div
            onClick={() => setState((prev) => ({ ...prev, show: !prev.show }))}
            className="absolute right-[10px] top-1/2 z-10 -translate-y-1/2 cursor-pointer"
          >
            {show ? <></> : <></>}
          </div>
        </Show>
      </div>
    </div>
  );
};

export default Input;
