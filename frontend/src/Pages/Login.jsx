import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";


function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Great Job!');
  };

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-fixed bg-gradient-to-r from-[#c8d932] to-[#c5ebbc]">
      <div className="w-[380px] h-[500px] bg-gradient-to-br from-[#c5ebbc] to-[#dae952] p-5 rounded-lg shadow-lg relative overflow-hidden">
        <div className="w-[220px] mx-auto mb-10 flex items-center justify-center rounded-full bg-[#d1d989] shadow-md relative">
          <div
            className={`absolute top-0 left-0 w-[110px] h-full bg-gradient-to-r from-[#d1d989] to-[#9da367] rounded-3xl transition-transform duration-500 ${isLogin ? 'translate-x-0' : 'translate-x-[110px]'}`}
          ></div>
          <button
            className="py-2 px-8 bg-transparent text-[#000] focus:outline-none z-10"
            onClick={toggleForm}
          >
            {isLogin ? 'Log In' : 'Register'}
          </button>
        </div>
        <div className="text-center mb-7 flex justify-center gap-4">
          <FaFacebook />
          <FaSquareInstagram />
          <FaSquareXTwitter />
        </div>
        <div className="relative w-full">
          <form
            onSubmit={handleSubmit}
            className={`absolute w-full px-6 transition-all duration-500 ${isLogin ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div className="mb-4 flex items-center">
              <FaUser className="w-5 pr-2" />
              <input
                type="text"
                className="w-full p-2 border-b-2 border-[#90AEAD] text-[#244855] focus:outline-none"
                placeholder="Username or Phone Number"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <TbLockPassword className="w-5 pr-2" />
              <input
                type="password"
                className="w-full p-2 border-b-2 border-[#90AEAD] text-[#000] focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember Password</span>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#c8d932] to-[#c8d932] text-[#000] rounded-3xl focus:outline-none"
            >
              Log In
            </button>
          </form>
          <form
            onSubmit={handleSubmit}
            className={`absolute w-full px-6 transition-all duration-500 ${!isLogin ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <input
              type="text"
              className="w-full p-2 mb-2 border-b-2 border-[#90AEAD] text-[#244855] focus:outline-none"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              className="w-full p-2 mb-2 border-b-2 border-[#90AEAD] text-[#244855] focus:outline-none"
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              className="w-full p-2 mb-2 border-b-2 border-[#90AEAD] text-[#244855] focus:outline-none"
              placeholder="Create Password"
              required
            />
            <input
              type="password"
              className="w-full p-2 mb-2 border-b-2 border-[#90AEAD] text-[#244855] focus:outline-none"
              placeholder="Confirm Password"
              required
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>I agree to the Terms & Conditions</span>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#c8d932] text-[#000] rounded-3xl focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
