import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Discover from "./components/Discover";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { useEffect, useState } from 'react';
import axiosClient from "./AxiosClient";

const App = () => {
const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
      // Fetch all users from the JSONPlaceholder API using axiosClient
      axiosClient
        .get("/users")
        .then((res) => setUsers(res.data))
        .catch((error) => console.error("Error fetching users:", error));
    }, []);
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1">
      <div className="sm:w-[90%]">
        <Sidebar />
      </div>
      <div className="col-span-2">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login users={users}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
