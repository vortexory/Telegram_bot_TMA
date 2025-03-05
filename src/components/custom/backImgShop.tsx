import * as React from "react";
import { cn } from "@/lib/utils";

export interface BackImgShopProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  round?: string;
  gradient?: boolean;
}

const BackImgShop = React.forwardRef<HTMLDivElement, BackImgShopProps>(
  ({ className, children, gradient, round, ...props }, ref) => {
    return (
      <div
        className={cn("relative w-full p-px z-10", className, round)}
        ref={ref}
        {...props}
      >
        {/* Gradient Border */}
        <div
          className={`absolute ${round} inset-0 bg-gradient-to-b from-[#F39932] to-transparent`}
        ></div>

        {/* Inner Background */}
        <div
          className={cn(
            "relative backdrop-blur-[50px] inset-0 h-full flex items-center bg-[#0a09096f]",
            className,
            round
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

BackImgShop.displayName = "BackImgt";

export { BackImgShop };
