import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Discover from "./components/Discover";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import axiosClient from "./AxiosClient";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    axiosClient.get("/users")
      .then(({ data }) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    axiosClient.get("/posts?_limit=20").then(({ data }) => {
      setPosts(data);
    });
  }, [posts]);
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1">
      <div className="sm:w-[90%]">
        <Sidebar />
      </div>
      <div className="col-span-2">
        <Routes>
          <Route path="/*" element={<Home posts={posts} />} />
          <Route path="/discover" element={<Discover users={users} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login users={users} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
