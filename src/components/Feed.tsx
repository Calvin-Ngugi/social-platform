import Posts from "./Posts";

const Feed = ({ posts }: any) => {
  const displayposts = posts.map((post: { id: any }) => (
    <Posts posts={post} key={post.id} />
  ));
  
  if (!posts || posts.length === 0) {
    return (
      <div className="sm:ms-0 ms-10 mt-20 text-[32px] font-semibold">
        Loading...
        <img src="hourglass.gif" alt="loading" className="mt-10" />
      </div>
    );
  }

  return (
    <div className="sm:ms-0 ms-10 mb-10 mt-12">
      <h1 className="font-bold text-[32px]">Feed</h1>
      {displayposts}
    </div>
  );
};

export default Feed;
