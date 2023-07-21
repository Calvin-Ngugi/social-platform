import { FaUser } from "react-icons/fa";
import FollowButton from "./FollowButton";
const UserInfo = ({ user, loggedInUser}: any) => {
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
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
