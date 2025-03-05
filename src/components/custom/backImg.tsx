import * as React from "react";
import { cn } from "@/lib/utils";

export interface BackImgProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  round?: string;
}

const BackImg = React.forwardRef<HTMLDivElement, BackImgProps>(
  ({ className, children, round, ...props }, ref) => {
    return (
      <div
        className={cn(
          " p-px bg-gradient-to-b from-[#F39932] to-transparent",
          className,
          round
        )}
        ref={ref}
        {...props}
      >
        <div className={cn("bg-[rgb(39,24,09)] h-full", round)}>{children}</div>
      </div>
    );
  }
);

BackImg.displayName = "BackImg";

export { BackImg };
