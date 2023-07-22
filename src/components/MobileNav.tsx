import { BiMenuAltLeft } from "react-icons/bi";
import { FaCrown } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileNav = ({
  handleClick,
  isMenu,
  setIsMenu,
  loggedInUser,
  onLogout,
  isPremium,
  setShowModal,
}: any) => {
  return (
    <div className="bg-blue-500 flex fixed sm:hidden justify-between w-[100%] m-auto pt-2 pb-3">
      <div className="sm:hidden ms-3 flex justify-between w-[100%]">
        <button onClick={handleClick}>
          <BiMenuAltLeft className="border-none w-[50px] h-8" />
        </button>
        {isPremium ? (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1 mr-4"
          >
            <FaCrown className="h-7 w-7" />
            Premium Member
          </button>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1 cursor-pointer hover:font-semibold mr-4"
          >
            <IoDiamond className="h-7 w-7" />
            Upgrade to premium
          </button>
        )}
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
  );
};

export default MobileNav;
