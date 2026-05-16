import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-12 pb-24 md:pb-12 border-t border-[var(--accent)]/20 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[#2a2a2a]/70 text-sm tracking-widest uppercase">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Zach Shev. All Rights Reserved.
        </div>
        <div className="flex space-x-8">
          <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">
            Contact
          </Link>
          <a
            href="https://instagram.com/zachshev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 flex justify-center">
        <Image
          src="/logo.png"
          alt="Zach Shev Signature"
          width={200}
          height={133}
          className="h-16 w-auto object-contain"
        />
      </div>
    </footer>
  );
}
