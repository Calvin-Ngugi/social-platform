import UserProfile from "../components/UserProfile";
import Login from "./Login";

const Profile = ({ setIsUserLoggedIn, users, loggedInUser }:any) => {
  return (
    <div>
      {loggedInUser ? (
        <UserProfile userId={loggedInUser.id} />
      ) : (
        <Login users={users} onLogin={() => setIsUserLoggedIn(true)} />
      )}
    </div>
  );
};

export default Profile