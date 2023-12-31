import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import axiosClient from "./AxiosClient";
import Following from "./pages/Following";
import SinglePost from "./pages/SinglePost";
import PremiumPaymentModal from "./components/PremiumPaymentModal";

const App = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  // Check if a user is already logged in
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")!);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!loggedInUser);
  const [isPremium, setIsPremium] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [followingPosts, setFollowingPosts] = useState<any[]>([]);

  useEffect(() => {
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const postLimit = isPremium ? 100 : 20;

  useEffect(() => {
    axiosClient.get(`/posts?_limit=${postLimit}`).then(({ data }) => {
      setPosts(data);
    });
  }, [isPremium]);

  // Get the list of followed user IDs from localStorage
  const followedUserIds = users
    .filter((user: any) => localStorage.getItem(`follow_${user.id}`) === "true")
    .map((user: any) => user.id);

  useEffect(() => {
    // Fetch the posts from the users that the logged-in user is following
    if (loggedInUser) {
      // Fetch posts from the followed users using the followedUserIds
      const postLimit = isPremium ? 100 : 20;
      axiosClient
        .get(
          `/posts?userId=${followedUserIds.join(
            "&userId="
          )}&_limit=${postLimit}`
        )
        .then(({ data }) => {
          setFollowingPosts(data);
        })
        .catch((error) => {
          console.error("Error fetching followed users' posts:", error);
        });
    }
  }, [loggedInUser, users, isPremium, isUserLoggedIn]);
  // Scroll event handler to detect when the user reaches the end of the posts
  // Re-add the event listener whenever the isPremiumMember state changes

  const handlePaymentSuccess = () => {
    setIsPremium(true);
    setShowModal(false);
  };

  const onUnsubscribe = () => {
    setIsPremium(false);
    setPaymentStatus(null);
    setShowModal(false);
  };

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1">
      <div className="sm:w-[90%]">
        <Sidebar
          setIsUserLoggedIn={setIsUserLoggedIn}
          loggedInUser={loggedInUser}
          setIsPremium={setIsPremium}
          setShowModal={setShowModal}
          isPremium={isPremium}
        />
      </div>
      <div className="col-span-2">
        {showModal && (
          <PremiumPaymentModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onPaymentSuccess={handlePaymentSuccess}
            paymentStatus={paymentStatus}
            setPaymentStatus={setPaymentStatus}
            onUnsubscribe={onUnsubscribe}
          />
        )}
        <Routes>
          <Route
            path="/*"
            element={
              <Home
                posts={posts}
                users={users}
                followedUserIds={followedUserIds}
                setShowModal={setShowModal}
                isPremium={isPremium}
              />
            }
          />
          <Route
            path="/discover"
            element={<Discover users={users} loggedInUser={loggedInUser} />}
          />
          {loggedInUser && (
            <>
              <Route
                path="/following"
                element={<Following followingPosts={followingPosts} />}
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    setIsUserLoggedIn={setIsUserLoggedIn}
                    users={users}
                    loggedInUser={loggedInUser}
                    posts={posts}
                  />
                }
              />
            </>
          )}
          <Route
            path="/posts/:id"
            element={<SinglePost loggedInUser={loggedInUser} />}
          />
          <Route
            path="/login"
            element={
              <Login users={users} onLogin={() => setIsUserLoggedIn(true)} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
