import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="grid sm:grid-cols-2">
      <div className="lg:w-[50%] w-[70%]">
        <Sidebar />
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
