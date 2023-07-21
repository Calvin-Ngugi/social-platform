import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import Logout from "./Logout";
import { useState } from "react";

const Sidebar = ({ setIsUserLoggedIn, loggedInUser }: any) => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsUserLoggedIn(false);
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
                <Link to={"/"} className="cursor-pointer hover:font-semibold">
                  Home
                </Link>
              </li>
              <li className="text-[18px] mt-4">
                <Link
                  to={"/discover"}
                  className="cursor-pointer hover:font-semibold"
                >
                  Discover
                </Link>
              </li>
              <li className="text-[18px] mt-4">
                <Link
                  to={"/following"}
                  className="cursor-pointer hover:font-semibold"
                >
                  Following
                </Link>
              </li>
              <li className="text-[18px] mt-4">
                <Link
                  to={"/profile"}
                  className="cursor-pointer hover:font-semibold"
                >
                  Profile
                </Link>
              </li>
              <div className="mt-10">
                {loggedInUser ? (
                  <Logout setIsUserLoggedIn={setIsUserLoggedIn} />
                ) : (
                  <Link
                    to={"/login"}
                    className="outline rounded-xl py-2 px-5 hover:bg-black hover:outline-none hover:text-white"
                  >
                    Login
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-blue-500 flex fixed sm:hidden justify-between w-[100%] m-auto pt-2 pb-3">
        <div onClick={handleClick} className="sm:hidden cursor-pointer ms-3">
          <BiMenuAltLeft className="border-none w-[50px] h-8" />
        </div>
        <div>
          {isMenu && (
            <div className="bg-white w-30 shadow-xl flex flex-col rounded-lg absolute top-11 left-5">
              <ul className="flex flex-col gap-5 px-8 py-4">
                <li
                  className="cursor-pointer hover:font-medium hover:underline"
                  onClick={() => setIsMenu(false)}
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  className="cursor-pointer hover:font-medium hover:underline"
                  onClick={() => setIsMenu(false)}
                >
                  <Link to={"/discover"}>Discover</Link>
                </li>
                <li
                  className="cursor-pointer hover:font-medium hover:underline"
                  onClick={() => setIsMenu(false)}
                >
                  <Link to={"/following"}>Following</Link>
                </li>
                <li
                  className="cursor-pointer hover:font-medium hover:underline"
                  onClick={() => setIsMenu(false)}
                >
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <li
                  className="cursor-pointer hover:font-medium hover:underline"
                  onClick={() => setIsMenu(false)}
                >
                  {loggedInUser ? (
                    <div onClick={onLogout}>Logout</div>
                  ) : (
                    <Link to={"/login"} className="">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
