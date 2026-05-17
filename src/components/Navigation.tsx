"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Artwork", href: "/artwork" },
  { name: "Available Artwork", href: "/available-artwork-for-sale" },
  { name: "Commission Process", href: "/commission-process" },
  { name: "Commission a Portrait", href: "/commission-a-portrait" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] bg-[#3E4D55] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "py-3 md:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-b border-white/5"
          : "py-5 md:py-6 border-b border-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10 lg:px-12 flex items-center justify-between gap-8">
        <div className="w-6 md:hidden" />

        <Link
          href="/"
          className="shrink-0 hover:opacity-70 transition-opacity flex items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="Zach Shev Logo"
            width={400}
            height={266}
            className={`transition-all duration-700 w-auto object-contain brightness-0 invert ${
              isScrolled ? "h-14 md:h-14 lg:h-16" : "h-16 md:h-16 lg:h-20"
            }`}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center justify-end gap-5 lg:gap-7 xl:gap-9 min-w-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-[11px] lg:text-xs xl:text-sm tracking-[0.16em] lg:tracking-[0.18em] xl:tracking-[0.2em] uppercase whitespace-nowrap leading-none transition-colors duration-300 hover:text-white ${
                pathname === link.href ? "text-white" : "text-white/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white/90 hover:text-white transition-colors w-6 flex justify-end"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#3E4D55] z-[105] overflow-y-auto overscroll-contain"
          >
            <button
              className="absolute top-6 right-6 text-white/90 hover:text-white transition-colors p-4 z-[110]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center justify-center min-h-[100dvh] py-24 px-6">
              <nav className="flex flex-col items-center justify-center space-y-8 w-full">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-serif text-center text-3xl md:text-4xl tracking-wider transition-all duration-300 hover:text-white hover:scale-105 ${
                      pathname === link.href ? "text-white" : "text-white/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
