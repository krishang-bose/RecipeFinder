import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { useAuthStore } from './store/useAuthStore';
import NavBar from './Components/NavBar';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types'; // ✅ Import PropTypes

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
      </Routes>
      <Toaster />
    </div>
  );
};

// ✅ Define PropTypes
MainContent.propTypes = {
  authUser: PropTypes.any, // You can change 'any' to a more specific type if needed
};

export default App;
