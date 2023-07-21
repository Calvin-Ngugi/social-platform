const Logout = ({ onLogout }: any) => {
  return (
    <button
      className="outline rounded-xl py-2 px-5 hover:bg-black hover:outline-none hover:text-white"
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
