import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BackImgCommon } from "@/components/custom/backImgCommon";
import { Image } from "@/components/custom/image";
import { FootPrint, Small_footprint } from "@/assets/imgs";
import { GoldIcon, SilverIcon, BronzeIcon } from "@/assets/icons";
import { TelegramContext, TelegramUser } from '../contexts/TelegramContext';

interface User {
  username: string;
  score: number;
  avatar: string;
}

const Leaderboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const currentUser = useContext<TelegramUser | null>(TelegramContext);
  const displayName = currentUser?.username || currentUser?.first_name || 'Guest';
  const avatarUrl = currentUser?.photo_url || "https://i.postimg.cc/YSm0rKS7/User-35.png";

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const response = await axios.get(
          "https://simon.billtears76.workers.dev/score/get_top_users"
        );
        const total = await axios.get(
          "https://simon.billtears76.workers.dev/auth/total-users"
        );
        setUsers(response.data.topUsers);
        setTotalUsers(total.data.totalUsers)
      } catch (err) {
        setError("Failed to fetch users.");
      }
    };
    fetchTopUsers();
  }, []);
  if (error) return <p>{error}</p>;
  console.log(users);
  return (
    <div className="relative bg-[#0F0902] h-screen pt-[25px] overflow-hidden">
      {/* Main Content */}
      <div className="flex h-full flex-col w-full gap-[25px]">
        {/* Leaderboard Section */}
        <div className="relative">
          <h4 className="text-[24px] leading-[100%] text-white font-semibold text-center">
            Leaderboard
          </h4>
          <div className="relative px-5 pt-4 z-10">
            {/* Blurred Background Effect */}
            <div className="absolute inset-0 rounded-[15px] opacity-30 bg-[#F39932] blur-[25px]"></div>

            {/* User Card */}
            <div className="relative bg-[#F39932] rounded-[15px] text-white px-[10px] py-[12px] flex justify-between items-center z-20">
              {/* User Info */}
              <div className="flex items-center">
                <Image className="w-[35px] h-[35px] rounded-full" src={avatarUrl} alt={avatarUrl} />
                <div className="text-left pl-[6px] leading-4">
                  <h4 className="text-[16px]">{displayName}</h4>
                  <p className="text-[12px]">000 points</p>
                </div>
              </div>
              <h5 className="font-semibold text-[20px] text-right">#999</h5>

              {/* Decorative Image */}
              <Image
                src={Small_footprint}
                className="absolute top-0 h-full left-[55%]"
                alt="Small footprint"
              />
            </div>
          </div>
        </div>
        <div className="px-5 h-full">
          <h5 className="text-[16px] leading-[100%] pb-[10px] text- text-left font-medium text-white">
            {totalUsers} holders
          </h5>
          <div className="relative h-full overflow-y-auto pb-[200px]">
            <div className="relative gap-[10px] flex flex-col pb-[20px]">
              {users.map((data, index) => (
                <BackImgCommon
                  gradient={index <= 2}
                  round="rounded-[15px]"
                  key={index}
                >
                  <div className="relative w-full h-[55px] flex-shrink-0 rounded-[15px] text-white px-[10px] py-[12px] flex justify-between items-center z-20">
                    <div className="flex items-center">
                      <Image
                        className="w-[35px] h-[35px] bg-white rounded-full"
                        src={data.avatar}
                        alt={data.avatar}
                      />
                      <div className="text-left pl-[6px] leading-4">
                        <h4 className="text-[16px]">{data.username}</h4>
                        <p className="text-[12px] opacity-30">
                          {data.score} points
                        </p>
                      </div>
                    </div>
                    <h5 className="font-semibold text-[20px] text-right">
                      {index === 0 ? (
                        <Image src={GoldIcon} alt="GoldIcon" />
                      ) : index === 1 ? (
                        <Image src={SilverIcon} alt="SilverIcon" />
                      ) : index === 2 ? (
                        <Image src={BronzeIcon} alt="BronzeIcon" />
                      ) : (
                        `#${index + 1}`
                      )}
                    </h5>
                  </div>
                </BackImgCommon>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footprint Background Effect */}
      <div
        className="absolute inset-0 z-[9] bg-cover bg-center"
        style={{ backgroundImage: `url(${FootPrint})` }}
      ></div>

      {/* Long Blur Overlay */}
      <div className="absolute top-[54px] left-[30px] w-[331px] h-[982px] flex-shrink-0 rounded-[982px] opacity-30 bg-[#F39932] blur-[200px]"></div>

      {/* Bottom Effect Overlay */}
      <div className="absolute bottom-[-67px] left-0 w-full h-[161px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_rgba(243,153,50,0.5),_rgba(243,153,50,0.1))]"></div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full flex-shrink-0 h-[84px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_#000_72.62%)] z-1"></div>

      {/* Circle Blur Overlay */}
      <div className="absolute left-1/2 bottom-[-67px] -translate-x-1/2  w-[202px] h-[202px] flex-shrink-0 bg-[rgba(243,153,50,0.8)] blur-[59.41px]"></div>
    </div>
  );
};

export default Leaderboard;
