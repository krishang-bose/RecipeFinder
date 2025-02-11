import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-hot-toast';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "", 
    email: "", 
    password: ""
  });
  const { signup, isSigningIn } = useAuthStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    if(!formData.fullName.trim()) {
      toast.error("Full Name is required");
      return false;
    }
    if(!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if(!formData.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if(formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateForm()){
      await signup(formData);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-br from-green-200 via-green-100 to-yellow-100">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-300/30 via-yellow-200/30 to-green-200/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(134,239,172,0.2),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(253,224,71,0.2),transparent_40%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl border border-green-100 p-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white/70 text-green-900 border border-green-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-green-400 
              placeholder-green-600/50 transition duration-300"
            />
          </div>

          <div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-white/70 text-green-900 border border-green-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-green-400 
              placeholder-green-600/50 transition duration-300"
            />
          </div>

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 bg-white/70 text-green-900 border border-green-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-green-400 
              placeholder-green-600/50 transition duration-300"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button 
            type="submit" 
            disabled={isSigningIn}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-lg 
            hover:from-green-400 hover:to-green-300 transition duration-300 
            flex items-center justify-center font-semibold
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
          >
            {isSigningIn ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-green-800">
            Already have an account?{' '}
            <a 
              href="/login" 
              className="text-green-600 hover:text-green-500 
              transition duration-300 font-semibold
              hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;