import Icons from "../../assets/icons/icons";
import { Show } from "../show";
import { cn } from "../../utils/helper";
// import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center active:scale-90 justify-center rounded-sm text-sm ring-offset-background transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-alpha-dark/5 disabled:text-alpha-dark/30 font-bold",
  {
    variants: {
      variant: {
        default:
          "bg-secondary-900 text-white hover:bg-secondary-600 active:bg-secondary-700",
        blue: "bg-secondary-1000 text-white hover:bg-blue-600 active:bg-secondary-700",
        error: "bg-red-500 text-white hover:bg-red-600 active:bg-red-500",
        outline:
          "border border-primary bg-transparent text-primary hover:bg-primary-50 active:bg-white",
        text: "hover:bg-accent hover:text-primary text-primary",
        link: "text-primary underline-offset-4 hover:underline px-0 py-4",
        filled: "bg-primary text-primary-foreground hover:bg-primary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      rounded: {
        default: "rounded-sm",
        full: "rounded-full",
        md: "rounded-md",
        none: "rounded-none",
        xl: "rounded-md",
      },
      size: {
        default: "h-10 px-4 py-3",
        sm: "h-8 py-2 px-2",
        lg: "h-12 px-4 py-2",
        st: "h-12 px-3 text-sm",
        mixin: "p-0",
        icon: "h-6 w-h-6 rounded-full active:scale-100",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

const LoadingIcon = ({
  className,
  size = "1rem",
}: {
  className?: string;
  size?: string;
}) => {
  return (
    <Icons.spinner size={size} className={cn("animate-spin ", className)} />
  );
};
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isNodeChildren?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      type = "button",
      size,
      fullWidth,
      rounded,
      asChild = false,
      leftIcon,
      rightIcon,
      loading,
      children,
      isNodeChildren,
      ...props
    },
    ref
  ) => {
    const Comp = "button";

    return (
      <Comp
        disabled={props.disabled ?? loading}
        className={cn(
          fullWidth && "w-full",
          buttonVariants({ variant, rounded, size, className })
        )}
        ref={ref}
        type={type}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <Show when={!!leftIcon}>{leftIcon && leftIcon}</Show>
            {isNodeChildren ? (
              children
            ) : (
              <span className="mx-2">{children}</span>
            )}
            {loading ? (
              <LoadingIcon className="ml-4" />
            ) : (
              <Show when={!!rightIcon}>{rightIcon && rightIcon}</Show>
            )}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants, LoadingIcon };
