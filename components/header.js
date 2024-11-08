"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Uz from '../public/pngegg.png';
import Ru from '../public/ru.png'; 
import Eng from '../public/en.png'; 
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const links = {
    uz: [
      { path: "/", title: "Bosh sahifa" },
      { path: "/about", title: "Men haqimda" },
      { path: "/portfolio", title: "Portfolio" },
      { path: "/contact", title: "Aloqa" },
    ],
    ru: [
      { path: "/", title: "Главная" },
      { path: "/about", title: "Обо мне" },
      { path: "/portfolio", title: "Портфолия" },
      { path: "/contact", title: "Контакт" },
    ],
    en: [
      { path: "/", title: "Home" },
      { path: "/about", title: "About" },
      { path: "/portfolio", title: "Portfolio" },
      { path: "/contact", title: "Contact" },
    ],
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const getFlagImage = () => {
    switch (language) {
      case "uz":
        return Uz;
      case "ru":
        return Ru;
      case "en":
        return Eng;
      default:
        return Eng;
    }
  };

  return (
    <div className="container mx-auto">
      <header>
        <div className="flex justify-between items-center pt-3 pb-2">
          <div>
            <Link href="/">
              <p className="text-3xl sm:text-2xl lg:text-4xl font-semibold text-slate-400">
                Abdulatif
              </p>
            </Link>
          </div>

          <div className="hidden md:flex gap-2 pr-[100px] pt-[8px] text-slate-400 font-medium">
            {links[language].map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`w-[110px] flex items-center md:pl-[5px] rounded-[3px] h-[33px] transition-colors duration-300 ${
                  pathname === item.path ? "bg-slate-700 text-white" : "text-slate-400"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <div className="relative flex items-center">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center"
              >
                <Image src={getFlagImage()} alt={`${language} Bayrog'i`} width={20} height={20} />
                <span className="ml-1 text-slate-400">{language.toUpperCase()}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute w-[80px] mt-[100px] bg-slate-500 rounded-md shadow-lg">
                  <button
                    onClick={() => handleLanguageChange("uz")}
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <Image src={Uz} alt="O'zbek Bayrog'i" width={20} height={20} />
                    <span className="ml-2">UZ</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("ru")}
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <Image src={Ru} alt="Rossiya Bayrog'i" width={20} height={20} />
                    <span className="ml-2">РУ</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <Image src={Eng} alt="Ingliz Bayrog'i" width={20} height={20} />
                    <span className="ml-2">EN</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Menuni ochish">
              <HiOutlineMenu className="text-3xl text-slate-400 mt-[15px]" />
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-y-0 left-0 w-[70%] bg-slate-800 p-6 transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between">
            <p className="text-slate-300 text-[25px] font-semibold">Abdulatif</p>
            <div className="relative pt-2">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center"
              >
                <Image src={getFlagImage()} alt={`${language} Bayrog'i`} width={20} height={20} />
                <span className="ml-1 text-slate-400">{language.toUpperCase()}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute w-[55px] bg-slate-500 rounded-md shadow-lg">
                  <button
                    onClick={() => handleLanguageChange("uz")}
                    className="flex items-center px-4 py-2 hover:bg-slate-400"
                  >
                    <Image src={Uz} alt="O'zbek Bayrog'i" width={20} height={20} />
                  </button>
                  <button
                    onClick={() => handleLanguageChange("ru")}
                    className="flex items-center px-4 py-2 hover:bg-slate-400"
                  >
                    <Image src={Ru} alt="Rossiya Bayrog'i" width={20} height={20} />
                  </button>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="flex items-center px-4 py-2 hover:bg-slate-400"
                  >
                    <Image src={Eng} alt="Ingliz Bayrog'i" width={20} height={20} />
                  </button>
                </div>
              )}
            </div>
            <button onClick={toggleMenu} aria-label="Menuni yopish">
              <HiX className="text-3xl text-slate-400" />
            </button>
          </div>
          <hr className="lg:hidden mt-[10px] opacity-20" />

          <div className="flex flex-col gap-4 mt-6 text-white font-medium">
            {links[language].map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`block p-3 rounded-md transition-colors duration-300 ${
                  pathname === item.path ? "bg-slate-700 text-white" : "text-slate-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
