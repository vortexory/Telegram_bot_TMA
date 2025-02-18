import * as React from "react";
import { cn } from "@/lib/utils"; // Make sure this utility is correctly implemented
import { Cancel_btn, Feather_up, Feather_down } from "@/assets/imgs";
import { Image } from "./image";

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  img: string;
  isOpen: boolean;
  title: string;
  description: string;
  cost: number;
  onClose: () => void;
  onSubmit: () => void;
}

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      className,
      img,
      title,
      description,
      cost,
      isOpen,
      onSubmit,
      onClose,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "relative  w-full h-[410px] p-5 rounded-[15px] transition-all duration-300", // Added transition properties for smooth animation
          isOpen ? "animate-slideIn" : "animate-slideOut",
          className
        )}
      >
        <div className="absolute top-0 left-0 bg-[#25180a7e] backdrop-blur-[25px] w-full h-full"></div>
        <button className="absolute top-5 right-5" onClick={onClose}>
          <img src={Cancel_btn} alt="btn" />
        </button>
        <div className="flex flex-col items-center z-[100]">
          <p className="text-base text-white opacity-40 font-medium">
            Confirm your purchase
          </p>
          <h3 className="text-[40px] relative font-semibold text-white">
            {title}
          </h3>
          <img
            src={img}
            alt={img}
            className="relative h-[145px] w-[132.39px]"
          />
          <p className="text-xs relative text-white mt-[15px] px-[70px]">
            {description}
          </p>
          <p className="text-white font-medium my-[10px]">Cost: {cost}$King</p>
          <div className="flex w-full flex-col space-y-1 relative z-[100]">
            <button
              className="relative w-full bg-[#F39932] h-[55px] text-white text-2xl font-bold rounded-xl py-2 px-4"
              onClick={onSubmit}
            >
              Confirm
            </button>
            <Image
              className="absolute top-0 left-0"
              src={Feather_down}
              alt="vector_down"
            />
            <Image
              className="absolute top-0 right-0"
              src={Feather_up}
              alt="vector_up"
            />
          </div>
        </div>
      </div>
    );
  }
);

Drawer.displayName = "Drawer";

export { Drawer };
