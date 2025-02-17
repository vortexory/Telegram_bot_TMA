import React from "react";
import { Image } from "@/components/custom/image";
import { VectorLeftIcon, VectorRightIcon } from "@/assets/icons";
import { FootPrint } from "@/assets/imgs";

export default function Home() {
  return (
    <div className="relative overflow-y-hidden flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-between pt-4 px-3 pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-[#F39932]"></div>
          <p className="text-[16px]">Username</p>
        </div>
        <div className="text-right text-sm font-medium">
          <h6 className="text-white">Общая прибыль</h6>
          <p className="text-[#F39932]">1000 $King</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex-grow">
        {/* Background and blur elements */}
        <div className="absolute w-full border-t-2 border-[#F39932] h-full rounded-t-[15px] opacity-50 bg-[#F39932]"></div>
        <div className="absolute w-full h-full rounded-t-[15px] opacity-50 bg-[#F39932] blur-[25px]"></div>

        {/* Main Effect */}
        <div className="absolute top-0 h-full w-full rounded-t-[15px] bg-[#0F0902]">
          <div className="relative flex w-full h-full">
            {/* Medium Radius Gradient */}
            <div className="absolute z-[10] top-[101px] left-1/2 transform -translate-x-1/2 w-[270px] h-[804px] bg-[#F39932] blur-[200px] opacity-30"></div>
          </div>
        </div>

        {/* Down Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[84px] bg-gradient-to-b from-transparent via-black/60 to-black/60"></div>

        {/* Content with text */}
        <div className="relative w-full h-full z-10 bg-cover bg-center">
          <h4 className="text-white text-center pt-[50px] text-[40px] font-semibold">Tap to play</h4>
          <div className="relative flex justify-center pt-[30%]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-[165px] h-[165px] bg-[#F39932] rounded-full blur-[59px]"></div>
            <div className="z-10 w-[177px] h-[177px] rounded-[15px] bg-[#F39932]"></div>
          </div>

          {/* Overlay with Footprint and Icons */}
          <div
            className="absolute top-0 w-full h-full"
            style={{ backgroundImage: `url(${FootPrint})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="relative w-full h-full pt-[30%]">
              {/* Left Icons */}
              <div className="absolute left-0 flex flex-col space-y-2">
                <Image src={VectorLeftIcon} alt="left_1" />
                <Image src={VectorLeftIcon} alt="left_2" />
              </div>

              {/* Right Icons */}
              <div className="absolute right-0 flex flex-col space-y-2">
                <Image src={VectorRightIcon} alt="right_1" />
                <Image src={VectorRightIcon} alt="right_2" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
