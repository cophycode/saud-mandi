import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Star,
  Clock,
  MapPin,
  ChefHat,
  Award,
  Leaf,
  Flame,
  ArrowRight,
  Utensils,
  Heart,
  Quote,
} from "lucide-react";

import SiteNavbar from "../components/site-navbar";
import diningAmbience from "../assets/dining-ambience.jpg";
import heroMandi from "../assets/hero-mandi.jpg";
import saudlogo from "../assets/logo.png";

const ALL_REVIEWS = [
  { name: "Rashid M.", stars: 5, text: "Nice service and staff. Best rice and above average alfaham in town.", date: "2 weeks ago", tag: "Vengara" },
  { name: "Ayesha K.", stars: 5, text: "Warm Arabian dining atmosphere. Family loved every bite.", date: "1 week ago", tag: "Malappuram" },
  { name: "Fahad P.", stars: 4, text: "Rice was good. Portion size was very generous for the price.", date: "3 days ago", tag: "Vengara" },
  { name: "Ahmed M.", stars: 5, text: "Best mandi I've had outside Saudi Arabia! The slow cooking technique is authentic.", date: "2 weeks ago", tag: "Vengara" },
  { name: "Rashida T.", stars: 5, text: "The alfaham is absolutely divine. Perfect spice balance and so tender!", date: "1 week ago", tag: "Malappuram" },
  { name: "Karim A.", stars: 4, text: "Good quality food and friendly staff. Would definitely visit again.", date: "5 days ago", tag: "Malappuram" },
  { name: "Amina Z.", stars: 5, text: "Family loved the entire experience. Great hospitality!", date: "2 days ago", tag: "Malappuram" },
  { name: "Nadeem A.", stars: 5, text: "Authentic taste. Reminded me of Mandi I had in Riyadh.", date: "4 days ago", tag: "Vengara" },
  { name: "Vimal T.", stars: 3, text: "Service could improve during peak hours, but the food is solid.", date: "1 month ago", tag: "Vengara" },
  { name: "Sneha R.", stars: 3, text: "Expected better spice balance. The flavor was a bit muted for me.", date: "1 month ago", tag: "Malappuram" },
];

