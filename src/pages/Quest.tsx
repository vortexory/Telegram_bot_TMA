import { IoIosArrowForward } from "react-icons/io";

import { BackImg } from "@/components/custom/backImg";

import { FootPrint } from "@/assets/imgs";
import { CatBtn } from "@/components/custom/catBtn";

const tasks = [
  {
    name: "Task name",
    check: true,
    points: 0.0,
  },
  {
    name: "Task name",
    check: true,
    points: 0.0,
  },
  {
    name: "Task name",
    check: false,
    points: 0.0,
  },
  {
    name: "Task name",
    check: true,
    points: 0.0,
  },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  // {
  //   name: "Task name",
  //   check: true,
  //   points: 0.0,
  // },
  {
    name: "Task name",
    check: true,
    points: 0.0,
  },
];

const Quests = () => {
  return (
    <div className="bg-[#0F0902] relative overflow-hidden h-screen pt-[30px] p-5 w-screen">
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full  h-[161px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_rgba(243,_153,_50,_0.5),_rgba(243,_153,_50,_0.1))]"></div>
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-[-67px] left-0 w-full h-[161px] blur-lg bg-[radial-gradient(ellipse_at_center,_rgba(243,_153,_50,_0.5),_rgba(243,_153,_50,_0.1))]"></div>
      <div
        className="absolute top-0 w-full h-full z-[0]"
        style={{
          backgroundImage: `url(${FootPrint})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/*main content */}
      <div className="flex flex-col w-full h-full items-center">
        <h2 className="z-[100] text-2xl font-semibold">Quests</h2>
        <p className="z-[100] font-normal mt-[10px] leading-5 text-base px-[65px]">
          Complete tasks, get rewarded, move to the top and be the best.
        </p>
        <CatBtn
          firstTitle="In-game"
          lastTitle="Partner"
          className="z-[100] w-full my-5"
        />
        <div className="relative w-full h-full">
          <p className="text-left mb-2">Tasks list</p>
          <div className="flex flex-col gap-[10px] h-full overflow-y-auto pb-[250px]">
            {tasks?.map((item, idx) => (
              <BackImg
                className="w-full h-[65px]"
                round="rounded-[15px]"
                key={idx}
              >
                <div className="flex flex-row justify-between items-center p-[10px] h-full">
                  <div className="flex flex-row flex-grow items-center gap-[10px]">
                    <div className="w-[45px] h-[45px] rounded-[5px] bg-[#F39932]"></div>
                    <div className="flex flex-col items-start">
                      <p className="text-base font-medium">{item.name}</p>
                      <p className="text-xs font-normal opacity-40">{item.points} points</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    {item.check && (
                      <button className="w-[67px] h-[25px] rounded-[82px] text-[14px] my-4 mx-1 bg-[#F39932]">
                        Check
                      </button>
                    )}
                    <IoIosArrowForward className="text-[20px] opacity-40"/>
                  </div>
                  <div></div>
                </div>
              </BackImg>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="h-[30px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
    </div>
  );
};

export default Quests;
