const Posts = ({ posts }: any) => {
  return (
    <div className="rounded-md border-2 p-4 mt-10 w-[80%]">
      <div className="flex justify-between mb-5">
        <img
          src="vite.svg"
          alt="placeholder"
          height={30}
          className="rounded-full outline"
        />
        <h3 className="font-bold">{posts.title}</h3>
      </div>
      <div className="mb-5">
        <p>{posts.body}</p>
      </div>
    </div>
  );
};

export default Posts;
