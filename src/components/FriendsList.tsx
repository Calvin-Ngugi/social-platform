import { FaUser } from "react-icons/fa";

const FriendsList = ({users, followedUserIds}: any) => {
  const followedUsers = users.filter((user: any) =>
    followedUserIds.includes(user.id)
  );

  const displayFriends = followedUsers.map((user: any) => (
    <div key={user.id} className="mt-3 flex flex-col items-center cursor-pointer">
      <div className="p-2 rounded-full border-2 border-green-500">
        <FaUser className=" w-5 h-5" />
      </div>
      <div>{user.username}</div>
    </div>
  ));
  return (
    <div className="sm:mt-0 mt-12 sm:ms-0 ms-10 flex gap-7">
      {displayFriends}
    </div>
  )
}

export default FriendsList