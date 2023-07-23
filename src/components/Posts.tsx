import { FaUser, FaRegComments } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import Like from "./Like";
import { Link } from "react-router-dom";
import axiosClient from "../AxiosClient";
import { useState, useEffect } from 'react';

const Posts = ({ posts }: any) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    // Fetch the user data using the `userId` from the post
    axiosClient
      .get(`/users/${posts.userId}`)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [posts.userId]);

  return (
    <div className="rounded-md border-2 p-4 mt-10 w-[80%]">
      <div className="flex mb-3">
        <FaUser className="rounded-full outline p-1 w-7 h-7" />
        {user && <p className="font-semibold ms-2"> {user.username}</p>}
      </div>
      <div className="flex mb-3">
        <h3 className="font-bold">{posts.title}</h3>
      </div>
      <div className="mb-5">
        <p>{posts.body}</p>
      </div>
      <div className="flex items-center cursor-pointer justify-between">
        <Like />
        <Link
          to={`/posts/${posts.id}`}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaRegComments /> Comment
        </Link>
        <div className="flex items-center gap-2 cursor-pointer">
          <AiOutlineShareAlt /> Share
        </div>
      </div>
    </div>
  );
};

export default Posts;
