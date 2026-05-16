import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D4] pt-24 pb-12 border-t border-[#2a2a2a]/10 mt-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20 md:mb-24">
          
          {/* Logo & Intro */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-8 inline-block">
              <Image
                src="/logo.png"
                alt="Zach Shev Signature"
                width={300}
                height={200}
                className="h-20 md:h-24 w-auto object-contain hover:opacity-70 transition-opacity"
              />
            </Link>
            <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-[#2a2a2a]/60 max-w-sm leading-relaxed">
              Heirloom portraiture designed to last for generations. <br className="hidden md:block" />Based in San Diego, CA.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h4 className="font-serif text-lg md:text-xl tracking-widest text-[#2a2a2a] mb-6">Exhibition</h4>
            <nav className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/70">
              <Link href="/artwork" className="hover:text-[var(--accent)] transition-colors">Selected Works</Link>
              <Link href="/available-artwork-for-sale" className="hover:text-[var(--accent)] transition-colors">Available Works</Link>
              <Link href="/commission-process" className="hover:text-[var(--accent)] transition-colors">Commissions</Link>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h4 className="font-serif text-lg md:text-xl tracking-widest text-[#2a2a2a] mb-6">Studio</h4>
            <nav className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase text-[#2a2a2a]/70">
              <Link href="/about" className="hover:text-[var(--accent)] transition-colors">About the Artist</Link>
              <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">Inquiries</Link>
              <a href="https://instagram.com/zachshev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
            </nav>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#2a2a2a]/10 text-[#2a2a2a]/50 text-[10px] md:text-xs tracking-widest uppercase">
          <p className="mb-4 md:mb-0 text-center md:text-left">&copy; {new Date().getFullYear()} Zach Shev. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span>Fine Art Portraiture</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">San Diego, CA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
