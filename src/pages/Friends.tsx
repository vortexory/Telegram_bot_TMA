import { useContext, useEffect, useState } from "react";
import { BackImg } from "@/components/custom/backImg";
import { BackImgCommon } from "@/components/custom/backImgCommon";
import { Button } from "@/components/custom/button";
import { Image } from "@/components/custom/image";
import { StarIcon, UserBgIcon, Small_footprint } from "@/assets/imgs";
import { FaUser, FaCheck } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import axios from "axios";
import { TelegramContext, TelegramUser } from '../contexts/TelegramContext';

interface Friend {
  avatar: string;
  username: string;
  ispremiumuser: string;
  score: string;
}

const botUrl = "https://t.me/tmakingliontestbot?start="

const Friends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copy, setCopy] = useState(false);
  const currentUser = useContext<TelegramUser | null>(TelegramContext);
  const displayName = currentUser?.username || currentUser?.first_name || 'Guest';
  const inviteUrl = botUrl + (currentUser?.id || '');

  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await axios.post(
          "https://simon.billtears76.workers.dev/friend/get-invited-by-users", { username: displayName }
        );
        setFriends(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      }
    };
    getFriends();
  }, []);

  console.log(friends);

  const onClipSave = () => {
    setCopy(true);
    navigator.clipboard.writeText(inviteUrl);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#0F0902] leading-[100%] relative text h-screen pt-[30px] overflow-hidden">
      {/* Main Content */}
      <div className="flex h-full flex-col w-full gap-[18px]">
        {/* Referral Program Section */}
        <div className="relative px-5">
          <h4 className="text-[24px] text-white font-medium text-center">
            Referral Program
          </h4>
          <p className="text-center text-[16px] leading-[120%] font-normal pt-[14px] ">
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
                  <h4 className="text-[10px] tracking-[-0.2px] font-normal">
                    Common User
                  </h4>
                  <p className="text-[16px] tracking-[-0.32px] font-medium">
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
                  <h4 className="text-[10px] tracking-[-0.2px] font-normal">
                    Premium User
                  </h4>
                  <p className="text-[16px] tracking-[-0.32px] font-medium">
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
          <div className="pt-2">
            <div className="rounded-[15px] relative w-full p-px z-10">
              <div className="absolute inset-0 rounded-[15px] border border-[#F39932]"></div>
              <div className="relative h-full flex items-center rounded-[15px] bg-[#F399321a]">
                <div className="relative w-full h-[53px] rounded-[15px] bg-[rgba(243,153,50,0.10)] text-white flex justify-between items-center z-20">
                  <div className="flex items-center p-[10px]">
                    <div className="text-left pl-[6px]">
                      <p className="text-[10px] opacity-40 tracking-[-0.2px]">
                        Your link
                      </p>
                      <p className="text-[14px] font-normal tracking-[-0.28px]">
                        {inviteUrl}
                      </p>
                    </div>
                  </div>
                  {copy ? (
                    <Button className="mr-[-1px] w-[51px] h-full bg-[#F39932] rounded-[15px] text-white">
                      <FaCheck className="text-[30px]" />
                    </Button>
                  ) : (
                    <Button
                      className="mr-[-1px] w-[51px] h-full bg-[#F39932] rounded-[15px] text-white"
                      onClick={onClipSave}
                    >
                      <IoCopy className="text-[30px]" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 h-full text-white">
          <h5 className="text-[16px] text-left font-normal pb-3">
            Your friends ({friends.length})
          </h5>
          <div className="h-full overflow-y-auto pb-[310px]">
            <div className="relative gap-[8px] flex flex-col pb-[20px]">
              {friends.length === 0 ? (
                <BackImg round="rounded-[15px]">
                  <div className="relative rounded-[15px] bg-[rgba(243,153,50,0.10)]  backdrop-blur-[25px] text-white px-[10px] pt-[15px] pb-[10px] z-20">
                    <p className="text-[20px] font-normal leading-[1.2] text-center">
                      No friends yet...
                    </p>
                  </div>
                </BackImg>
              ) : (
                friends?.map((data, index) => (
                  <BackImgCommon key={index} round="rounded-[15px]">
                    <div className="relative w-full h-[55px] flex-shrink-0 rounded-[15px] text-white px-[10px] py-[12px] flex justify-between items-center z-20">
                      {/* User Info */}
                      <div className="flex items-center">
                        <Image className="w-[35px] h-[35px] rounded-full" src={data.avatar} alt={data.avatar}/>
                        <div className="text-left pl-[6px] leading-4">
                          <h6 className="text-[16px]">{data.username}</h6>
                          <p className="text-[12px] font-normal opacity-40">
                            {data.ispremiumuser?"Premium User" : "Common User"}
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] opacity-50 pb-1">
                          Your reward
                        </p>
                        <h6 className="text-[20px]">{data.score}</h6>
                      </div>
                    </div>
                  </BackImgCommon>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Top Effect Overlay*/}
      <div className="absolute top-[-54px] flex-shrink-0 inset-0 rounded-[390px] bg-[rgba(243,153,50,0.70)] blur-[100px] h-[161px]"></div>

      {/* Bottom Effect Overlay */}
      <div className="absolute bottom-0 left-0 w-full flex-shrink-0 h-[84px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_#000_72.62%)] z-1"></div>

      {/* Bottom Effect2 Overlay*/}
      <div className="absolute bottom-[-54px] left-0 w-full flex-shrink-0 rounded-[390px] bg-[rgba(243,153,50,0.70)] blur-[100px] h-[161px]"></div>

      {/* Circle Blur Overlay */}
      {/* <div className="absolute left-1/2 bottom-[-67px] -translate-x-1/2  w-[202px] h-[202px] flex-shrink-0 bg-[rgba(243,153,50,0.8)] blur-[59.41px]"></div> */}
    </div>
  );
};

export default Friends;
