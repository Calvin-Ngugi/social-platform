import { useState, useEffect } from "react";
import axiosClient from "../AxiosClient";
import Posts from "./Posts";

const UserProfile = ({ userId }: any) => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the specific user's details from the JSONPlaceholder API using axiosClient
    axiosClient
      .get(`/users/${userId}`)
      .then((response) => setUserProfile(response.data))
      .catch((error) => console.error("Error fetching user profile:", error));
  }, [userId]);

  useEffect(() => {
    axiosClient.get("/posts").then(({ data }) => {
      setPosts(data);
    });
  }, [posts]);

  const userPosts = posts.filter((post: any) => {
    return post.userId === userId;
  });
  
  const displayPosts = userPosts.map((post: { id: any }) => (
    <Posts posts={post} key={post.id} />
  ));

  if (!userProfile) {
    return (
      <div className="sm:ms-0 ms-10 mt-20 text-[32px] font-semibold">
        Loading...
        <img src="hourglass.gif" alt="loading" className="mt-10" />
      </div>
    );
  }

  return (
    <div className="sm:ms-0 ms-10 mt-20 mb-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[32px] font-bold">User Profile</h1>
        <p>Name: {userProfile.name}</p>
        <p>Username: {userProfile.username}</p>
        <p>Email: {userProfile.email}</p>
        <p>Phone Number: {userProfile.phone}</p>
        <p>City: {userProfile.address.city}</p>
        <p>Street: {userProfile.address.street}</p>
        {/* Display other profile details */}
      </div>
      <div>
        <h3 className="mt-16 text-[28px] font-semibold">Your Posts</h3>
        {displayPosts}
      </div>
    </div>
  );
};

export default UserProfile;
