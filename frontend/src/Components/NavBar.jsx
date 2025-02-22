import { NavBarMenu } from "../mockData/data";
import { FaSearch } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../icons/logo_no_bg.png";

const NavBar = () => {
  const { authUser, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleLogout = async () => {
    console.log("Logout clicked");
    await logout();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    if (!authUser) {
      navigate("/login", { replace: true });
    }
  }, [authUser, navigate]);

  // Dynamically generate menu items based on current route
  const getMenuItems = () => {
    if (isHomePage) {
      return [
        { id: "aboutus", title: "AboutUs", link: "/AboutUs" },
        ...NavBarMenu.filter(item => item.title !== "Home" && item.title !== "About Us")
      ];
    } else {
      return [
        { id: "home", title: "Home", link: "/" },
        ...NavBarMenu.filter(item => item.title !== "Home" && item.title !== "About Us")
      ];
    }
  };


  return (
    <nav className="bg-peach-100">
      <div className="container mx-auto flex justify-between items-center py-8 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2 font-bold uppercase text-2xl flex-1">
          {/* <img src="../icons/logo_no_bg.png" alt="Logo" className="w-10 h-10" /> */}
          <img src={logo} alt="Logo" className="w-22 h-15" />
          <p>Chef</p>
          <p className="text-emerald-600">Mate</p>
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6 text-black">
            {getMenuItems().map((item) => (
              <li key={item.id}>
                <a 
                  href={item.link} 
                  className="inline-block py-1 px-3 hover:text-emerald-600 font-semibold"
                >
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

          {authUser ? (
            <button
              onClick={handleLogout}
              className="hover:bg-red-600 bg-red-500 text-white rounded-md border-2 border-red-600 px-6 py-2 duration-300 hidden md:block"
            >
              LOGOUT
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hover:bg-emerald-600 hover:text-white rounded-md border-2 border-emerald-600 px-6 py-2 duration-300 hidden md:block"
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;