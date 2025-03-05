import * as React from "react";
import { cn } from "@/lib/utils";
import { BackImgShop } from "./backImgShop";
import { Button } from "./button";

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
          "w-[160px] h-[230px] flex flex-col bg-[#F399321a] rounded-[5px] p-[10px] backdrop-blur-[100px] leading-[1]",
          className
        )}
        ref={ref}
        {...props}
      >
        <BackImgShop round="rounded-[5px]">
          <div className="flex justify-center w-full items-center h-[145px] rounded-[5px] bg-[rgba(243,153,50,0.10)] backdrop-blur-[25px]">
            {img && <img src={img} alt="item" />}
          </div>
        </BackImgShop>
        <p className="text-white pt-[6px] pb-[10px]">{title}</p>
        <Button
          onClick={onClick}
          className="flex items-center bg-[#F39932] text-[16px] rounded-[5px] text-white py-[7px] "
        >
          Buy
        </Button>
      </div>
    );
  }
);

ShopItem.displayName = "ShopItem";

export { ShopItem };
