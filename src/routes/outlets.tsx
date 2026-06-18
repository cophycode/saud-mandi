import {
  ArrowRight,
  ArrowLeft,
  Award,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import SiteNavbar from "../components/site-navbar";

export interface Outlet {
  id: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  image: string;
  rating: number;
  speciality: string;
}

const OUTLETS: Outlet[] = [
  {
    id: "vengara",
    name: "Saud Kuzhimandhi - Vengara",
    location: "Vengara",
    address: "Main Street, Vengara, Malappuram, Kerala 679337",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    hours: "11:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=300&fit=crop",
    rating: 4.8,
    speciality: "Premium Slow-Cooked Mandi",
  },
  {
    id: "malappuram",
    name: "Saud Kuzhimandhi - Malappuram",
    location: "Malappuram",
    address: "Fort Road, Malappuram, Kerala 676505",
    phone: "+91 98765 43211",
    whatsapp: "+91 98765 43211",
    hours: "10:30 AM - 11:30 PM",
    image: "https://images.unsplash.com/photo-1517248135467-4d71bcdd2d59?w=500&h=300&fit=crop",
    rating: 4.7,
    speciality: "Authentic Arabian Alfaham",
  },
];

function Outlets() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNavbar currentPath="outlets" />

      <section className="relative py-20 lg:py-28 overflow-hidden pt-32 lg:pt-36">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--grad-radial)" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-6">
              <span className="w-10 h-px bg-accent" />
              Find Your Nearest Outlet
              <span className="w-10 h-px bg-accent" />
            </div>
            <h1 className="font-display leading-[0.9] text-[14vw] sm:text-[10vw] lg:text-7xl xl:text-8xl">
              <span className="block">OUR</span>
              <span className="block text-gold">OUTLETS</span>
            </h1>
            <p className="hero-desc mt-6 max-w-2xl mx-auto text-base lg:text-lg text-muted-foreground leading-relaxed">
              Experience authentic Arabian Kuzhimandhi at our premium outlets across Kerala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
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
                    <h2 className="font-display text-2xl leading-tight mb-1">{outlet.name}</h2>
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

                    <a
                      href={`/outlet/${outlet.id}`}
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full gold-grad text-black py-2.5 font-semibold transition-transform hover:scale-[1.01]"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Outlets;
