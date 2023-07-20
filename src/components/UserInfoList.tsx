import { FaUser } from "react-icons/fa";
const UserInfo = ({ user, loggedInUser }: any) => {
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
          {loggedInUser ? (
            <button
              className="bg-blue-500 rounded-lg p-2 hover:bg-blue-700"
            >
              Follow
            </button>
          ) : (
            <button className="bg-slate-500 rounded-lg p-2 cursor-not-allowed" disabled>
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
