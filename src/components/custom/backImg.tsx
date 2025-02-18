import * as React from "react";
import { cn } from "@/lib/utils";

export interface BackImgProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const BackImg = React.forwardRef<HTMLDivElement, BackImgProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-[15px] p-px bg-gradient-to-b from-[#F39932] to-transparent",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className={cn("bg-[#71471e] rounded-[calc(15px-1px)] h-full")}>
          {children}
        </div>
      </div>
    );
  }
);

BackImg.displayName = "BackImg";

export { BackImg };
