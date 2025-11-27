"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#use-cases", label: "Use cases" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#features", label: "Features" },
  { href: "#socialtemp", label: "SocialTemp™" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="flex items-center justify-between max-w-[1380px] mx-auto px-5 md:px-10 h-[75px]">
        <Link href="/" className="flex items-center gap-3 text-2xl text-cc-dark">
          <Image
            src="/img/logo/chow-chow-logo.png"
            alt="CiaoCiao"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-serif font-semibold">CiaoCiao</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#get-started" className="btn btn-dark py-3 px-5 text-sm hidden lg:inline-flex">
          Get started FREE
        </Link>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-1.5 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className={`menu-bar origin-center transition-all duration-200 ${isMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
          <span className={`menu-bar transition-all duration-200 ${isMenuOpen ? "opacity-0 scale-0" : ""}`}></span>
          <span className={`menu-bar origin-center transition-all duration-200 ${isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[75px] bg-white z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-4 text-xl font-light text-cc-dark border-b border-black/10"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#get-started"
            className="btn btn-dark mt-6 justify-center"
            onClick={closeMenu}
          >
            Get started FREE
          </Link>
        </nav>
      </div>
    </header>
  );
}
