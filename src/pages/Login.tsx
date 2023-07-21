import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ users, isLoading, onLogin }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("")
  const navigate = useNavigate();

  // Implement the login functionality using axiosClient
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!users || users.length === 0) {
      console.error("Users data is empty.");
      setErrors("Server delay in sending user data")
      return;
    }
    const matchedUser = users.find(
      (user: { username: string; address: { zipcode: string; }; }): any => user.username === username && user.address.zipcode === password
    );

    if (matchedUser) {
      // User login successful, store user data in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      onLogin();
      navigate("/profile")
    } else {
      setErrors("Invalid username or password.");
    }
  };

  if (isLoading) {
    return (
      <div className="sm:ms-0 ms-10 mt-20 text-[32px] font-semibold">
        Loading...
        <img src="hourglass.gif" alt="loading" className="mt-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-400 sm:-ms-28">
      <form
        className="min-h-screen flex flex-col items-center pt-28"
        onSubmit={handleLogin}
        >
        <div className="flex flex-col items-center justify-center border-2 border-slate-600 bg-white gap-5 sm:w-[40%] w-[65%] h-[25em] rounded-lg p-5">
        {errors && <div className="bg-red-300 px-4 rounded-md">{errors}</div>}
          <h1 className="text-[30px] font-bold">Login</h1>
          <div>
            <input
              type="text"
              placeholder="Enter your Username"
              className="border-2 outline-none border-slate-600 p-3 rounded-md"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your Password"
              className="border-2 outline-none border-slate-600 p-3 rounded-md"
              autoComplete="currentPassword"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="outline outline-blue-500 rounded-xl py-2 px-5 hover:bg-blue-500 hover:outline-none hover:text-white">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
