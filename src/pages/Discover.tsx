import UserInfo from "../components/UserInfo";

const Discover = ({ users }: any) => {
  const displayUsers = users.map((user: { id: any }) => (
    <UserInfo key={user.id} user={user} />
  ));
  return (
    <div className="mt-16 mb-5">
      <h1 className="text-[32px] font-bold">Discover New Friends</h1>
      {displayUsers}
    </div>
  );
};

export default Discover;
