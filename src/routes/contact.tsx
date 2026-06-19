import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Mail,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import SiteNavbar from "../components/site-navbar";
import { OUTLETS } from "../lib/outlets-data";
import saudlogo from "../assets/logo.png";

function ContactPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    outlet: "general",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".contact-hero-title", { y: 40, opacity: 0, duration: 0.8 })
        .from(".contact-hero-desc", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");

      // Scroll Reveals
      gsap.utils.toArray<HTMLElement>(".reveal-contact").forEach((el) => {
        gsap.from(el, {
          y: 40,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    
    // Simulate API request
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        outlet: "general",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNavbar />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-32 lg:pt-36 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--grad-radial)" }} />
        
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-6">
            <span className="w-10 h-px bg-accent" />
            Get In Touch
            <span className="w-10 h-px bg-accent" />
          </div>

          <h1 className="contact-hero-title font-display leading-none text-6xl sm:text-7xl lg:text-9xl mb-6">
            CONTACT <span className="text-gold">US</span>
          </h1>

          <p className="contact-hero-desc mt-6 max-w-xl mx-auto text-base lg:text-lg text-muted-foreground leading-relaxed">
            Have questions, hosting an event, or want to order? Reach out to our outlets directly or drop us a line below. We are here to serve.
          </p>
        </div>
      </section>

      {/* OUTLETS DIRECT CONTACT */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal-contact text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
              OUR <span className="text-gold">OUTLETS</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mt-2">
              Call or WhatsApp our teams directly for reservations and home delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {OUTLETS.map((outlet) => (
              <div
                key={outlet.id}
                className="reveal-contact group overflow-hidden rounded-3xl border border-border bg-card card-shadow hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Details Section */}
                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="font-display text-3xl mb-1 group-hover:text-gold transition-colors">
                      {outlet.name}
                    </h3>
                    <p className="text-xs text-accent font-semibold uppercase tracking-[0.25em]">
                      {outlet.speciality}
                    </p>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground mb-8">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                      <p className="leading-relaxed">{outlet.address}</p>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                      <p>{outlet.hours}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <a
                      href={`tel:${outlet.phone}`}
                      className="flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 hover:bg-secondary transition-colors py-3 text-sm sm:text-base font-semibold"
                    >
                      <Phone className="w-4 h-4 text-accent" />
                      Call Outlet
                    </a>
                    <a
                      href={`https://wa.me/${outlet.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 hover:bg-secondary transition-colors py-3 text-sm sm:text-base font-semibold"
                    >
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Map Embed Container */}
                <div className="h-64 w-full border-t border-border overflow-hidden relative bg-muted">
                  <iframe
                    title={`${outlet.name} Location Map`}
                    src={outlet.mapUrl}
                    className="w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & GENERAL INQUIRIES */}
      <section className="py-16 lg:py-24 bg-surface/50 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="reveal-contact text-center mb-12">
            <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-3">Send a Message</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
              FEEDBACK & <span className="text-gold">INQUIRIES</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mt-3">
              We value your experience and response. Leave your comments, reservation requests, or catering inquiries.
            </p>
          </div>

          <div className="reveal-contact rounded-3xl border border-border bg-card p-6 sm:p-10 card-shadow">
            {formStatus === "success" ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-display text-3xl">MESSAGE SENT!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for reaching out. A representative from Saud Kuzhimandhi will respond to your query shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 px-6 py-2.5 rounded-full border border-border hover:bg-secondary transition-colors text-sm font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus === "error" && (
                  <div className="p-4 rounded-2xl bg-red-500/10 text-red-500 flex items-center gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Please enter your Name and Message before submitting.</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        required
                        className="w-full bg-background border border-border rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        className="w-full bg-background border border-border rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-background border border-border rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Outlet Selection */}
                  <div className="space-y-2">
                    <label htmlFor="outlet" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Inquiry Target
                    </label>
                    <select
                      id="outlet"
                      name="outlet"
                      value={formData.outlet}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-border rounded-2xl py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')", backgroundPosition: "right 16px center", backgroundSize: "16px", backgroundRepeat: "no-repeat" }}
                    >
                      <option value="general">General Feedback / Catering</option>
                      {OUTLETS.map((outlet) => (
                        <option key={outlet.id} value={outlet.id}>
                          {outlet.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you need..."
                    required
                    className="w-full bg-background border border-border rounded-2xl py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 rounded-full gold-grad text-black font-semibold tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed lux-shadow cursor-pointer"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
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

export default ContactPage;
