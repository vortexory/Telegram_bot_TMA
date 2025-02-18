import * as React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Image } from "./image";
import { Fire, Foot, Feather_down, Feather_up } from "@/assets/imgs";

interface IsOpenType {
  win: boolean;
  lose: boolean;
}
export interface ClaimModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: IsOpenType;
  // children?: React.ReactNode;
  className?: string;
}

const ClaimModal = React.forwardRef<HTMLDivElement, ClaimModalProps>(
  ({ isOpen, children, ...props }, ref) => {
    const navigate = useNavigate();
    const modal =
      isOpen.win || isOpen.lose ? "w-full absolute z-[100] h-screen" : "w-0";

    return (
      <div className={`${modal}`}>
        <div className="relative w-full h-full">
          <div className="bg-[rgba(17,11,3,0.40)] backdrop-blur-[25px] w-full h-full"></div>
          <div className="pt-[50px] px-[20px] pb-5 w-full h-full absolute top-0 flex flex-col justify-between items-center">
            <div className="flex relative flex-col justify-center items-center pt-[3vh] space-y-1">
              <Image
                className="w-[200px] h-[200px]"
                src={isOpen.win ? Fire : Foot}
                alt="logo"
              />
              <h4 className="text-white text-[32px] font-semibold">
                {isOpen.win ? "Congratulations" : "Game Over"}
              </h4>
              <p className="text-white text-[24px] text-opacity-50 font-normal">
                {isOpen.win ? "You win the game" : "You loose the game"}
              </p>
            </div>
            <div className=" space-y-5 w-[200px] ">
              <div className="flex flex-col justify-center items-center space-y-1">
                <p className="text-white text-center font-normal text-[16px] text-opacity-40 leading-[16px] font-sans">
                  You reward:
                </p>
                {isOpen.win ? (
                  <h5 className="w-[125px] text-center py-1 rounded-[80px] border-[#F39932] border-t-2 border-t-[#F39932] bg-[rgba(243,153,50,0.10)]">
                    5 TON
                  </h5>
                ) : (
                  <h5 className="text-white font-semibold text-[36px]">
                    1000 $King
                  </h5>
                )}
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
        </div>
      </div>
    );
  }
);

ClaimModal.displayName = "ClaimModal";

export { ClaimModal };
