"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="flex items-center justify-between max-w-[1380px] mx-auto px-10 h-[75px]">
        <Link href="/" className="flex items-center gap-2.5 text-2xl font-semibold text-cc-dark">
          <svg
            className="text-cc-dark"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="12" r="3" fill="currentColor" />
            <circle cx="22" cy="12" r="3" fill="currentColor" />
            <path
              d="M8 20C8 20 12 26 16 26C20 26 24 20 24 20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>CiaoCiao.social</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <Link href="#how-it-works" className="nav-link">How it works</Link>
          <Link href="#use-cases" className="nav-link">Use Cases</Link>
          <Link href="#testimonials" className="nav-link">Testimonials</Link>
          <Link href="#socialtemp" className="nav-link">SocialTemp™</Link>
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#pricing" className="nav-link">Pricing</Link>
        </nav>

        <Link href="#get-started" className="btn btn-dark py-3 px-5 text-sm hidden lg:inline-flex">
          Get started free
        </Link>

        <button className="lg:hidden flex flex-col gap-1.5 p-1.5 bg-transparent border-none cursor-pointer" aria-label="Toggle menu">
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>
    </header>
  );
}
