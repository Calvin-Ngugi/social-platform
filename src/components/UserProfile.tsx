import { useState, useEffect } from "react";
import axiosClient from "../AxiosClient";

const UserProfile = ({ userId }: any) => {
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    // Fetch the specific user's details from the JSONPlaceholder API using axiosClient
    axiosClient
      .get(`/users/${userId}`)
      .then((response) => setUserProfile(response.data))
      .catch((error) => console.error("Error fetching user profile:", error));
  }, [userId]);

  if (!userProfile) {
    return (
      <div className="sm:ms-0 ms-10 mt-20 text-[32px] font-semibold">
        Loading...
        <img src="hourglass.gif" alt="loading" className="mt-10" />
      </div>
    );
  }

  return (
    <div className="sm:ms-0 ms-10 mt-20">
      <h1 className="text-[32px] font-bold">User Profile</h1>
      <p>Name: {userProfile.name}</p>
      <p>Username: {userProfile.username}</p>
      <p>Email: {userProfile.email}</p>
      <p>Phone Number: {userProfile.phone}</p>
      <p>Password: {userProfile.address.zipcode}</p>
      <p>City: {userProfile.address.city}</p>
      <p>Street: {userProfile.address.street}</p>
      {/* Display other profile details */}
    </div>
  );
};

export default UserProfile;
