"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroled, setIsScrolled] = useState(false);

  // handle scrool effect
  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrool);
    return () => window.removeEventListener("scroll", handleScrool);
  }, []);

  // close mobile menu when navigating
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full transition-all duration-300 ${isScroled ? "bg-slate-800 shadow-lg" : "bg-slate-900 backdrop-blur-sm"}`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center ">
        <Link href={"/"} onClick={closeMobileMenu}>
          Sekolah Cerdas
        </Link>
        <div className=" flex gap-2 hidden md:flex ">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/activities"}>Activites</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>
      {isOpen && (
        <div className=" flex gap-2 md:hidden flex-col items-center ">
          <Link href={"/"} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href={"/about"} onClick={closeMobileMenu}>
            About Us
          </Link>
          <Link href={"/activities"} onClick={closeMobileMenu}>
            Activites
          </Link>
          <Link href={"/news"} onClick={closeMobileMenu}>
            News
          </Link>
          <Link href={"/contact"} onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
