import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Image } from "@/components/custom/image";
import { Button } from "@/components/custom/button";
import { BackImg } from "@/components/custom/backImg";
import { FootPrint } from "@/assets/imgs";
import { IoIosArrowBack, IoIosShareAlt } from "react-icons/io";
import { TelegramContext, TelegramUser } from '../contexts/TelegramContext';

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
  const currentUser = useContext<TelegramUser | null>(TelegramContext);
  const displayName = currentUser?.username || currentUser?.first_name || 'Guest';
  const avatarUrl = currentUser?.photo_url || "https://i.postimg.cc/YSm0rKS7/User-35.png";

  const handleChoose = () => {
    if (index !== null && !userSkins.includes(skins[index].name)) {
      setUserSkins((prevSkins) => [...prevSkins, skins[index].name]);
    }
  };

  return (
    <div className="bg-[#] relative h-screen pt-[30px] overflow-hidden">
      <div className="absolute top-[101px] left-1/2 transform -translate-x-1/2 w-[270px] h-[804px] bg-[#F39932] blur-[200px] opacity-30"></div>
      <div className="flex flex-col pt-0 px-5 pb-2 h-full justify-between">
        <div className="z-[100] h-full">
          <div className="flex flex-row items-center gap-2">
            <Button>
              <IoIosArrowBack
                className="text-[20px] opacity-40"
                onClick={() => {
                  navigate("/shop");
                }}
              />
            </Button>
            <Image className="w-[35px] h-[35px] rounded-full p-[1px] mx-[5px] z-20" src={avatarUrl} alt={avatarUrl} />
            <p className="text-[16px] font-medium">{displayName}</p>
          </div>
          <div className="my-[20px]">
            <div className="rounded-[15px] border border-[#F39932] bg-[#F39932]/10">
              <p className="text-white p-[15px] text-center leading-[130%] font-medium h-full">
                Play the game, earn points, get <br></br>characters and become
                the coolest <br></br>player in King Leon!
              </p>
            </div>
          </div>
          <BackImg
            className="z-[100] h-[calc(100%-200px)]"
            round="rounded-[15px]"
          >
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
              <div className="flex-grow w-full h-full">
                <div className="flex flex-wrap w-full h-full justify-between items-end">
                  {skins.map((item, idx) =>
                    index === idx ? (
                      <div
                        key={idx}
                        className={`w-[50%] h-[33.3%] pl-[8px] ${idx < 2 ? "" : "pt-[8px]"
                          }`}
                      >
                        <BackImg
                          round="w-full h-full rounded-[5px]"
                          className=""
                        >
                          <div></div>
                        </BackImg>
                      </div>
                    ) : (
                      <div
                        key={idx}
                        className={`w-[50%] h-[33.3%] pl-[8px] ${idx < 2 ? "" : "pt-[8px]"
                          }`}
                      >
                        <div
                          className="w-full h-full rounded-[5px] bg-[#F399321a] cursor-pointer"
                          onClick={() => setIndex(idx)}
                        ></div>
                      </div>
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

      {/* Footprint Background Effect */}
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center"
        style={{ backgroundImage: `url(${FootPrint})` }}
      ></div>
      {/* Top Gradient Overlay */}
      <div className="absolute top-[-90px] left-0 w-full h-[161px] flex-shrink-0 rounded-[390px] bg-[rgba(243,153,50,0.70)] blur-[100px]"></div>
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-[-44px] left-0 w-full h-[161px] blur-[100px] bg-[rgba(243,153,50,0.70)]"></div>

      {/* Bottom Gradient-1 Overlay */}
      <div className="h-[84px] w-full absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
    </div>
  );
};

export default Card;
