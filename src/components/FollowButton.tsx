import { useEffect, useState } from "react";

const FollowButton = ({ user, loggedInUser }: any) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Check if the current user is following the user on component mount
    setIsFollowing(localStorage.getItem(`follow_${user.id}`) === "true");
  }, [user.id]);

  const handleFollow = () => {
    setIsFollowing(true);
    localStorage.setItem(`follow_${user.id}`, "true");
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    localStorage.removeItem(`follow_${user.id}`);
  };

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