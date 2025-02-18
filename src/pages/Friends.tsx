import { StarIcon, UserBgIcon, Small_footprint } from "@/assets/imgs";
import { BackImg } from "@/components/custom/backImg";
import { Button } from "@/components/custom/button";
import { Image } from "@/components/custom/image";
import { useState } from "react";
import { FaUser, FaCheck } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";

interface Friend {
  img: string;
  name: string;
  status: string;
  points: string;
  no: number;
}
const items: Friend[] = [
  {
    img: "text-red-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 1,
  },
  {
    img: "text-blue-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 2,
  },
  {
    img: "text-cyan-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 3,
  },
  {
    img: "text-yellow-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 4,
  },
  {
    img: "text-purple-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 5,
  },
  {
    img: "text-sky-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 6,
  },
  {
    img: "text-green-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 7,
  },
  {
    img: "text-gray-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 8,
  },
  {
    img: "text-pink-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 9,
  },
  {
    img: "text-orange-500",
    name: "Username",
    status: "Premium User",
    points: "5000",
    no: 10,
  },
];

// const items: Friend[] = [];

export default function Friends() {
  const [copy, setCopy] = useState(false);
  const text = "t.me/jhsOJHDSLKApWOFKKFKSIJW";

  const onClipSave = () => {
    setCopy(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <div className="bg-[#0F0902] relative text h-screen pt-[30px] overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute bottom-[-67px] left-0 w-full h-[161px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_rgba(243,153,50,0.5),_rgba(243,153,50,0.1))]"></div>
      {/* Blurred Background Effect */}
      <div className="absolute top-[-50px] inset-0 rounded-[390px] bg-[rgba(243,153,50,0.70)] blur-[100px] h-[161px]"></div>
      {/* Main Content */}
      <div className="flex h-full flex-col w-full gap-[18px]">
        {/* Referral Program Section */}
        <div className="relative px-5">
          <h4 className="text-[24px] text-white font-semibold text-center">
            Referral Program
          </h4>
          <p className="text-center text-[16px] leading-[120%] font-medium ">
            Invite your friends and earn points
          </p>
          <div className="relative pt-5 z-10 flex gap-[10px]">
            <div className="relative w-full bg-[#F39932] rounded-[15px] text-white p-[10px] flex justify-between items-center z-20">
              <div className="flex items-center">
                <Image
                  className="w-[35px] h-[35px]"
                  src={UserBgIcon}
                  alt={UserBgIcon}
                />
                <div className="text-left pl-[6px]">
                  <h4 className="text-[10px] tracking-[-0.2px] font-medium">
                    Common User
                  </h4>
                  <p className="text-[16px] tracking-[-0.32px] font-semibold">
                    +1000
                  </p>
                </div>
              </div>

              {/* Decorative Image */}
              <Image
                src={Small_footprint}
                className="absolute top-0 h-full right-0"
                alt="Small footprint"
              />
            </div>
            <div className="relative w-full bg-[#F39932] rounded-[15px] text-white p-[10px] flex justify-between items-center z-20">
              {/* User Info */}
              <div className="flex items-center">
                <Image
                  className="w-[35px] h-[35px]"
                  src={StarIcon}
                  alt={StarIcon}
                />
                <div className="text-left pl-[6px]">
                  <h4 className="text-[10px] tracking-[-0.2px] font-medium">
                    Premium User
                  </h4>
                  <p className="text-[16px] tracking-[-0.32px] font-semibold">
                    +5000
                  </p>
                </div>
              </div>

              {/* Decorative Image */}
              <Image
                src={Small_footprint}
                className="absolute top-0 h-full right-0"
                alt="Small footprint"
              />
            </div>
          </div>
          {/* Telegram Link */}
          <div className="pt-[10px]">
            <BackImg round="rounded-[15px]">
              <div className="relative h-[55px] rounded-[15px] bg-[rgba(243,153,50,0.10)]  backdrop-blur-[25px] text-white flex justify-between items-center z-20">
                <div className="flex items-center p-[10px]">
                  <div className="text-left pl-[6px]">
                    <p className="text-[10px] opacity-40 tracking-[-0.2px]">
                      Your link1
                    </p>
                    <h5 className="text-[14px] font-medium tracking-[-0.28px]">
                      t.me/jhsOJHDSLKApWOFKKFKSIJW
                    </h5>
                  </div>
                </div>
                {copy ? (
                  <Button className="mr-[-1px] w-[53px] h-full bg-[#F39932] rounded-[15px] text-white">
                    <FaCheck className="text-[30px]" />
                  </Button>
                ) : (
                  <Button
                    className="mr-[-1px] w-[53px] h-full bg-[#F39932] rounded-[15px] text-white"
                    onClick={onClipSave}
                  >
                    <IoCopy className="text-[30px]" />
                  </Button>
                )}
              </div>
            </BackImg>
          </div>
        </div>
        <div className="px-5 h-full">
          <h5 className="text-[16px] text-left font-medium text-white">
            Your friends ({items.length})
          </h5>
          <div className="h-full overflow-y-auto pt-[15px] pb-[310px]">
            <div className="relative gap-[10px] flex flex-col pb-[20px]">
              {items.length === 0 ? (
                <BackImg round="rounded-[15px]">
                  <div className="relative rounded-[15px] bg-[rgba(243,153,50,0.10)]  backdrop-blur-[25px] text-white px-[10px] pt-[18px] pb-[13px] z-20">
                    <p className="text-[20px] font-medium leading-[1.2] text-center">
                      No friends yet...
                    </p>
                  </div>
                </BackImg>
              ) : (
                items?.map((data, index) => (
                  <BackImg key={index} round="rounded-[15px]">
                    <div className="relative rounded-[15px] bg-[rgba(243,153,50,0.10)]  backdrop-blur-[25px] text-white px-[10px] py-[12px] flex justify-between items-center z-20">
                      {/* User Info */}
                      <div className="flex items-center">
                        <FaUser
                          className={`text-[35px] ${data.img} bg-white rounded-full p-[1px]`}
                        />
                        <div className="text-left pl-[6px]">
                          <h4 className="text-[16px]">{data.name}</h4>
                          <p className="text-[12px]">{data.status}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] opacity-50">Your reward</p>
                        <h5 className="font-semibold text-[20px]">
                          {data.points}
                        </h5>
                      </div>
                    </div>
                  </BackImg>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
    </div>
  );
}
