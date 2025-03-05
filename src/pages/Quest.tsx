import { BackImg } from "@/components/custom/backImg";
import { BackImgCommon } from "@/components/custom/backImgCommon";
import { CatBtn } from "@/components/custom/catBtn";
import { FootPrint } from "@/assets/imgs";
import { IoIosArrowForward } from "react-icons/io";

const tasks = [
  {
    name: "Task name",
    check: true,
    points: "0.00",
  },
  {
    name: "Task name",
    check: true,
    points: "0.00",
  },
  {
    name: "Task name",
    check: false,
    points: "0.00",
  },
  {
    name: "Task name",
    check: true,
    points: "0.00",
  },
  {
    name: "Task name",
    check: true,
    points: "0.00",
  },
];

const Quests = () => {
  return (
    <div className="bg-[#0F0902] leading-[1] relative overflow-hidden h-screen pt-[30px] p-5 w-screen">
      <div
        className="absolute top-0 w-full h-full z-10"
        style={{
          backgroundImage: `url(${FootPrint})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/*main content */}
      <div className="flex flex-col w-full h-full items-center">
        <h2 className="z-[100] text-[24px] font-medium">Quests</h2>
        <p className="z-[100] font-normal pt-[10px] leading-5 text-[16px]">
          Complete tasks, get rewarded,<br></br>move to the top and be the best.
        </p>
        <CatBtn
          firstTitle="In-game"
          lastTitle="Partner"
          className="z-[100] w-full my-5"
        />
        <div className="relative w-full h-full">
          <p className="text-left mb-2">Tasks list</p>
          <div className="flex flex-col gap-[10px] h-full overflow-y-auto pb-[225px]">
            {tasks?.map((item, idx) => (
              <BackImgCommon
                className="w-full h-[65px]"
                round="rounded-[15px]"
                key={idx}
              >
                <div className="flex flex-row justify-between items-center w-full p-[10px] h-full">
                  <div className="flex flex-row flex-grow items-center gap-[10px]">
                    <div className="w-[45px] h-[45px] rounded-[5px] bg-[#F39932]"></div>
                    <div className="flex flex-col items-start">
                      <p className="text-[16px] font-medium pb-[5px]">{item.name}</p>
                      <p className="text-[12px] opacity-40">
                        {item.points} points
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    {item.check && (
                      <button className="w-[67px] h-[25px] rounded-[82px] text-[14px] my-4 mx-1 bg-[#F39932]">
                        Check
                      </button>
                    )}
                    <IoIosArrowForward className="text-[22px] opacity-40" />
                  </div>
                  <div></div>
                </div>
              </BackImgCommon>
            ))}
          </div>
        </div>
      </div>
      {/* Top Gradient Overlay */}
      <div className="absolute top-[-90px] left-0 w-full h-[161px] flex-shrink-0 rounded-[390px] bg-[rgba(243,153,50,0.70)] blur-[100px]"></div>
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-[-44px] left-0 w-full h-[161px] blur-[100px] bg-[rgba(243,153,50,0.70)]"></div>

      {/* Bottom Gradient-1 Overlay */}
      <div className="h-[84px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
    </div>
  );
};

export default Quests;
