import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import lkFlag from "../assets/lk.webp";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center">
        <div className='flex flex-row gap-2 text-sm text-black justify-center flex-wrap dark:text-gray-100'>
            
        <Link to="/how-to-use">How to use?</Link>
        <span className="mx-1 hidden sm:block text-gray-500 opacity-25 ">｜</span>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
        <span className="mx-1 hidden sm:block text-gray-500 opacity-25 ">｜</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span className="mx-1 hidden sm:block text-gray-500 opacity-25 ">｜</span>
        <Link to="https://rapidapi.com/IsPra94/api/tinywebp">API</Link>
        <span className="mx-1 hidden sm:block text-gray-500 opacity-25 ">｜</span>
        <Link to="https://tinywebp.instatus.com/">Status</Link>
        </div>
        <hr className="border-t-1 border-solid border-gray-500 opacity-25 w-72 sm:w-96 my-4" />
        <p className="text-sm text-gray-800 dark:text-gray-400 flex items-center gap-2 flex-col sm:flex-row">
          <span>© {new Date().getFullYear()} All rights reserved - <a href="https://isuru.info" className="hover:text-blue-500 hover:underline transition-colors">Isuru Prabath</a></span>
          <span className="mx-1 hidden sm:block">•</span>
          <span className="mx-1 flex flex-row gap-1 items-center">
            Made with <Heart fill="#f44336" className="w-4 h-4 text-red-500 animate-pulse" /> in
            <img src={lkFlag} alt='Sri Lanka' className='ml-1 w-5 h-5'/>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
