import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import Posts from "../components/Posts";

const Following = ({ loggedInUser, users, isPremium }: any) => {
  const [followingPosts, setFollowingPosts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the posts from the users that the logged-in user is following
    if (loggedInUser) {
      // Get the list of followed user IDs from localStorage
      const followedUserIds = users
        .filter(
          (user: any) => localStorage.getItem(`follow_${user.id}`) === "true"
        )
        .map((user: any) => user.id);
          console.log(followedUserIds);
          
      // Fetch posts from the followed users using the followedUserIds
      const postLimit = isPremium ? 100 : 20;
      axiosClient
        .get(`/posts?userId=${followedUserIds.join("&userId=")}&_limit=${postLimit}`)
        .then(({ data }) => {
          setFollowingPosts(data);
          console.log(data);
          
        })
        .catch((error) => {
          console.error("Error fetching followed users' posts:", error);
        });
    }
  }, [loggedInUser, users, isPremium]);

  const displayPosts = followingPosts.map((post: any) => (
    <Posts key={post.id} posts={post} />
  ));

  if (!followingPosts || followingPosts.length === 0) {
    return (
      <div className="sm:ms-0 ms-10 mt-20 text-[32px] font-semibold">
        Loading...
        <img src="hourglass.gif" alt="loading" className="mt-10" />
      </div>
    );
  }

  return (
    <div className="sm:ms-0 ms-10 mb-10 mt-20">
      <h1 className="text-[20px] font-semibold">
        Check out the posts from your followed users:
      </h1>
      {displayPosts}
    </div>
  );
};

export default Following;
