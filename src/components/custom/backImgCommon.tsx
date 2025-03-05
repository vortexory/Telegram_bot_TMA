import * as React from "react";
import { cn } from "@/lib/utils";

export interface BackImgCommonProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  round?: string;
  gradient?: boolean;
}

const BackImgCommon = React.forwardRef<HTMLDivElement, BackImgCommonProps>(
  ({ className, children, gradient, round, ...props }, ref) => {
    return (
      <div
        className={cn("relative w-full p-px z-10", className, round)}
        ref={ref}
        {...props}
      >
        {/* Gradient Border */}
        <div
          className={`absolute ${
            gradient === true || gradient === undefined
              ? "inset-0 " + round
              : round
          } bg-gradient-to-b from-[#F39932] to-transparent`}
        ></div>

        {/* Inner Background */}
        <div
          className={cn(
            "relative backdrop-blur-[50px] inset-0 h-full flex items-center",
            className,
            round,
            gradient === true || gradient === undefined
              ? "bg-[#0a090995]"
              : "bg-[#F399321a]"
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

BackImgCommon.displayName = "BackImgCommon";

export { BackImgCommon };
