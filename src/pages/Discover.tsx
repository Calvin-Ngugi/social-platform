import UserInfo from "../components/UserInfoList";

const Discover = ({ users, loggedInUser }: any) => {
  const displayUsers = users.map((user: { id: any }) => (
    <UserInfo key={user.id} user={user} loggedInUser={loggedInUser} />
  ));
  if (!users || users.length === 0) {
    return (
      <div className="sm:ms-0 ms-10 mt-20 text-[32px] font-semibold">
        Loading...
        <img src="hourglass.gif" alt="loading" className="mt-10" />
      </div>
    );
  }
  return (
    <div className="sm:ms-0 ms-10 mt-20 mb-5 xl:mr-0 mr-5">
      <h1 className="text-[32px] font-bold">Connect with all our users</h1>
      {displayUsers}
    </div>
  );
};

export default Discover;
