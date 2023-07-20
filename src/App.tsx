import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Discover from "./components/Discover";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="grid sm:grid-cols-3">
      <div className="w-[90%]">
        <Sidebar />
      </div>
      <div className="col-span-2">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
