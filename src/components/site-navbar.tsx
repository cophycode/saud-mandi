import { useState } from "react";
import { ArrowRight, Menu as MenuIcon, Moon, Sun, X } from "lucide-react";

import saudlogo from "../assets/logo.png";
import OrderNowButton from "./order-now-button";

type SiteNavbarProps = {
  currentPath?: "home" | "outlets";
};

function SiteNavbar({ currentPath = "home" }: SiteNavbarProps) {
  const [dark, setDark] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  const homeHref = currentPath === "home" ? "#top" : "/#top";
  const menuHref = currentPath === "home" ? "#menu" : "/#menu";
  const aboutHref = currentPath === "home" ? "#about" : "/#about";
  const reviewsHref = currentPath === "home" ? "#reviews" : "/#reviews";
  const visitHref = currentPath === "home" ? "#visit" : "/#visit";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          currentPath === "home" ? "py-5 bg-transparent" : "py-3 backdrop-blur-xl bg-background/80 border-b border-border"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
          <a href={homeHref} className="flex items-center gap-2 group">
            <img src={saudlogo} alt="Saud Kuzhimandhi logo" className="w-15 object-cover group-hover:scale-110 transition-transform" />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wide">SAUD</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">Kuzhimandhi</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium">
            <a href={homeHref} className="relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Home
            </a>
            <a href={menuHref} className="relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Menu
            </a>
            <a href={aboutHref} className="relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              About
            </a>
            <a href={reviewsHref} className="relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Reviews
            </a>
            <a href={visitHref} className="relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Visit
            </a>
            <a href="/outlets" className="relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Outlets
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Sun className={`w-4 h-4 absolute transition-all duration-500 ${dark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
              <Moon className={`w-4 h-4 absolute transition-all duration-500 ${dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
            </button>
            <OrderNowButton className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-grad text-black font-semibold text-sm hover:scale-105 transition-transform lux-shadow">
              Order Now <ArrowRight className="w-4 h-4" />
            </OrderNowButton>
            <button onClick={() => setNavOpen(true)} className="lg:hidden w-10 h-10 rounded-full gold-grad flex items-center justify-center text-black">
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {navOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 animate-fade-in">
          <button onClick={() => setNavOpen(false)} className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
          <a href={homeHref} onClick={() => setNavOpen(false)} className="font-display text-5xl tracking-wide hover:text-gold transition-colors">
            Home
          </a>
          <a href={menuHref} onClick={() => setNavOpen(false)} className="font-display text-5xl tracking-wide hover:text-gold transition-colors">
            Menu
          </a>
          <a href={aboutHref} onClick={() => setNavOpen(false)} className="font-display text-5xl tracking-wide hover:text-gold transition-colors">
            About
          </a>
          <a href={reviewsHref} onClick={() => setNavOpen(false)} className="font-display text-5xl tracking-wide hover:text-gold transition-colors">
            Reviews
          </a>
          <a href={visitHref} onClick={() => setNavOpen(false)} className="font-display text-5xl tracking-wide hover:text-gold transition-colors">
            Visit
          </a>
          <a href="/outlets" onClick={() => setNavOpen(false)} className="font-display text-5xl tracking-wide hover:text-gold transition-colors">
            Outlets
          </a>
          <a href="tel:+917902655501" className="mt-6 px-8 py-3 rounded-full gold-grad text-black font-semibold">
            Call · +91 79026 55501
          </a>
        </div>
      )}
    </>
  );
}

export default SiteNavbar;