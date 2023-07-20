import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import axiosClient from "./AxiosClient";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")!);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!loggedInUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      });
  }, [users]);

  useEffect(() => {
    axiosClient.get("/posts?_limit=20").then(({ data }) => {
      setPosts(data);
    });
  }, [posts]);
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1">
      <div className="sm:w-[90%]">
        <Sidebar
          setIsUserLoggedIn={setIsUserLoggedIn}
          loggedInUser={loggedInUser}
        />
      </div>
      <div className="col-span-2">
        <Routes>
          <Route path="/*" element={<Home posts={posts} />} />
          <Route path="/discover" element={<Discover users={users} />} />
          <Route
            path="/profile"
            element={
              <Profile setIsUserLoggedIn={setIsUserLoggedIn} users={users} />
            }
          />
          <Route
            path="/login"
            element={
              <Login users={users} onLogin={() => setIsUserLoggedIn(true)} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
