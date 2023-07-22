import { Link, useNavigate } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { FaCrown, FaUsers } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoDiamond } from "react-icons/io5";
import Logout from "./Logout";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Sidebar = ({
  setIsUserLoggedIn,
  loggedInUser,
  setIsPremium,
  isPremium,
  setShowModal,
}: any) => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsUserLoggedIn(false);
    setIsPremium(false);
    navigate("/login");
  };

  const handleClick = () => {
    setIsMenu(!isMenu);
  };
  return (
    <>
      {/* desktop */}
      <div className="hidden min-h-screen fixed bg-blue-500 w-[27%] sm:flex">
        <div className="flex flex-col items-center w-[100%] mt-28">
          <div>
            <div className="text-center font-semibold text-[28px]">
              Connectify
            </div>
            <ul className="gap-5">
              <li className="text-[18px] mt-4">
                <Link
                  to={"/"}
                  className="flex items-center gap-1 cursor-pointer hover:font-semibold"
                >
                  <BiHome />
                  Home
                </Link>
              </li>
              <li className="text-[18px] mt-4">
                <Link
                  to={"/discover"}
                  className="flex items-center gap-1 cursor-pointer hover:font-semibold"
                >
                  <MdOutlineExplore />
                  Discover
                </Link>
              </li>
              {loggedInUser && (
                <li className="text-[18px] mt-4">
                  <Link
                    to={"/following"}
                    className="flex items-center gap-1 cursor-pointer hover:font-semibold"
                  >
                    <FaUsers />
                    Following
                  </Link>
                </li>
              )}
              <li className="text-[18px] mt-4">
                <Link
                  to={"/profile"}
                  className="flex items-center gap-1 cursor-pointer hover:font-semibold"
                >
                  <ImProfile />
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          {loggedInUser &&
            (isPremium ? (
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-1 cursor-pointer hover:font-semibold  mt-20"
              >
                <FaCrown className="h-7 w-7" />
                Premium Member
              </button>
            ) : (
              <button onClick={() => setShowModal(true)} className="mt-20">
                <div className="flex items-center gap-1 cursor-pointer hover:font-semibold">
                  <IoDiamond className="h-7 w-7" />
                  Upgrade to premium
                </div>
              </button>
            ))}
          <div className="mt-10">
            {loggedInUser ? (
              <Logout
                setIsUserLoggedIn={setIsUserLoggedIn}
                onLogout={onLogout}
              />
            ) : (
              <Link
                to={"/login"}
                className="outline rounded-xl py-2 px-5 hover:bg-black hover:outline-none hover:text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <MobileNav
        handleClick={handleClick}
        isMenu={isMenu}
        setIsMenu={setIsMenu}
        loggedInUser={loggedInUser}
        onLogout={onLogout}
        isPremium={isPremium}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Sidebar;
