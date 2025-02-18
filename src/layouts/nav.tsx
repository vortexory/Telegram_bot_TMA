import { useCallback } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiBasket } from "react-icons/bi";
import { FaUserPlus, FaAward } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
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
          <NavLink
            to="/"
            className={`flex items-center gap-2.5 ${
              pathName === "/" ? "text-white" : "text-white opacity-30"
            }`}
          >
            <div className="flex flex-col items-center">
              <GoHome className="text-[28px]" />
              <span className="text-[10px]">Main</span>
            </div>
          </NavLink>

          {/* Quests */}
          <NavLink
            to="/quests"
            className={`flex items-center gap-2.5 ${
              pathName === "/quests" ? "text-white" : "text-white opacity-30"
            }`}
          >
            <div className="flex flex-col items-center">
              <IoMdCheckbox className="text-[28px]" />
              <span className="text-[10px]">Quests</span>
            </div>
          </NavLink>

          {/* Cards */}
          <NavLink
            to="/card"
            className={`flex items-center gap-2.5 ${
              pathName === "/card" ? "text-white" : "text-white opacity-30"
            }`}
          >
            <div className="flex flex-col items-center">
              <RxDashboard className="text-[28px]" />
              <span className="text-[10px]">Cards</span>
            </div>
          </NavLink>

          {/* Shop */}
          <NavLink
            to="/shop"
            className={`flex items-center gap-2.5 ${
              pathName === "/shop" ? "text-white" : "text-white opacity-30"
            }`}
          >
            <div className="flex flex-col items-center">
              <BiBasket className="text-[28px]" />
              <span className="text-[10px]">Shop</span>
            </div>
          </NavLink>

          {/* Friends */}
          <NavLink
            to="/friends"
            className={`flex items-center gap-2.5 ${
              pathName === "/friends" ? "text-white" : "text-white opacity-30"
            }`}
          >
            <div className="flex flex-col items-center">
              <FaUserPlus className="text-[28px]" />
              <span className="text-[10px]">Friends</span>
            </div>
          </NavLink>

          {/* Leaders */}
          <NavLink
            to="/leaders"
            className={`flex items-center gap-2.5 ${
              pathName === "/leaders" ? "text-white" : "text-white opacity-30"
            }`}
          >
            <div className="flex flex-col items-center">
              <FaAward className="text-[28px]" />
              <span className="text-[10px]">Leaders</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
