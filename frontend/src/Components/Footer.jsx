import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        
        <div className="md:w-1/2">
          <img src="../icons/logo.jpg" alt="Logo" className="w-[90px] mb-4" />
          <div className="flex space-x-4 my-4">
            <FaFacebook className="w-6 h-6" />
            <FaSquareInstagram className="w-6 h-6" />
            <FaSquareXTwitter className="w-6 h-6" />
            <IoLogoYoutube className="w-6 h-6"/>
            <FaLinkedin className="w-6 h-6"/>
          </div>
          <p className="text-sm text-gray-400">Copyright © 2025 Created By Team Tacos. All Rights Reserved.</p>
          <p className="mt-3 flex items-center">
            <SiGooglemeet className="w-5 mr-2"/>
            Google Meet!
          </p>
          <p className="mt-2 flex items-center">
            <FaPhoneAlt className="w-5 mr-2"/>
            +91-1234-567-890
          </p>
          <p className="mt-2 flex items-center">
            <IoMdMail className="w-5 mr-2"/>
            recipefinder@gmail.com
          </p>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 text-left">
          <h1 className="text-lg font-semibold">Our Newsletter</h1>
          <div className="w-16 h-1 bg-red-500 mt-1"></div>
          <p className="mt-3 text-gray-400">Enter Your Email to get our News and updates.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 w-full rounded-l-md bg-gray-800 text-white focus:outline-none"
            />
            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-r-md text-white font-medium">
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
