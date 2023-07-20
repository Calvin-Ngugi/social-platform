import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import Posts from "./Posts";

const Feed = () => {
    const [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
        axiosClient.get('/posts')
            .then(({ data }) => {
            setPosts(data);
        })
    }, [posts])

    const displayposts = posts.map(post => (
        <Posts posts={post} key={ post.id} />
    ))
  return (
      <div className="ms-10 mt-10">
          <h1 className="font-bold text-[32px]">My Feed</h1>
      {displayposts}
    </div>
  );
};

export default Feed;
