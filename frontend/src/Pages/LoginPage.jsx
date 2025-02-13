import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    if(!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if(!formData.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateForm()){
      await login(formData);
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
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-green-800">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-green-300 text-green-500 focus:ring-green-400"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a 
              href="/forgot-password" 
              className="text-green-600 hover:text-green-500 
              transition duration-300 font-semibold hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button 
            type="submit" 
            disabled={isLoggingIn}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-lg 
            hover:from-green-400 hover:to-green-300 transition duration-300 
            flex items-center justify-center font-semibold
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
          >
            {isLoggingIn ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-green-800">
            Don&apos;t have an account?{' '}
            <a 
              href="/signup" 
              className="text-green-600 hover:text-green-500 
              transition duration-300 font-semibold
              hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;