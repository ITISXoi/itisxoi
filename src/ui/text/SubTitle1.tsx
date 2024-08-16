import React from "react";
import { TextProps } from "./type";
import { cn } from "../../utils/helper";

function Subtitle1({ className, children, ...props }: TextProps) {
  return (
    <p {...props} className={cn("text-base font-semibold", className)}>
      {children}
    </p>
  );
}

export default Subtitle1;
