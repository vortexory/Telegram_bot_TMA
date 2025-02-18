import * as React from "react";
import { cn } from "@/lib/utils";
import { BackImg } from "./backImg";

export interface ShopItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  img?: string;
  title: string;
  onClick: () => void;
}

const ShopItem = React.forwardRef<HTMLDivElement, ShopItemProps>(
  ({ className, img, title, onClick, ...props }, ref) => {
    return (
      <div
        className={cn(
          "w-[160px] h-[230px] flex flex-col bg-[#F399321a] rounded-[15px] p-[10px]",
          className
        )}
        ref={ref}
        {...props}
      >
         <BackImg round="rounded-[15px]">
          <div className="flex justify-center items-center h-[145px] rounded-[15px] bg-[rgba(243,153,50,0.10)] backdrop-blur-[25px]">
            {img && <img src={img} alt="item" />}
          </div>
        </BackImg>
        <p className="text-white mt-[6px]">{title}</p>
        <button
          onClick={onClick}
          className="flex items-center bg-[#F39932] rounded-[5px] text-white h-[30px] px-[57px] py-[7px]"
        >
          Buy
        </button>
      </div>
    );
  }
);

ShopItem.displayName = "ShopItem";

export { ShopItem };
