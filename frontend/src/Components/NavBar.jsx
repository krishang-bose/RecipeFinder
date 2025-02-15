import { NavBarMenu } from "../mockData/data";
import { FaSearch } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore"; // ✅ Import Auth Store
import { useNavigate } from "react-router-dom"; // ✅ For navigation
import { useEffect } from "react";

const NavBar = () => {
  const { authUser, logout } = useAuthStore(); // ✅ Access authUser & logoutUser
  const navigate = useNavigate(); // ✅ For navigation

  const handleLogout = async () => {
    console.log("Logout clicked"); // ✅ Debugging log
    await logout(); // ✅ Call the async logout function
    navigate("/login", { replace: true }); // ✅ Redirect to login
};


  useEffect(() => {
    if (!authUser) {
      navigate("/login", { replace: true }); // ✅ Redirect if user logs out
    }
  }, [authUser, navigate]);

  return (
    <>
      <nav className="bg-peach-100">
        <div className="container mx-auto flex justify-between items-center py-8 px-4 md:px-10">
          {/* Logo Section */}
          <div className="flex items-center gap-2 font-bold uppercase text-2xl flex-1">
            <img src="../icons/logo.jpg" alt="Logo" className="w-10 h-10" />
            <p>Chef</p>
            <p className="text-emerald-600">Mate</p>
          </div>

          {/* Menu Section */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-6 text-black">
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="inline-block py-1 px-3 hover:text-emerald-600 font-semibold">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <button className="text-2xl hover:bg-emerald-600 hover:text-white rounded-full p-2 duration-300">
              <FaSearch />
            </button>

            {/* ✅ Show "LOGOUT" if logged in, else show "LOGIN" */}
            {authUser ? (
              <button
                onClick={handleLogout} // ✅ Logout on click
                className="hover:bg-red-600 bg-red-500 text-white rounded-md border-2 border-red-600 px-6 py-2 duration-300 hidden md:block"
              >
                LOGOUT
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")} // ✅ Navigate to login
                className="hover:bg-emerald-600 hover:text-white rounded-md border-2 border-emerald-600 px-6 py-2 duration-300 hidden md:block"
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
