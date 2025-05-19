"use client"
import { useState } from "react";
import useTheme from "../hooks/useTheme";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme } = useTheme();
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpenMenu(false);
    }
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-10 flex justify-between font-semibold items-center px-4 py-2 md:px-10 md:py-2 bg-gradient-to-b from-gray-400 to-[#a7d5e2] dark:from-gray-400 dark:to-[#a7d5e2]">
        <div className="flex items-center gap-4">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/sugar-sense-ai-logo.png" alt="logo" width={60} height={60} className="border border-transparent" />
            </a>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 md:gap-6 ml-auto">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-[#103d50] dark:text-[#103d50] text-base md:text-lg lg:text-xl hover:underline"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-[#103d50] dark:text-[#103d50] text-base md:text-lg lg:text-xl hover:underline"
          >
            Contact Us
          </button>
        </nav>

        <div className="md:hidden flex items-center">
          <button title="Toggle Menu" onClick={toggleMenu} className="flex flex-col gap-1.5">
            <div className={`w-6 h-0.5 rounded transition-all duration-300 ease-in-out ${theme === "dark" ? "bg-gray-200" : "bg-white"} ${openMenu ? "rotate-45 translate-y-1.5" : "rotate-0"}`}></div>
            <div className={`w-6 h-0.5 rounded transition-all duration-300 ease-in-out ${theme === "dark" ? "bg-gray-200" : "bg-white"} ${openMenu ? "opacity-0" : "opacity-100"}`}></div>
            <div className={`w-6 h-0.5 rounded transition-all duration-300 ease-in-out ${theme === "dark" ? "bg-gray-200" : "bg-white"} ${openMenu ? "-rotate-45 -translate-y-1.5" : "rotate-0"}`}></div>
          </button>
        </div>
        
        <div className={`absolute top-full left-0 w-full bg-white dark:bg-gray-100 shadow-lg transition-transform duration-300 ${openMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"} md:hidden`}>
          <nav className="flex flex-col items-center gap-4 py-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-[#103d50] dark:text-[#103d50] text-lg hover:underline"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#103d50] dark:text-[#103d50] text-lg hover:underline"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;