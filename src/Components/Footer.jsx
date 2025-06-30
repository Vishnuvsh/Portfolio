import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#005C97] to-[#363795] text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-3">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a 
            href="https://twitter.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a 
            href="mailto:vishnuvsh44@gmail.com" 
            className="hover:text-blue-300 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Vishnu All rights reserved.
        </p>
      </div>
    </footer>
  );
}