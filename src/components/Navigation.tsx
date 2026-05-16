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
  { name: "Commission Pricing", href: "/commission-pricing" },
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
      // Add touch-action none to body to prevent iOS scroll bleed
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "bg-[#D9D9D4]/85 backdrop-blur-2xl py-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b border-[#2a2a2a]/5"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Mobile Left Spacer to perfectly center the logo */}
        <div className="w-6 md:hidden"></div>

        <Link
          href="/"
          className="hover:opacity-70 transition-opacity flex items-center justify-center flex-1 md:flex-none md:justify-start"
        >
          <Image
            src="/logo.png"
            alt="Zach Shev Logo"
            width={400}
            height={266}
            className={`transition-all duration-700 w-auto object-contain ${
              isScrolled ? "h-16 md:h-20" : "h-20 md:h-28"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[var(--accent)] ${
                pathname === link.href ? "text-[var(--accent)]" : "text-[#2a2a2a]/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#2a2a2a] hover:text-[var(--accent)] transition-colors w-6 flex justify-end"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#D9D9D4] z-[105] flex flex-col justify-center items-center overflow-hidden overscroll-none touch-none"
          >
            <button
              className="fixed top-6 right-6 text-[#2a2a2a] hover:text-[var(--accent)] transition-colors p-4 z-[110]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col items-center justify-center space-y-10 w-full px-6 py-20 min-h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-serif text-3xl md:text-4xl tracking-wider transition-all duration-300 hover:text-[var(--accent)] hover:scale-105 ${
                    pathname === link.href ? "text-[var(--accent)]" : "text-[#2a2a2a]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
