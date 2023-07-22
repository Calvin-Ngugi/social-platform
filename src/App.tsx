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
  const [isLoading, setIsLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showPremiumPopup, setShowPremiumPopup] = useState(true);

  useEffect(() => {
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      });
  }, []);

  const postLimit = isPremium ? 100 : 20;

  useEffect(() => {
    axiosClient.get(`/posts?_limit=${postLimit}`).then(({ data }) => {
      setPosts(data);
    });
  }, [isPremium]);

  // Scroll event handler to detect when the user reaches the end of the posts
  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    const isAtBottom = scrollHeight - scrollTop === clientHeight;

    if (isAtBottom && !isPremium) {
      setShowPremiumPopup(true); // Show the premium popup when user reaches the end of the posts
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPremium]); // Re-add the event listener whenever the isPremiumMember state changes

  const handlePaymentSuccess = () => {
    setIsPremium(true);
    setShowModal(false);
  };

  const onUnsubscribe = () => { 
    setIsPremium(false);
    setShowModal(false);
  }

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
          <Route path="/*" element={<Home posts={posts} />} />
          <Route
            path="/discover"
            element={<Discover users={users} loggedInUser={loggedInUser} />}
          />
          <Route
            path="/following"
            element={<Following loggedInUser={loggedInUser} />}
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
