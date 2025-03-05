import { useCallback } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiBasket } from "react-icons/bi";
import { FaUserPlus, FaAward } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import {
  HomeFullIcon,
  HomeIcon,
  QuestsFullIcon,
  QuestsIcon,
  MenuFullIcon,
  MenuIcon,
  ShopFullIcon,
  ShopIcon,
  FriendFullIcon,
  FriendIcon,
  LeadersFullIcon,
  LeadersIcon,
} from "@/assets/icons";
import { Image } from "@/components/custom/image";
interface NavProps {
  isAdmin?: boolean;
}

const Nav = ({ isAdmin }: NavProps) => {
  const navigate = useNavigate();
  const navigation = useLocation();
  const pathName = navigation.pathname;

  const gotoHome = useCallback(() => {
    navigate("/overview");
  }, [navigate]);

  const gotoAllCourses = useCallback(() => {
    navigate("/all-courses");
  }, [navigate]);

  return (
    <>
      {/* {isAdmin && ( */}
      <div className="fixed bottom-0 z-[9999] w-full px-5 h-16">
        <div className="font-bold rounded-[15px] flex bg-black bg-opacity-25 backdrop-blur-[24.6px] justify-between p-3">
          {/* Main */}
          <NavLink to="/" className="flex items-center gap-2.5">
            <div className="flex flex-col items-center">
              {/* <GoHome className="text-[28px]" /> */}
              <Image
                className="w-[30px] h-[30px]"
                src={pathName === "/" ? HomeFullIcon : HomeIcon}
                alt="Home"
              />
              <span
                className={`text-[10px] ${
                  pathName === "/" ? "text-white" : "text-white opacity-30"
                }`}
              >
                Main
              </span>
            </div>
          </NavLink>

          {/* Quests */}
          <NavLink to="/quests" className="flex items-center gap-2.5">
            <div className="flex flex-col items-center">
              <Image
                className="w-[30px] h-[30px]"
                src={pathName === "/quests" ? QuestsFullIcon : QuestsIcon}
                alt="Quests"
              />
              <span
                className={`text-[10px] ${
                  pathName === "/quests"
                    ? "text-white"
                    : "text-white opacity-30"
                }`}
              >
                Quests
              </span>
            </div>
          </NavLink>

          {/* Cards */}
          <NavLink to="/card" className="flex items-center gap-2.5 ">
            <div className="flex flex-col items-center">
              <Image
                className="w-[30px] h-[30px]"
                src={pathName === "/card" ? MenuFullIcon : MenuIcon}
                alt="card"
              />
              <span
                className={`text-[10px] ${
                  pathName === "/card" ? "text-white" : "text-white opacity-30"
                }`}
              >
                Cards
              </span>
            </div>
          </NavLink>

          {/* Shop */}
          <NavLink to="/shop" className="flex items-center gap-2.5 ">
            <div className="flex flex-col items-center">
              <Image
                className="w-[30px] h-[30px]"
                src={pathName === "/shop" ? ShopFullIcon : ShopIcon}
                alt="Shop"
              />
              <span
                className={`text-[10px] ${
                  pathName === "/shop" ? "text-white" : "text-white opacity-30"
                }`}
              >
                Shop
              </span>
            </div>
          </NavLink>

          {/* Friends */}
          <NavLink to="/friends" className="flex items-center gap-2.5 ">
            <div className="flex flex-col items-center">
              <Image
                className="w-[30px] h-[30px]"
                src={pathName === "/friends" ? FriendFullIcon : FriendIcon}
                alt="Friends"
              />
              <span
                className={`text-[10px] ${
                  pathName === "/friends"
                    ? "text-white"
                    : "text-white opacity-30"
                }`}
              >
                Friends
              </span>
            </div>
          </NavLink>

          {/* Leaders */}
          <NavLink to="/leaders" className="flex items-center gap-2.5 ">
            <div className="flex flex-col items-center">
              <Image
                className="w-[30px] h-[30px]"
                src={pathName === "/leaders" ? LeadersFullIcon : LeadersIcon}
                alt="Leaders"
              />
              <span
                className={`text-[10px] ${
                  pathName === "/leaders"
                    ? "text-white"
                    : "text-white opacity-30"
                }`}
              >
                Leaders
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
