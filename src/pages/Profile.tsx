import UserProfile from "../components/UserProfile";
import Login from "./Login";

const Profile = ({ setIsUserLoggedIn, users }:any) => {
  // Check if a user is already logged in
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")!);

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