const FollowButton = ({
  user,
  loggedInUser,
  isFollowing,
  handleFollow,
  handleUnfollow,
}: any) => {
  return (
    <>
      {loggedInUser ? (
        user.id === loggedInUser.id ? (
          <div></div>
        ) : isFollowing ? (
          <button
            className="bg-slate-500 rounded-lg p-2 hover:bg-slate-700"
            onClick={handleUnfollow}
          >
            Following
          </button>
        ) : (
          <button
            className="bg-blue-500 rounded-lg p-2 hover:bg-blue-700"
            onClick={handleFollow}
          >
            Follow
          </button>
        )
      ) : (
        <button
          className="bg-slate-500 rounded-lg p-2 cursor-not-allowed"
          disabled
        >
          Follow
        </button>
      )}
    </>
  );
};

export default FollowButton;
