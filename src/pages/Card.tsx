import { useState } from "react";
import { useNavigate } from "react-router";
import { BackImg } from "@/components/custom/backImg";
import { FootPrint } from "@/assets/imgs";
import { FaUser } from "react-icons/fa6";
import { IoIosArrowBack, IoIosShareAlt } from "react-icons/io";

const skins = [
  { name: "fire" },
  { name: "double" },
  { name: "heart" },
  { name: "secret" },
  { name: "light" },
  { name: "time" },
];

const Card = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState<number | null>(null);
  const [userSkins, setUserSkins] = useState<string[]>(["fire", "double"]);

  const handleChoose = () => {
    if (index !== null && !userSkins.includes(skins[index].name)) {
      setUserSkins((prevSkins) => [...prevSkins, skins[index].name]);
    }
  };

  return (
    <div className="relative h-screen pt-[30px] overflow-hidden">
      {/* Top Gradient Overlay */}
      <div className="absolute top-[-46px] left-0 w-full rounded-[390px]  h-[161px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_rgba(243,_153,_50,_0.5),_rgba(243,_153,_50,_0.1))]"></div>
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-[-64px] left-0 w-full h-[161px] rounded-[390px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_rgba(243,_153,_50,_0.5),_rgba(243,_153,_50,_0.1))]"></div>
      <div
        className="absolute top-0 w-full h-full z-[1]"
        style={{
          backgroundImage: `url(${FootPrint})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute top-[101px] left-1/2 transform -translate-x-1/2 w-[270px] h-[804px] bg-[#F39932] blur-[200px] opacity-30"></div>
      <div className="flex flex-col pt-0 px-5 py-4 h-full justify-between">
        <div className="z-[100]">
          <div className="flex flex-row items-center gap-2">
            <IoIosArrowBack
              className="text-[20px] opacity-40"
              onClick={() => {
                navigate("/shop");
              }}
            />
            <FaUser className="text-[35px] text-blue-500 bg-white rounded-full pl-[5px] pr-[8px] z-20" />
            <p className="text-[16px] font-medium">Username</p>
          </div>
          <div className="my-4">
            <BackImg round="rounded-[15px]">
              <p className="text-white p-[15px] text-center leading-[130%] font-medium h-full">
                Play the game, earn points, get <br></br>characters and become
                the coolest <br></br>player in King Leon!
              </p>
            </BackImg>
          </div>
          <BackImg className="z-[100]" round="rounded-[15px]">
            <div className="flex flex-row h-full p-[8px] gap-[8px]">
              <div className="flex flex-col justify-end w-full items-center">
                <h2 className="text-[16px] font-semibold leading-[120%]">
                  Skin Name
                </h2>
                <p className="pt-[5px] pb-[15px] text-[12px] font-normal leading-[120%]">
                  Description
                </p>
                {index !== null && userSkins.includes(skins[index].name) ? (
                  <button className="w-full flex justify-center items-center bg-[#f3993280] h-[35px] text-white text-[16px] font-medium rounded-sm py-2">
                    Chosen
                  </button>
                ) : (
                  <button
                    onClick={handleChoose}
                    className="w-full flex justify-center items-center bg-[#F39932] h-[35px] text-white text-[16px] font-medium rounded-sm py-2"
                  >
                    Choose
                  </button>
                )}
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap w-[155px] justify-around gap-2">
                  {skins.map((item, idx) =>
                    index === idx ? (
                      <BackImg
                        round="rounded-[5px]"
                        className="w-[73px] h-[100px]"
                        key={idx}
                      >
                        <div></div>
                      </BackImg>
                    ) : (
                      <div
                        className="w-[73px] h-[100px] rounded-[5px] bg-[#F399321a] cursor-pointer"
                        key={idx}
                        onClick={() => setIndex(idx)}
                      ></div>
                    )
                  )}
                </div>
              </div>
            </div>
          </BackImg>
        </div>
        <button className="w-full bg-[#F39932] h-[50px] text-white text-[24px] font-medium rounded-xl py-2 px-4 z-[100]">
          <div className="flex flex-row justify-center items-center">
            <p className="text-[20px] font-semibold leading-[120%]">Share</p>
            <IoIosShareAlt className="text-20" />
          </div>
        </button>
      </div>

      {/* Bottom Gradient-1 Overlay */}
      <div className="h-[30px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
    </div>
  );
};

export default Card;
