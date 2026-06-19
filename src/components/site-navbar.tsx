import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu as MenuIcon, Moon, Sun, X } from "lucide-react";

import saudlogo from "../assets/logo.png";
import OrderNowButton from "./order-now-button";

type SiteNavbarProps = {
  currentPath?: "home" | "menu" | "about" | "outlets" | "contact";
};

function SiteNavbar({ currentPath }: SiteNavbarProps) {
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

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 py-3 backdrop-blur-xl bg-background/80 border-b border-border`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={saudlogo} alt="Saud Kuzhimandhi logo" className="w-15 object-cover group-hover:scale-110 transition-transform" />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wide">SAUD</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">Kuzhimandhi</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium">
            <Link
              to="/"
              className={`relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                currentPath === "home" ? "text-accent after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                currentPath === "menu" ? "text-accent after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className={`relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                currentPath === "about" ? "text-accent after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              About
            </Link>
            <Link
              to="/outlets"
              className={`relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                currentPath === "outlets" ? "text-accent after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Outlets
            </Link>
            <Link
              to="/contact"
              className={`relative hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                currentPath === "contact" ? "text-accent after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Contact
            </Link>
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
          <Link to="/" onClick={() => setNavOpen(false)} className={`font-display text-5xl tracking-wide transition-colors ${currentPath === "home" ? "text-gold" : "hover:text-gold"}`}>
            Home
          </Link>
          <Link to="/menu" onClick={() => setNavOpen(false)} className={`font-display text-5xl tracking-wide transition-colors ${currentPath === "menu" ? "text-gold" : "hover:text-gold"}`}>
            Menu
          </Link>
          <Link to="/about" onClick={() => setNavOpen(false)} className={`font-display text-5xl tracking-wide transition-colors ${currentPath === "about" ? "text-gold" : "hover:text-gold"}`}>
            About
          </Link>
          <Link to="/outlets" onClick={() => setNavOpen(false)} className={`font-display text-5xl tracking-wide transition-colors ${currentPath === "outlets" ? "text-gold" : "hover:text-gold"}`}>
            Outlets
          </Link>
          <Link to="/contact" onClick={() => setNavOpen(false)} className={`font-display text-5xl tracking-wide transition-colors ${currentPath === "contact" ? "text-gold" : "hover:text-gold"}`}>
            Contact
          </Link>
          <a href="tel:+917902655501" className="mt-6 px-8 py-3 rounded-full gold-grad text-black font-semibold">
            Call · +91 79026 55501
          </a>
        </div>
      )}
    </>
  );
}

export default SiteNavbar;