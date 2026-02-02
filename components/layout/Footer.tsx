/* eslint-disable @next/next/no-html-link-for-pages */
// components/layout/Footer.tsx

import { Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-sm text-white/70 bg-black overflow-hidden">
      {/* curved orange gradient at top */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 0%, rgba(255, 68, 0, 0.6) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-6 py-12 mt-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-4">
          {/* left - logo and links */}
          <div className="space-y-6 lg:flex-shrink-0">
            <div className="flex items-center">
              <Image src="/rare.png" alt="zoo" width={215} height={50} />
            </div>

            <div className="flex flex-row ml-4 gap-4 sm:gap-8 text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Term to use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Store policy
              </a>
            </div>
          </div>

          {/* middle - navigation columns */}
          <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-3 lg:ml-auto lg:mr-auto ml-4 lg:ml-0">
            <div className="space-y-3">
              <a href="/" className="block hover:text-white transition-colors">
                Home
              </a>
              <a
                href="https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef"
                className="block hover:text-white transition-colors"
              >
                New arrival
              </a>
              <a
                href="https://www.repttown.com/stores/s/686e9192e15b3caabd12ccef"
                className="block hover:text-white transition-colors"
              >
                Available
              </a>
            </div>

            <div className="space-y-3">
              <a href="" className="block hover:text-white transition-colors">
                Import & Export Service
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Articles
              </a>
              <a
                href="/ourstory"
                className="block hover:text-white transition-colors"
              >
                Our story
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Contact us
              </a>
            </div>
          </div>

          {/* right - language selector */}
          <div className="flex items-center gap-2 text-white lg:flex-shrink-0">
            <Globe className="h-5 w-5" />
            <span className="font-medium">EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
