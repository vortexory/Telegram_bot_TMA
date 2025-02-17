import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "@/components/custom/image";
import { Button } from "@/components/custom/button";
import {
  VectorLeftIcon,
  VectorRightIcon,
  HeartEmptyIcon,
  HeartIcon,
} from "@/assets/icons";
import {
  FootPrint,
  Boxlion_left,
  Boxlion_right,
  Fire,
  Feather_down,
  Feather_up,
} from "@/assets/imgs";

export default function Play() {
  const navigate = useNavigate();
  const [health, SetHealth] = useState([1, 1, 1, 1]);
  const [num, setNum] = useState(4);
  const [pos, setPos] = useState({
    position: "pt-[18vh]",
    direction: Boxlion_left,
  });

  const changePos = (position: string, direction: string, count: number) => {
    console.log(count, num);
    setPos({ position, direction });
    if (count === -1 && num === 1) {
      setNum(0);
      alert("Game Over");
    } else if (count == 1 && num == 9) {
      setNum(10);
      alert("Congratulations");
    } else setNum(num + count);
  };

  const WinModal = () => {
    return (
      <div className="pt-[50px] w-full items-center px-[20px] pb-5 h-screen flex flex-col justify-between bg-black">
        <div className="flex relative flex-col justify-center items-center space-y-1">
          <Image className="w-[226px] h-[226px]" src={Fire} alt="logo" />
          <h4 className="text-white text-[32px] font-semibold">
            Congratulations
          </h4>
          <p className="text-white text-[24px] text-opacity-50 font-normal">
            You win the game
          </p>
        </div>
        <div className=" space-y-5 w-[226px] ">
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-white text-center font-normal text-[16px] text-opacity-40 leading-[16px] font-sans">
              You reward:
            </p>
            <h5 className="w-[125px] text-center py-1 rounded-[80px] border-[#F39932] border-t-2 border-t-[#F39932] bg-[rgba(243,153,50,0.10)]">
              5 TON
            </h5>
          </div>
          <div className="flex w-full flex-col space-y-1 relative">
            <button
              className="w-full bg-[#F39932] h-[50px] text-white text-[24px] font-medium rounded-xl py-2 px-4"
              onClick={() => navigate("/")}
            >
              Claim
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
  };

  return (
    <div className="relative overflow-hidden flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-between pt-4 px-3 pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-[#F39932]"></div>
          <p className="text-[16px] text-white">Username</p>
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
            <div className="absolute z-[10] top-[101px] left-1/2 transform -translate-x-1/2 w-[270px] h-[804px] bg-[#F39932] blur-[200px] opacity-30"></div>
          </div>
        </div>

        {/* Down Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[84px] bg-gradient-to-b from-transparent via-black/60 to-black/60"></div>

        {/* Content */}
        <div className="relative w-full h-full z-10 bg-cover bg-center">
          <div>
            <p className="text-white text-center pt-[50px] text-[40px] font-semibold flex justify-center">
              {health.map((item, index) => (
                <Image
                  key={index}
                  src={item == 1 ? HeartIcon : HeartEmptyIcon}
                  alt="heart"
                ></Image>
              ))}
            </p>
            <h5 className="text-[24px] font-medium">
              10/<span className="text-[#767676]">1000</span>
            </h5>
          </div>
          <div className={`relative flex justify-center ${pos.position}`}>
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 mt-[5vh] -translate-x-1/2 -translate-y-1/2 z-[1] w-[165px] h-[165px] bg-[#F39932] rounded-full blur-[59px]"></div>

            {/* Boxlions */}
            <div className="relative flex items-center space-x-4">
              <Image
                src={pos.direction}
                className="z-[100]"
                alt="Boxlion Left"
              />

              {/* <Image src={Boxlion_right} className="" alt="Boxlion Right" /> */}
            </div>
          </div>

          {/* Overlay with Footprint and Icons */}
          <div
            className="absolute top-0 w-full h-full"
            style={{
              backgroundImage: `url(${FootPrint})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative w-full h-full pt-[20vh]">
              {/* Left Icons */}
              <div className="absolute left-0 flex flex-col space-y-2">
                <Image src={VectorLeftIcon} alt="Vector Left Icon 1" />
                <Image src={VectorLeftIcon} alt="Vector Left Icon 2" />
              </div>

              {/* Right Icons */}
              <div className="absolute right-0 flex flex-col space-y-2">
                <Image src={VectorRightIcon} alt="Vector Right Icon 1" />
                <Image src={VectorRightIcon} alt="Vector Right Icon 2" />
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 w-full px-[20px] pb-[20px]">
            <div className="flex justify-around">
              <Button
                className="w-[70px] h-[70px] bg-[#F39932] rounded-full"
                onClick={() => changePos("pt-[4vh]", Boxlion_left, 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <path
                    d="M27.5771 20.761C28.1984 20.761 28.7021 20.2573 28.7021 19.636C28.7021 19.0147 28.1984 18.511 27.5771 18.511L19.0918 18.511C18.4705 18.511 17.9668 19.0147 17.9668 19.636L17.9668 28.1213C17.9668 28.7426 18.4705 29.2463 19.0918 29.2463C19.7132 29.2463 20.2168 28.7426 20.2168 28.1213L20.2168 22.352L30.4939 32.6291C30.9333 33.0684 31.6456 33.0684 32.0849 32.6291C32.5243 32.1897 32.5243 31.4774 32.0849 31.0381L21.8078 20.761H27.5771Z"
                    fill="black"
                  />
                </svg>
              </Button>
              <Button
                className="w-[70px] h-[70px] bg-[#F39932] rounded-full"
                onClick={() => changePos("pt-[4vh]", Boxlion_right, -1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <path
                    d="M23.4229 20.761C22.8016 20.761 22.2979 20.2573 22.2979 19.636C22.2979 19.0147 22.8016 18.511 23.4229 18.511L31.9082 18.511C32.5295 18.511 33.0332 19.0147 33.0332 19.636L33.0332 28.1213C33.0332 28.7426 32.5295 29.2463 31.9082 29.2463C31.2868 29.2463 30.7832 28.7426 30.7832 28.1213L30.7832 22.352L20.5061 32.6291C20.0667 33.0684 19.3544 33.0684 18.9151 32.6291C18.4757 32.1897 18.4757 31.4774 18.9151 31.0381L29.1922 20.761H23.4229Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex justify-between">
              <Button
                className="w-[70px] h-[70px] bg-[#F39932] rounded-full"
                onClick={() => changePos("pt-[18vh]", Boxlion_left, 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <path
                    d="M20.2169 23.8787C20.2169 23.2574 19.7132 22.7537 19.0919 22.7537C18.4706 22.7537 17.9669 23.2574 17.9669 23.8787L17.9669 32.364C17.9669 32.9853 18.4706 33.489 19.0919 33.489L27.5772 33.489C28.1985 33.489 28.7022 32.9853 28.7022 32.364C28.7022 31.7427 28.1985 31.239 27.5772 31.239L21.8079 31.239L32.085 20.9619C32.5243 20.5225 32.5243 19.8102 32.085 19.3709C31.6456 18.9316 30.9333 18.9316 30.494 19.3709L20.2169 29.648V23.8787Z"
                    fill="black"
                  />
                </svg>
              </Button>
              <Button
                className="w-[70px] h-[70px] bg-[#F39932] rounded-full"
                onClick={() => changePos("pt-[18vh]", Boxlion_right, -1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                >
                  <path
                    d="M30.7831 23.8787C30.7831 23.2574 31.2867 22.7537 31.9081 22.7537C32.5294 22.7537 33.0331 23.2574 33.0331 23.8787L33.0331 32.364C33.0331 32.9853 32.5294 33.489 31.9081 33.489L23.4228 33.489C22.8015 33.489 22.2978 32.9853 22.2978 32.364C22.2978 31.7427 22.8015 31.239 23.4228 31.239L29.1921 31.239L18.915 20.9619C18.4756 20.5225 18.4756 19.8102 18.915 19.3709C19.3543 18.9316 20.0666 18.9316 20.506 19.3709L30.7831 29.648V23.8787Z"
                    fill="black"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Win Modal */}
      {/* <WinModal/> */}
    </div>
  );
}
