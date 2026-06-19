import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Star,
  Clock,
  Phone,
  MapPin,
  Sun,
  Moon,
  Menu as MenuIcon,
  X,
  ChefHat,
  Award,
  Leaf,
  Truck,
  Utensils,
  ShoppingBag,
  Bike,
  MessageCircle,
  Flame,
} from "lucide-react";

import heroMandi from "../assets/hero-mandi.jpg";
import saudlogo from "../assets/logo.png";
import diningAmbience from "../assets/dining-ambience.jpg";
import dishChicken from "../assets/dish-chicken.jpg";
import dishBeef from "../assets/dish-beef.jpg";
import dishMutton from "../assets/dish-mutton.jpg";
import dishPeri from "../assets/dish-peri.jpg";
import dishAlfaham from "../assets/dish-alfaham.jpg";
import dishFish from "../assets/dish-fish.jpg";
import SiteNavbar from "../components/site-navbar";
import OrderNowButton from "../components/order-now-button";
import { OUTLETS } from "../lib/outlets-data";

const DISHES = [
  { name: "Chicken Kuzhimandhi", price: 249, img: dishChicken, desc: "Slow-cooked chicken on saffron basmati, smoked over wood embers." },
  { name: "Beef Mandi", price: 329, img: dishBeef, desc: "Tender beef chunks, deep spiced and slow braised to fall-apart soft." },
  { name: "Mutton Mandi", price: 349, img: dishMutton, desc: "Aged mutton, traditional Yemeni spice blend, served with thaheena." },
  { name: "Peri Peri Mandi", price: 279, img: dishPeri, desc: "Flame-grilled chicken with fiery peri peri glaze on aromatic rice." },
  { name: "Honey Alfaham", price: 269, img: dishAlfaham, desc: "Charcoal-grilled chicken finished with wild honey & dark spice." },
  { name: "Fish Mandi", price: 299, img: dishFish, desc: "Catch-of-the-day, marinated overnight, smoked & plated with lemon." },
];

const REVIEWS = [
  { name: "Rashid M.", stars: 5, text: "Nice service and staff. Best rice and above average alfaham in town.", reply: "Thank you Rashid — see you again soon!" },
  { name: "Ayesha K.", stars: 5, text: "Warm Arabian dining atmosphere. Family loved every bite.", reply: "We're honored to host your family." },
  { name: "Fahad P.", stars: 4, text: "Rice was good. Portion size was very generous for the price.", reply: "Thanks for the kind words." },
  { name: "Sneha R.", stars: 2, text: "Expected better spice balance. The flavor was a bit muted for me.", reply: "We're refining our spice mix — please give us another try." },
  { name: "Vimal T.", stars: 3, text: "Service could improve during peak hours, but the food is solid.", reply: "Working hard on this — appreciate the feedback." },
  { name: "Nadeem A.", stars: 5, text: "Authentic taste. Reminded me of Mandi I had in Riyadh.", reply: "Highest compliment we could get!" },
];

