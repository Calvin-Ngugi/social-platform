import { Link } from "react-router-dom";
import Logout from "./Logout";

const Sidebar = ({ setIsUserLoggedIn, loggedInUser }: any) => {
  return (
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
  );
};

export default Sidebar;
