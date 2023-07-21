import { FaUser, FaComments } from "react-icons/fa";
import {AiOutlineShareAlt } from "react-icons/ai";
import Like from "./Like";
import { Link } from "react-router-dom";

const Posts = ({ posts }: any) => {
  
  return (
    <div className="rounded-md border-2 p-4 mt-10 w-[80%]">
      <div className="flex mb-5">
        <FaUser className="rounded-full outline p-1 w-7 h-7" />
        <h3 className="font-bold ms-5">{posts.title}</h3>
      </div>
      <div className="mb-5">
        <p>{posts.body}</p>
      </div>
      <div className="flex items-center cursor-pointer justify-between">
        <Like /> 
        <Link to={`/posts/${posts.id}`} className="flex items-center gap-2 cursor-pointer">
          <FaComments /> Comment
        </Link>
        <div className="flex items-center gap-2 cursor-pointer">
          <AiOutlineShareAlt /> Share
        </div>
      </div>
    </div>
  );
};

export default Posts;
