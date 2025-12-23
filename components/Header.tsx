"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/retroui/Button";

const navLinks = [
  { href: "#use-cases", label: "Use cases" },
  { href: "#how-it-works", label: "How it works" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-[40px] left-0 right-0 z-50 bg-background border-b-2 border-border">
      <div className="flex items-center justify-between max-w-[1380px] mx-auto px-5 md:px-10 h-[75px]">
        <Link href="/" className="flex items-center gap-3 text-2xl text-foreground">
          <Image
            src="/img/logo/chow-chow-logo.png"
            alt="CiaoCiao"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="font-head font-normal">CiaoCiao</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden lg:inline-flex">
          <a href="mailto:requests@ciaociao.social?subject=Early%20Bird%20Access%20Request%20-%2014-Day%20Free%20Trial%20%2B%2030%25%20Discount">Get started FREE</a>
        </Button>

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
        className={`lg:hidden fixed inset-0 top-[115px] bg-background z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-4 text-xl font-normal text-foreground border-b border-border/20"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-6 justify-center">
            <a href="mailto:requests@ciaociao.social?subject=Early%20Bird%20Access%20Request%20-%2014-Day%20Free%20Trial%20%2B%2030%25%20Discount" onClick={closeMenu}>
              Get started FREE
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
