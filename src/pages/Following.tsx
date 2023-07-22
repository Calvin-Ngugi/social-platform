
import Posts from "../components/Posts";

const Following = ({ followingPosts }: any) => {


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
