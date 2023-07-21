import UserProfile from "../components/UserProfile";
import Login from "./Login";

const Profile = ({ setIsUserLoggedIn, users, loggedInUser, posts }:any) => {
  return (
    <div>
      {loggedInUser ? (
        <UserProfile userId={loggedInUser.id} posts={posts} />
      ) : (
        <Login users={users} onLogin={() => setIsUserLoggedIn(true)} />
      )}
    </div>
  );
};

export default Profile