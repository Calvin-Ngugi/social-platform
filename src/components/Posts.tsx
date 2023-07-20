import { FaUser, FaComments } from "react-icons/fa";
import {AiOutlineShareAlt } from "react-icons/ai";
import Like from "./Like";

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
      <div className="flex items-center justify-between">
        <Like />
        <div className="flex items-center gap-2">
          <FaComments className="cursor-pointer" /> Comment
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineShareAlt className="cursor-pointer" /> Share
        </div>
      </div>
    </div>
  );
};

export default Posts;
