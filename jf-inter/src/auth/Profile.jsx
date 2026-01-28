import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import { apiFetch } from "../api/api";

// profile fetch karo from databse using token

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    apiFetch("/profile")
      .then(setUser)
      .catch(() => {
        logout();
        navigate("/login");
      });
  }, []);

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h3 className="text-lg font-medium">Loading...</h3>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          ID Profile
        </h2>

        <div className="space-y-2 text-gray-700">
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Role:</b> {user.role}
          </p>
        </div>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="mt-5 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