function AboutPage() {
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Hero animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".about-hero-title", { y: 40, opacity: 0, duration: 0.8 })
        .from(".about-hero-desc", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".about-hero-stat", { y: 15, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>(".reveal-about").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredReviews = ALL_REVIEWS.filter((review) => {
    if (filterRating === "all") return true;
    return review.stars === filterRating;
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNavbar />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-32 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--grad-radial)" }} />
        
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-6">
            <span className="w-10 h-px bg-accent" />
            Our Heritage
            <span className="w-10 h-px bg-accent" />
          </div>

          <h1 className="about-hero-title font-display leading-none text-6xl sm:text-7xl lg:text-9xl mb-6">
            THE SAUD <span className="text-gold">STORY</span>
          </h1>

          <p className="about-hero-desc mt-6 max-w-2xl mx-auto text-base lg:text-lg text-muted-foreground leading-relaxed">
            From a quiet corner in Kacherippadi to becoming a favorite gathering place for families. 
            We smoke, fire, and cook with simple, honest methods to preserve the true soul of Arabian Kuzhimandhi.
          </p>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "2021", label: "Founded" },
              { val: "2", label: "Outlets" },
              { val: "4.8 ★", label: "Avg Rating" },
              { val: "10k+", label: "Happy Guests" },
            ].map((stat, i) => (
              <div key={i} className="about-hero-stat text-center px-4 py-2 border-r last:border-r-0 border-border/40">
                <div className="font-display text-4xl sm:text-5xl text-gold">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED BRAND STORY */}
      <section className="py-16 lg:py-24 bg-surface/50 border-y border-border/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-about relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img src={diningAmbience} alt="Dining ambience at Saud Mandi" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
              <Award className="w-8 h-8 text-gold" />
              <div>
                <div className="font-display text-2xl tracking-wide">AUTHENTIC EXPERIENCE</div>
                <div className="text-xs opacity-85">Traditional Yemeni wood-fire cooking</div>
              </div>
            </div>
          </div>

          <div className="reveal-about space-y-6">
            <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">Behind The Embers</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              CRAFTING AUTHENTICITY <span className="text-gold">EVERY DAY.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Saud Kuzhimandhi was founded in 2021 with a clear, singular focus: to serve genuine, 
              wood-fired Kuzhimandhi without shortcuts. In an era of rapid food prep, we believe in 
              the beauty of taking our time. Our recipes combine traditional Yemeni spice combinations with 
              Kerala's love for rich, satisfying flavors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our signature Kuzhi (underground clay pit) is heated with authentic wood embers. The meats are 
              suspended above basmati rice, allowing the seasoned juices to slowly drip down, infusing every 
              grain of rice with deep, smokey complexity.
            </p>

            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full gold-grad text-black flex items-center justify-center">
                  <Flame className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">Wood Ember Smoked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full gold-grad text-black flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">100% Pure Spices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal-about text-center mb-16">
            <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-3">Our Values</div>
            <h2 className="font-display text-5xl lg:text-7xl">WHAT WE <span className="text-gold">STAND FOR</span></h2>
            <p className="text-muted-foreground max-w-md mx-auto mt-4">These three pillars define every plate we serve and every guest we welcome.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat className="w-6 h-6" />,
                title: "Culinary Integrity",
                desc: "We strictly avoid artificial flavor enhancers and low-grade oils. Our spices are sourced whole, roasted in-house, and ground fresh to guarantee purity and taste."
              },
              {
                icon: <Flame className="w-6 h-6" />,
                title: "Traditional Methods",
                desc: "We cook our mandi in custom-built brick-lined underground pits. Wood charcoal provides a consistent, natural heat that modern ovens simply cannot replicate."
              },
              {
                icon: <Utensils className="w-6 h-6" />,
                title: "Generous Hospitality",
                desc: "Arabian dining is built on sharing and abundance. We serve generous portions in a warm, welcoming space where family tables can sit back, share, and connect."
              }
            ].map((val, idx) => (
              <div key={idx} className="reveal-about rounded-3xl border border-border bg-card p-8 card-shadow hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl gold-grad text-black flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="font-display text-2xl mb-3 tracking-wide">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="py-20 lg:py-28 bg-surface/30 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal-about text-center mb-12">
            <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-3">Guest Feedback</div>
            <h2 className="font-display text-5xl lg:text-7xl">HONEST <span className="text-gold">REVIEWS</span></h2>
            <p className="text-muted-foreground max-w-md mx-auto mt-4">We listen to every guest. Here is what they say about their experience with us.</p>
          </div>

          {/* Interactive Rating Filters */}
          <div className="reveal-about flex flex-wrap justify-center items-center gap-2 mb-10">
            <button
              onClick={() => setFilterRating("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all ${
                filterRating === "all"
                  ? "gold-grad text-black border-transparent scale-105 shadow-md"
                  : "bg-card border-border hover:border-accent text-foreground"
              }`}
            >
              All Reviews ({ALL_REVIEWS.length})
            </button>
            {[5, 4, 3].map((starValue) => {
              const count = ALL_REVIEWS.filter(r => r.stars === starValue).length;
              return (
                <button
                  key={starValue}
                  onClick={() => setFilterRating(starValue)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
                    filterRating === starValue
                      ? "gold-grad text-black border-transparent scale-105 shadow-md"
                      : "bg-card border-border hover:border-accent text-foreground"
                  }`}
                >
                  {starValue} Stars ({count})
                </button>
              );
            })}
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, i) => (
              <article
                key={i}
                className="reveal-about rounded-3xl border border-border bg-card p-6 card-shadow flex flex-col justify-between hover:border-accent/40 hover:scale-[1.02] transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-16 h-16 text-gold" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star
                          key={k}
                          className={`w-4 h-4 ${
                            k < review.stars ? "fill-accent text-accent" : "text-muted-foreground/20"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                      {review.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div>{review.date}</div>
                </div>
              </article>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No reviews found matching this filter rating.
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 border-t border-border bg-card mt-12">
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

export default AboutPage;
