import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/logo/pph-logo-white.png"
              alt="Poncol Padel House"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <p className="font-sans text-sm font-300 text-cream/60 leading-relaxed max-w-[240px]">
              Poncol Padel House
              <br />
              Jakarta, Indonesia
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/courts", label: "Courts" },
                { href: "/about", label: "About" },
                { href: "/book", label: "Book a Court" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm font-300 text-cream/70 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/poncolpadelhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-300 text-cream/70 hover:text-cream transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Find us */}
          <div>
            <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-5">
              Find Us
            </h3>
            <address className="not-italic font-sans text-sm font-300 text-cream/70 leading-relaxed">
              Jl. Poncol No.9A
              <br />
              Gandaria Selatan
              <br />
              Jakarta Selatan 12420
              <br />
              Indonesia
            </address>
            <p className="mt-4 font-sans text-sm font-300 text-cream/50">
              @poncolpadelhouse
            </p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8">
          <p className="font-sans text-[11px] tracking-widest uppercase text-cream/30">
            &copy; 2024 Poncol Padel House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
