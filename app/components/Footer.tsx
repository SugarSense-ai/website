"use client"
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

function Footer() {
  return (
    <div id="contact" className="flex flex-col md:flex-row justify-between items-center p-4 md:py-2 w-full font-semibold text-center bg-gradient-to-b from-[#a7d5e2] to-gray-400 dark:from-[#a7d5e2] dark:to-gray-400">
      <div className="mb-4 md:mb-0">
        <a href="/">
          <Image
            className="border border-transparent"
            src="/sugar-sense-ai-logo.png"
            alt="logo"
            width={60}
            height={60}
          />
        </a>
      </div>

      <div className="text-sm md:text-base text-text-[#103d50] dark:text-text-[#103d50] mb-4 md:mb-0">
        © 2025-2026 SugarSense.ai™. All Rights Reserved.
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-6">
        <a href="https://x.com" target="_blank" rel="noreferrer">
          <SiX className="text-lg md:text-xl cursor-pointer text-text-[#103d50] hover:text-blue-600 transition duration-300" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="text-lg md:text-xl cursor-pointer text-text-[#103d50] hover:text-blue-600 transition duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="text-lg md:text-xl cursor-pointer text-text-[#103d50] hover:text-purple-600 transition duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-lg md:text-xl cursor-pointer text-text-[#103d50] hover:text-blue-600 transition duration-300" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube className="text-lg md:text-xl cursor-pointer text-text-[#103d50] hover:text-red-600 transition duration-300" />
        </a>
      </div>

    </div>
  );
}

export default Footer;