function Index() {
  const heroRef = useRef<HTMLElement | null>(null);
  const heroImgRef = useRef<HTMLDivElement | null>(null);

  // GSAP master timeline
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-line", { y: 80, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.3")
        .from(".hero-desc", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")        .from(".hero-stat", { y: 15, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(".hero-image", { scale: 0.92, opacity: 0, duration: 1.2, ease: "power4.out" }, 0.2)
        .from(".hero-float", { opacity: 0, y: 30, duration: 0.8, stagger: 0.15 }, "-=0.6");

      // Hero parallax
      gsap.to(".hero-image", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });

      // Section reveals
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Counters
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const end = parseFloat(el.dataset.counter || "0");
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => { el.textContent = obj.v.toFixed(decimals); },
        });
      });

    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNavbar currentPath="home" />

      {/* HERO */}
      <section ref={heroRef} id="top" className="relative pt-32 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--grad-radial)" }} />
        {/* arabic pattern bg */}
        <svg className="absolute right-0 top-0 w-[600px] h-[600px] opacity-[0.04] animate-spin-slow" viewBox="0 0 200 200">
          <defs>
            <pattern id="arab" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#arab)" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          <div>
            <div className="hero-label inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-6">
              <span className="w-10 h-px bg-accent" />
              Authentic Arabian Taste
              <span className="w-10 h-px bg-accent" />
            </div>

            <h1 className="font-display leading-[0.85] text-[18vw] sm:text-[14vw] lg:text-[9.5rem] xl:text-[11rem]">
              <span className="hero-line block">SAUD</span>
              <span className="hero-line block text-gold">KUZHI</span>
              <span className="hero-line block">MANDHI</span>
            </h1>

            <p className="hero-desc mt-6 max-w-md text-base lg:text-lg text-muted-foreground leading-relaxed">
              Slow cooked. Fire finished. Experience authentic Arabian Kuzhimandhi crafted with rich spices, perfectly seasoned basmati and traditional charcoal techniques.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <OrderNowButton className="reveal hero-cta group inline-flex items-center gap-2 px-7 py-4 rounded-full gold-grad text-black font-semibold lux-shadow hover:scale-105 transition-transform">
                Order Now
                <span className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </OrderNowButton>
              <a href="#menu" className="reveal hero-cta inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-card hover:bg-secondary transition-colors font-semibold">
                Explore Menu
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div className="hero-stat flex items-center gap-2">
                <Star className="w-5 h-5 fill-current text-accent" />
                <span className="font-display text-2xl">3.8</span>
                <span className="text-xs text-muted-foreground">/ 44 Reviews</span>
              </div>
              <div className="hero-stat flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold">Open till 11:30 PM</span>
              </div>
              <div className="hero-stat flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm">Malappuram</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div ref={heroImgRef} className="relative lg:-mr-32 xl:-mr-48">
            <div className="hero-image relative aspect-square max-w-[640px] mx-auto">
              {/* gold glow */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-50" style={{ background: "var(--grad-gold)" }} />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-border lux-shadow">
                <img src={heroMandi} alt="Saud Kuzhimandhi platter" className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-[3000ms]" />
              </div>
              {/* floating chips */}
              <div className="hero-float absolute -top-4 left-4 glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium animate-float-slow">
                <Flame className="w-4 h-4 text-accent" /> Wood Fired
              </div>
              <div className="hero-float absolute top-1/3 -right-2 glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium animate-float-slow" style={{ animationDelay: "1.2s" }}>
                <Leaf className="w-4 h-4 text-accent" /> Fresh Spices
              </div>
              <div className="hero-float absolute bottom-8 left-0 glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium animate-float-slow" style={{ animationDelay: "2s" }}>
                <ChefHat className="w-4 h-4 text-accent" /> Chef's Special
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="relative gold-grad text-black py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].flatMap((_, k) => (
            [
              { icon: <ChefHat className="w-5 h-5" />, label: "Authentic Recipes" },
              { icon: <Award className="w-5 h-5" />, label: "Premium Quality" },
              { icon: <Leaf className="w-5 h-5" />, label: "Fresh Ingredients" },
              { icon: <Truck className="w-5 h-5" />, label: "Fast Delivery" },
              { icon: <Flame className="w-5 h-5" />, label: "Wood Fired" },
              { icon: <Star className="w-5 h-5" />, label: "Family Favorite" },
            ].map((item, i) => (
              <div key={`${k}-${i}`} className="flex items-center gap-3 px-10 font-display text-2xl tracking-wider">
                {item.icon}
                <span>{item.label}</span>
                <span className="ml-6 opacity-40">✦</span>
              </div>
            ))
          ))}
        </div>
      </section>

      {/* SIGNATURE MANDIS */}
      <section id="menu" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-3">Our Signature</div>
              <h2 className="font-display text-5xl lg:text-7xl leading-none">
                THE <span className="text-gold">MANDIS</span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-md">A small menu, perfected. Each plate slow-cooked over wood and finished by fire.</p>
            </div>
            <Link to="/menu" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="reveal dishes-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISHES.map((d) => (
              <article key={d.name} className="dish-card group relative rounded-3xl overflow-hidden bg-card border border-border card-shadow hover:-translate-y-2 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl tracking-wide">{d.name}</h3>
                    <span className="shrink-0 px-3 py-1 rounded-full gold-grad text-black text-sm font-bold">₹{d.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  <OrderNowButton className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                    Order Now <ArrowRight className="w-4 h-4" />
                  </OrderNowButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 lg:py-32 bg-surface relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={diningAmbience} alt="Saud Kuzhimandhi dining" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-[0.3em] opacity-80">Since</div>
              <div className="font-display text-5xl">2021</div>
            </div>
          </div>

          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-3">Our Story</div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-6">
              THE TASTE<br/>PEOPLE COME<br/><span className="text-gold">BACK FOR.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Born from a love of Arabian hospitality and Kerala soul, Saud Kuzhimandhi is a quiet corner in Kacherippadi where family tables are served with the same care a cook gives at home. Clean, warm and unrushed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our rice is layered by hand, our chicken is rested over embers, and our spice mix changes nothing because it never had to. We listen to every review — and yes, we're still chasing perfect.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { val: "44", label: "Reviews", decimals: 0 },
                { val: "3.8", label: "Rating", decimals: 1 },
                { val: "11", label: "Open till 11:30PM", decimals: 0 },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                  <div className="font-display text-4xl text-gold" data-counter={s.val} data-decimals={s.decimals}>0</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal text-center mb-14">
            <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-3">Honest Reviews</div>
            <h2 className="font-display text-5xl lg:text-7xl">WHAT GUESTS <span className="text-gold">SAY</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <article key={i} className="reveal rounded-3xl border border-border bg-card p-7 card-shadow flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className={`w-4 h-4 ${k < r.stars ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
                <p className="text-base leading-relaxed flex-1">"{r.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold">{r.name}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <img src={diningAmbience} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8 text-center text-white">
          <div className="reveal text-xs uppercase tracking-[0.35em] text-[#FFC52E] font-semibold mb-4">Three Ways To Taste</div>
          <h2 className="reveal font-display text-6xl lg:text-9xl leading-none mb-12">
            <span className="block">DINE IN.</span>
            <span className="block opacity-70">TAKE AWAY.</span>
            <span className="block text-[#FFC52E]">DELIVERY.</span>
          </h2>
          <div className="reveal grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Utensils />, label: "Dine In", desc: "Warm Arabian ambience" },
              { icon: <ShoppingBag />, label: "Take Away", desc: "Hot, packed, ready" },
              { icon: <Bike />, label: "Delivery", desc: "Fast across Malappuram" },
            ].map((x) => (
              <div key={x.label} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 mx-auto rounded-full gold-grad text-black flex items-center justify-center mb-4">{x.icon}</div>
                <div className="font-display text-2xl">{x.label}</div>
                <div className="text-xs text-white/70 mt-1">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="visit" className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-6">
              <span className="w-10 h-px bg-accent" />
              Find Your Nearest Outlet
              <span className="w-10 h-px bg-accent" />
            </div>
            <h2 className="font-display leading-[0.9] text-5xl lg:text-7xl xl:text-8xl">
              OUR <span className="text-gold">OUTLETS</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-base lg:text-lg text-muted-foreground leading-relaxed">
              Experience authentic Arabian Kuzhimandhi at our premium outlets across Kerala.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {OUTLETS.map((outlet) => (
              <div
                key={outlet.id}
                className="group overflow-hidden rounded-3xl border border-border bg-card card-shadow hover:-translate-y-1 transition-all duration-300 max-w-xl mx-auto w-full"
              >
                <div className="relative h-40 sm:h-44 overflow-hidden bg-muted">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-3 right-3 bg-black/55 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-white flex items-center gap-1">
                    <Award className="w-4 h-4 text-[#FFC52E]" />
                    {outlet.rating}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="mb-3">
                    <h3 className="font-display text-2xl leading-tight mb-1">{outlet.name}</h3>
                    <p className="text-sm text-accent font-semibold uppercase tracking-[0.25em]">{outlet.speciality}</p>
                  </div>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex gap-2.5">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                      <p>{outlet.address}</p>
                    </div>
                    <div className="flex gap-2.5">
                      <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                      <p>{outlet.hours}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <a
                      href={`tel:${outlet.phone}`}
                      className="flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 hover:bg-secondary transition-colors py-2.5 text-sm font-semibold"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${outlet.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 hover:bg-secondary transition-colors py-2.5 text-sm font-semibold"
                    >
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      WhatsApp
                    </a>
                  </div>

                  <Link
                    to={`/outlet/${outlet.id}`}
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full gold-grad text-black py-2.5 font-semibold transition-transform hover:scale-[1.01]"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gold-grad" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.3), transparent 50%)" }} />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-center text-black">
          <Flame className="w-12 h-12 mx-auto mb-4" />
          <h2 className="reveal font-display text-6xl lg:text-9xl leading-none mb-6">
            TASTE ARABIA<br/>TONIGHT.
          </h2>
          <p className="reveal max-w-xl mx-auto text-black/80 mb-8">Reserve a table, pick up hot, or have it delivered. Either way, dinner is sorted.</p>
          <div className="reveal flex flex-wrap justify-center gap-3">
            <OrderNowButton className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 transition-transform">
              Reserve / Order
            </OrderNowButton>
            <a href="https://wa.me/917902655501" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={saudlogo} alt="Saud Kuzhimandhi logo" className="w-15 object-cover group-hover:scale-110 transition-transform" />
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
              <li><Link className="hover:text-accent" to="/contact">Contact</Link></li>
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

      {/* Floating actions */}
      <a
        href="https://wa.me/917902655501"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed z-40 bottom-24 sm:bottom-6 right-5 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center lux-shadow hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+917902655501"
        aria-label="Call"
        className="fixed z-40 bottom-24 sm:bottom-6 right-24 sm:right-24 w-14 h-14 rounded-full gold-grad text-black flex items-center justify-center lux-shadow hover:scale-110 transition-transform animate-pulse-glow"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Sticky bottom bar mobile */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-background/95 backdrop-blur-xl border-t border-border p-3 flex gap-2">
        <OrderNowButton className="flex-1 py-3 rounded-full gold-grad text-black font-semibold text-center text-sm">
          Order Now
        </OrderNowButton>
        <Link to="/menu" className="flex-1 py-3 rounded-full border border-border text-center font-semibold text-sm">
          View Menu
        </Link>
      </div>
    </div>
  );
}

export default Index;
