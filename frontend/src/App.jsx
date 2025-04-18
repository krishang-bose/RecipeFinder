import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { useAuthStore } from './store/useAuthStore';
import NavBar from './Components/NavBar';
import { useEffect } from 'react';
import { Loader, Timer } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import AboutUs from './pages/AboutUs';
import Footer from './Components/Footer';
import ChillCorner from './Pages/ChillCorner';
import Timer1 from './Pages/Timer1';
import Map from './Pages/Map';
import CommunityCorner from './Pages/CommunityCorner';
import MyRecipeDiary, { CreateRecipe, RecipeDetail } from './Pages/MyRecipe';
import CookingCourses from'./Pages/CookingCourses';
import RecipeSearch from './Pages/SearchBar';


function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && authUser === null) { 
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return <MainContent authUser={authUser} />;
}

const MainContent = ({ authUser }) => {
  const location = useLocation();
  const hideNavBar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/AboutUs" element={authUser ? <AboutUs /> : <Navigate to="/signup" />} />
        <Route path="/ChillCorner"element={authUser ? <ChillCorner /> : <Navigate to="/signup" />}/>
        <Route path="/MyRecipeDiary"element={authUser ? <MyRecipeDiary /> : <Navigate to="/signup" />}/>
        <Route path="/Timer1"element={authUser ? <Timer1 /> : <Navigate to="/signup" />}/>
        <Route path="/Map"element={authUser ? <Map /> : <Navigate to="/signup" />}/>
        <Route path="/CommunityCorner"element={authUser ? <CommunityCorner /> : <Navigate to="/signup" />}/>
        <Route path="/Courses"element={authUser ? <CookingCourses/> : <Navigate to="/signup" />}/>
        <Route path="/MyRecipeDiary"element={authUser ? <RecipeDetail/> : <Navigate to="/signup" />}/>
        <Route path="/CreateRecipe"element={authUser ? <CreateRecipe/> : <Navigate to="/signup" />}/>
        <Route path="/recipe/:id"element={authUser ? <RecipeDetail/> : <Navigate to="/signup" />}/>
        <Route path="/Search"element={authUser ? <RecipeSearch/> : <Navigate to="/signup" />}/>
        
      </Routes>
      <Footer/>
      <Toaster />
    </div>
  );
};

MainContent.propTypes = {
  authUser: PropTypes.any, 
};

export default App;
