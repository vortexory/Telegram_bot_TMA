import { FootPrint, Small_footprint } from "@/assets/imgs";
import { BackImg } from "@/components/custom/backImg";
import { Image } from "@/components/custom/image";
import { FaUser } from "react-icons/fa6";

const items = [
  {
    img: "text-red-500",
    name: "Username",
    points: "000",
    no: 1,
  },
  {
    img: "text-blue-500",
    name: "Username",
    points: "000",
    no: 2,
  },
  {
    img: "text-cyan-500",
    name: "Username",
    points: "000",
    no: 3,
  },
  {
    img: "text-yellow-500",
    name: "Username",
    points: "000",
    no: 4,
  },
  {
    img: "text-purple-500",
    name: "Username",
    points: "000",
    no: 5,
  },
  {
    img: "text-sky-500",
    name: "Username",
    points: "000",
    no: 6,
  },
  {
    img: "text-green-500",
    name: "Username",
    points: "000",
    no: 7,
  },
];

export default function Leaderboard() {
  return (
    <div className="relative h-screen pt-[30px] overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute bottom-[-67px] left-0 w-full h-[161px] blur-lg bg-[radial-gradient(ellipse_at_center,_rgba(243,153,50,0.5),_rgba(243,153,50,0.1))]"></div>

      {/* Main Content */}
      <div className="flex h-full flex-col w-full gap-[30px]">
        {/* Leaderboard Section */}
        <div className="relative">
          <h4 className="text-[24px] text-white font-semibold text-center">
            Leaderboard
          </h4>
          <div className="relative px-5 pt-5 z-10">
            {/* Blurred Background Effect */}
            <div className="absolute inset-0 rounded-[15px] opacity-50 bg-[#F39932] blur-[25px]"></div>

            {/* User Card */}
            <div className="relative bg-[#F39932] rounded-[15px] text-white px-[10px] py-[12px] flex justify-between items-center z-20">
              {/* User Info */}
              <div className="flex items-center">
                <FaUser className="text-[35px] text-red-500 bg-white rounded-full p-[1px]" />
                <div className="text-left pl-[6px]">
                  <h4 className="text-[16px]">Username</h4>
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
          <h5 className="text-[16px] text- text-left font-medium text-white">
            0.0M holders
          </h5>
          <div className="h-full overflow-y-auto pb-[250px]">
            <div className="relative gap-[10px] flex flex-col pb-[20px]">
              {items.map((data, index) => (
                <BackImg round="rounded-[15px]" key={index}>
                  <div className="relative rounded-[15px] bg-[rgba(243,153,50,0.10)] backdrop-blur-[25px] text-white px-[10px] py-[12px] flex justify-between items-center z-20">
                    {/* User Info */}
                    <div className="flex items-center">
                      <FaUser
                        className={`text-[35px] ${data.img} bg-white rounded-full p-[1px]`}
                      />
                      <div className="text-left pl-[6px]">
                        <h4 className="text-[16px]">{data.name}</h4>
                        <p className="text-[12px]">{data.points} points</p>
                      </div>
                    </div>
                    <h5 className="font-semibold text-[20px] text-right">
                      {data.no === 1
                        ? "🥇"
                        : data.no === 2
                        ? "🥈"
                        : data.no === 3
                        ? "🥉"
                        : `#${data.no}`}
                    </h5>
                  </div>
                </BackImg>
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

      {/* Additional Blur Overlay */}
      <div className="absolute top-[51px] left-1/2 transform -translate-x-1/2 w-[331px] h-[982px] bg-[#F39932] blur-[200px] opacity-30 z-6"></div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-b from-transparent via-black/60 to-black/60 z-10"></div>
    </div>
  );
}
