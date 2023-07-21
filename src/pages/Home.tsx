import Feed from "../components/Feed";
import FriendsList from "../components/FriendsList";

const Home = ({posts}: any) => {
  return (
    <div>
      <FriendsList />
      <Feed posts={ posts } />
    </div>
  );
};

export default Home;
