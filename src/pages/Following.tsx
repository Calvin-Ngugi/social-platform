import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import Posts from "../components/Posts";

const Following = ({ loggedInUser }: any) => {
  const [followingPosts, setFollowingPosts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the posts from the users that the logged-in user is following
    if (loggedInUser) {
      // Get the list of followed user IDs from localStorage
      const followedUserIdsStr = localStorage.getItem(
        `followed_users_${loggedInUser.id}`
      );
      const followedUserIds = followedUserIdsStr
        ? followedUserIdsStr.split(",")
        : [];
        console.log(followedUserIdsStr);
        
      // Fetch posts from the followed users using the followedUserIds
      axiosClient
        .get(`/posts?userId=${followedUserIds.join("&userId=")}`)
        .then(({ data }) => {
          setFollowingPosts(data);
        })
        .catch((error) => {
          console.error("Error fetching followed users' posts:", error);
        });
    }
  }, [loggedInUser]);

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
    <div>
      <h1>Following Posts</h1>
      {displayPosts}
    </div>
  );
};

export default Following;
