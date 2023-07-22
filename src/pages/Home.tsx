import { useEffect } from "react";
import Feed from "../components/Feed";
import FriendsList from "../components/FriendsList";

const Home = ({ posts, isPremium, setShowModal, users, followedUserIds}: any) => {
  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    console.log(scrollHeight, scrollTop, clientHeight);

    const isAtBottom = scrollHeight - Math.round(scrollTop) <= clientHeight;
    console.log(isAtBottom);

    if (isAtBottom && !isPremium) {
      setShowModal(true); // Show the premium popup when user reaches the end of the posts
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPremium]);
  return (
    <div>
      <FriendsList users={users} followedUserIds={followedUserIds} />
      <Feed posts={posts} />
    </div>
  );
};

export default Home;
