import React from "react";
import { Image } from "@/components/custom/image";
import {ImgKinglion, Feather_down, Feather_up } from "@/assets/imgs";
export default function Claim() {
  return (
    <div className="relative overflow-y-hidden flex flex-col justify-center items-center">
      <div className="pt-[50px] w-full items-center px-[20px] pb-5 h-screen flex flex-col justify-between bg-black">
        <div className="flex relative flex-col space-y-1">
          <p className="text-white text-base text-opacity-40 font-semibold">Daily check-in</p>
          <h4 className="text-white text-[40px] font-bold">Day 1</h4>
        </div>
        <div className="absolute top-[117px] left-[50%] translate-x-[-50%] w-[270px] h-[804px] bg-[#F39932] blur-[200px] opacity-30"></div>
        <div className="relative w-[226px] h-[226px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-[165.384px] h-[165.384px] bg-[#F39932] rounded-full blur-[59px]"></div>
          <div className="absolute left-1/2 top-1/2 p-4 -translate-x-1/2 -translate-y-1/2 z-10 w-[226px] h-[226px]"><Image className="w-full h-full" src={ImgKinglion} alt="logo" /></div>
        </div>
        <div className="w-full flex flex-col space-y-1">
          <p className="text-[20px] text-white text-opacity-40 font-normal">You got:</p>
          <h5 className="text-[32px] text-white font-bold">200 $King</h5>
          <div className="flex w-full flex-col space-y-1 relative">
            <button className="w-full bg-[#F39932] h-[55px] text-white text-2xl font-bold rounded-xl py-2 px-4">Claim</button>
            <Image className="absolute top-0 left-0" src={Feather_down} alt="vector_down" />
            <Image className="absolute top-0 right-0" src={Feather_up} alt="vector_up" />
          </div>
        </div>
      </div>
    </div>
  );
}
