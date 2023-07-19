const Sidebar = () => {
  return (
    <div className="hidden min-h-screen lg:w-[20%] w-[30%] bg-blue-500 md:flex">
      <div className="flex flex-col items-center w-[100%] mt-28">
        <div>
          <div className="text-center font-semibold text-[28px]">
            Connectify
          </div>
          <ul className="gap-5">
            <li className="text-[18px] mt-4">
              <span className="cursor-pointer hover:font-semibold">Home</span>
            </li>
            <li className="text-[18px] mt-4">
              <span className="cursor-pointer hover:font-semibold">
                Discover
              </span>
            </li>
            <li className="text-[18px] mt-4">
              <span className="cursor-pointer hover:font-semibold">
                Profile
              </span>
            </li>
            <div className="mt-10">
              <button className="outline rounded-xl py-2 px-5 hover:bg-black hover:outline-none hover:text-white">Logout</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
