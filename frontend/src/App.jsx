import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function App() {
  const { authUser, checkAuth, isCheckingAuth} = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({authUser});
  if(isCheckingAuth && authUser === null){ return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )}
  return (
    //shrey add navbar here
    <div>
      <Routes>
        <Route path="/" element={authUser?<HomePage />: <Navigate to= "/signup"/>} />
        <Route path="/signup" element={!authUser? <SignupPage />: <Navigate to="/"/>} />
        <Route path="/login" element={!authUser? <LoginPage />: <Navigate to="/"/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
