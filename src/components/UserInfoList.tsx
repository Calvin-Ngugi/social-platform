import { FaUser } from "react-icons/fa";
import FollowButton from "./FollowButton";
import { useEffect, useState } from 'react';

const UserInfo = ({ user, loggedInUser }: any) => {

  const [isFollowing, setIsFollowing] = useState(false);
  console.log(isFollowing);
  
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
    <div className="flex items-center gap-4 mt-10 w-[100%]">
      <div className="rounded-full outline p-2">
        <FaUser className="h-10 w-10" />
      </div>
      <div className="flex items-center justify-between w-[80%]">
        <div>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.address.street}</div>
        </div>
        <div>
          <FollowButton
            user={user}
            loggedInUser={loggedInUser}
            isFollowing={isFollowing}
            handleFollow={handleFollow}
            handleUnfollow={handleUnfollow}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
