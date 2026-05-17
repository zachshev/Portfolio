import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#465761] pt-24 pb-12 border-t border-white/10 mt-32 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20 md:mb-24">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="mb-8 md:mb-10 inline-block hover:opacity-75 transition-opacity"
              aria-label="Zach Shev Home"
            >
              <Image
                src="/logo.png"
                alt="Zach Shev Signature"
                width={1200}
                height={800}
                className="h-36 sm:h-44 md:h-48 lg:h-56 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-white/70 max-w-sm leading-relaxed">
              Heirloom portraiture designed to last for generations.
              <br className="hidden md:block" />
              Based in San Diego, CA.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h4 className="font-serif text-lg md:text-xl tracking-widest text-white mb-6">
              Exhibition
            </h4>

            <nav className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase text-white/70">
              <Link
                href="/artwork"
                className="hover:text-white transition-colors"
              >
                Selected Works
              </Link>

              <Link
                href="/available-artwork-for-sale"
                className="hover:text-white transition-colors"
              >
                Available Works
              </Link>

              <Link
                href="/commission-process"
                className="hover:text-white transition-colors"
              >
                Commissions
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h4 className="font-serif text-lg md:text-xl tracking-widest text-white mb-6">
              Studio
            </h4>

            <nav className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase text-white/70">
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About the Artist
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Inquiries
              </Link>

              <a
                href="https://instagram.com/zachshev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/55 text-[10px] md:text-xs tracking-widest uppercase">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Zach Shev. All Rights Reserved.
          </p>

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
