import React from "react";
import { Image } from "@/components/custom/image";
import { ImgKinglion } from "@/assets/imgs";
export default function Home() {
  return (
    <header className="App-header">
      <div className="pt-12 w-full items-center px-5 pb-6 h-screen flex flex-col justify-between bg-black">
        <div className="flex relative flex-col space-y-1">
          <div className="text-white text-base text-opacity-40 font-semibold">Daily check-in</div>
          <div className="text-white text-4xl font-bold">Day 1</div>
          <div className="absolute top-20 left-[50%] translate-x-[-50%] w-[270px] h-[calc(100vh-160px)] bg-[#F39932] blur-[200px] opacity-30"></div>
        </div>
        <div>
          <Image className="shadow-3xl rounded-full shadow-[#F39932] shadow-inset" src={ImgKinglion} alt="logo"  />
        </div>
        <div>
          <div className="text-white text-opacity-40 font-semibold">You got:</div>
          <div className="text-white text-4xl font-bold">200 $King</div>
        </div>

        <div className="flex w-full flex-col space-y-1">
          <button className="w-full bg-[#F39932] text-white text-2xl font-bold rounded-xl py-2 px-4">Claim</button>
        </div>
      </div>
    </header>
  );
}
