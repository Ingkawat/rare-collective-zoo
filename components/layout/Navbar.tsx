"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Globe } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      <div className="flex h-20 items-center justify-between px-6 lg:px-12 lg:px-24">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.png" alt="zoo" width={45} height={45} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 lg:gap-8 text-sm text-white/80">
          <a href="https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef" className="hover:text-white transition-colors">
            New arrival
          </a>
          <a href="https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef" className="hover:text-white transition-colors">
            Available
          </a>
          <a href="" className="hover:text-white transition-colors">
            Import & Export Service
          </a>
          <a href="" className="hover:text-white transition-colors">
            Articles
          </a>
          <a href="/ourstory" className="hover:text-white transition-colors">
            Our story
          </a>
          <a href="https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef" className="hover:text-white transition-colors">
            Contact us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white/80 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Language Selector */}
        <div className="hidden lg:flex items-center gap-1 text-sm text-white/80 cursor-pointer">
          <Globe className="h-4 w-4 opacity-80" />
          <span>EN</span>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="flex flex-col px-6 py-4 space-y-3 text-sm text-white/80">
            <a href="https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef" className="hover:text-white transition-colors py-2">
              New arrival
            </a>
            <a href="https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef" className="hover:text-white transition-colors py-2">
              Available
            </a>
            <a href="#" className="hover:text-white transition-colors py-2">
              Import & Export Service
            </a>
            <a href="#" className="hover:text-white transition-colors py-2">
              Articles
            </a>
            <a href="/ourstory" className="hover:text-white transition-colors py-2">
              Our story
            </a>
            <a href="https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef" className="hover:text-white transition-colors py-2">
              Contact us
            </a>
            <div className="flex items-center gap-1 text-sm cursor-pointer">
              <Globe className="h-4 w-4 opacity-80" />
              <span>EN</span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
