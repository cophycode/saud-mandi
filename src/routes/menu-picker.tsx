import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Award, Clock, MapPin } from "lucide-react";

import SiteNavbar from "../components/site-navbar";
import { OUTLETS } from "../lib/outlets-data";
import saudlogo from "../assets/logo.png";

function MenuPicker() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".picker-hero-title", { y: 30, opacity: 0, duration: 0.8 })
        .from(".picker-hero-desc", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");


    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNavbar currentPath="menu" />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-32 lg:pt-36 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--grad-radial)" }} />
        
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-6">
            <span className="w-10 h-px bg-accent" />
            Select Location
            <span className="w-10 h-px bg-accent" />
          </div>

          <h1 className="picker-hero-title font-display leading-none text-6xl sm:text-7xl lg:text-9xl mb-6">
            CHOOSE OUR <span className="text-gold">MENU</span>
          </h1>

          <p className="picker-hero-desc mt-6 max-w-xl mx-auto text-base lg:text-lg text-muted-foreground leading-relaxed">
            Saud Kuzhimandhi menus are tailored to each location's local preparations, exclusive recipes, and fresh ingredients. Select an outlet to view its menu.
          </p>
        </div>
      </section>

      {/* OUTLETS SELECTOR GRID */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {OUTLETS.map((outlet) => (
              <div
                key={outlet.id}
                className="picker-card group overflow-hidden rounded-3xl border border-border bg-card card-shadow hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden bg-muted">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3.5 py-1.5 rounded-full text-sm font-medium text-white flex items-center gap-1.5 border border-white/10">
                    <Award className="w-4 h-4 text-[#FFC52E]" />
                    {outlet.rating}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-3xl text-white leading-tight mb-1">
                      {outlet.name}
                    </h3>
                    <p className="text-xs text-accent font-semibold uppercase tracking-[0.2em]">
                      {outlet.speciality}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="space-y-3.5 text-sm text-muted-foreground mb-6">
                    <div className="flex gap-2.5">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                      <p>{outlet.address}</p>
                    </div>
                    <div className="flex gap-2.5">
                      <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                      <p>{outlet.hours}</p>
                    </div>
                  </div>

                  <Link
                    to={`/menu/${outlet.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full gold-grad text-black py-3 font-semibold transition-transform hover:scale-[1.01]"
                  >
                    View Menu
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={saudlogo} alt="Saud Kuzhimandhi logo" className="w-12 object-cover" />
              <div className="font-display text-xl">SAUD KUZHIMANDHI</div>
            </div>
            <p className="text-sm text-muted-foreground">Slow Cooked. Fire Finished. Arabian Taste.</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm uppercase tracking-wider">Explore</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-accent" to="/">Home</Link></li>
              <li><Link className="hover:text-accent" to="/menu">Menu</Link></li>
              <li><Link className="hover:text-accent" to="/about">About Us</Link></li>
              <li><Link className="hover:text-accent" to="/outlets">Our Outlets</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm uppercase tracking-wider">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+917902655501" className="hover:text-accent">+91 79026 55501</a></li>
              <li>Vengara Rd, Kacherippadi</li>
              <li>Malappuram, Kerala 676304</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-sm uppercase tracking-wider">Hours</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon – Sun</li>
              <li>11:00 AM – 11:30 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Saud Kuzhimandhi · All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default MenuPicker;
