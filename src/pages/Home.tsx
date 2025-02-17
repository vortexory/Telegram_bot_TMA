import React from "react";
import { Image } from "@/components/custom/image";
import { ImgKinglion } from "@/assets/imgs";
export default function Home() {
  return (
    <header className="App-header relative overflow-y-hidden">
      <div className="pt-[50px] w-full items-center px-[20px] pb-5 h-screen flex flex-col justify-between bg-black">
        <div className="flex relative flex-col space-y-1">
          <p className="text-white text-base text-opacity-40 font-semibold">Daily check-in</p>
          <h4 className="text-white text-[40px] font-bold">Day 1</h4>
        </div>
        <div className="absolute top-[117px] left-[50%] translate-x-[-50%] w-[270px] h-[804px] bg-[#F39932] blur-[200px] opacity-30"></div>
      </div>
    </header>
  );
}
