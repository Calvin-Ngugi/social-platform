import { useNavigate } from "react-router-dom";

const Logout = ({ setIsUserLoggedIn }: any) => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsUserLoggedIn(false);
    navigate("/login");
  };
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
