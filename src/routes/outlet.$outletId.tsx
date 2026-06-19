import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Award,
  ArrowLeft,
  Star,
} from "lucide-react";

import { getOutletById } from "../lib/outlets-data";

function OutletDetail() {
  const { outletId } = useParams();
  const outlet = outletId ? getOutletById(outletId) : undefined;

  if (!outlet) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl mb-4">Outlet Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The outlet you're looking for doesn't exist.
          </p>
          <Link
            to="/outlets"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Outlets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link
            to="/outlets"
            className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors"
            aria-label="Back to outlets"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="text-center">
            <div className="font-display text-xl tracking-[0.25em] uppercase">{outlet.location}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Saud Kuzhimandhi</div>
          </div>
          <a
            href={`tel:${outlet.phone}`}
            className="w-10 h-10 grid place-items-center rounded-full gold-grad text-black"
            aria-label="Call outlet"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative">
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-6">
          <div className="relative rounded-3xl overflow-hidden border border-border h-56 sm:h-64 shadow-lg">
            <img
              src={outlet.image}
              alt={outlet.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">
                {outlet.speciality}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl leading-tight mt-1 text-white uppercase">
                {outlet.name}
              </h1>
              <div className="mt-2 flex items-center gap-2 text-white/70 text-xs">
                <span className="h-px w-6 bg-accent" />
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                  <span className="font-semibold text-white">{outlet.rating}</span>
                  <span>({outlet.reviews?.length || 0} Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-3xl mx-auto px-5 mb-8">
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {outlet.description}
        </p>
      </section>

      {/* Info Cards Grid */}
      <section className="max-w-3xl mx-auto px-5 mb-8 grid sm:grid-cols-2 gap-4">
        {/* Location */}
        <div className="rounded-3xl border border-border bg-card p-6 card-shadow flex flex-col justify-between">
          <div>
            <h3 className="font-display text-lg tracking-wide mb-2 flex items-center gap-2 text-gold">
              <MapPin className="w-4 h-4 text-accent" />
              LOCATION
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {outlet.address}
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              outlet.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-flex justify-center items-center gap-2 rounded-full border border-border bg-background/60 hover:bg-secondary transition-colors py-2.5 text-xs font-semibold"
          >
            <MapPin className="w-3.5 h-3.5 text-accent" />
            Get Directions
          </a>
        </div>

        {/* Hours */}
        <div className="rounded-3xl border border-border bg-card p-6 card-shadow flex flex-col justify-between">
          <div>
            <h3 className="font-display text-lg tracking-wide mb-2 flex items-center gap-2 text-gold">
              <Clock className="w-4 h-4 text-accent" />
              OPENING HOURS
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Every Day</p>
            <p className="text-sm font-semibold mt-1">{outlet.hours}</p>
          </div>

          <div className="mt-4 flex gap-2">
            <a
              href={`tel:${outlet.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 rounded-full border border-border bg-background/60 hover:bg-secondary transition-colors py-2.5 text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
            <a
              href={`https://wa.me/${outlet.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 rounded-full border border-border bg-background/60 hover:bg-secondary transition-colors py-2.5 text-xs font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-500" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Facilities & Services */}
      <section className="max-w-3xl mx-auto px-5 mb-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px flex-1 bg-border" />
          <h2 className="font-display text-xl tracking-wider text-gold uppercase">
            Facilities & Services
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {outlet.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 p-3 rounded-2xl border border-border bg-card/50 hover:border-accent/40 transition-colors"
            >
              <Award className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-xs font-medium text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Location Map */}
      <section className="max-w-3xl mx-auto px-5 mb-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px flex-1 bg-border" />
          <h2 className="font-display text-xl tracking-wider text-gold uppercase">
            Location Map
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="rounded-3xl overflow-hidden border border-border h-64 sm:h-80 shadow-md">
          <iframe
            src={outlet.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[0.2]"
            title={`${outlet.name} Map`}
          ></iframe>
        </div>
      </section>

      {/* Reviews */}
      {outlet.reviews && outlet.reviews.length > 0 && (
        <section className="max-w-3xl mx-auto px-5 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px flex-1 bg-border" />
            <h2 className="font-display text-xl tracking-wider text-gold uppercase">
              Customer Reviews
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="space-y-3">
            {outlet.reviews.map((review, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl border border-border bg-card/50 shadow-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-sm">{review.author}</p>
                    <p className="text-[10px] text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Back to Outlets Footer Link */}
      <div className="max-w-3xl mx-auto px-5 pb-16 text-center">
        <Link
          to="/outlets"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition-colors text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Outlets
        </Link>
      </div>
    </div>
  );
}

export default OutletDetail;
