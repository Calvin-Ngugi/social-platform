import Posts from "./Posts";

const Feed = ({ posts }: any) => {
    const displayposts = posts.map((post: { id: any; }) => (
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
