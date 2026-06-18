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

interface Outlet {
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
  description: string;
  features: string[];
  mapUrl: string;
  reviews?: Array<{
    author: string;
    rating: number;
    text: string;
    date: string;
  }>;
}

const OUTLETS_DATA: Record<string, Outlet> = {
  vengara: {
    id: "vengara",
    name: "Saud Kuzhimandhi - Vengara",
    location: "Vengara",
    address: "Main Street, Vengara, Malappuram, Kerala 679337",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    hours: "11:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=600&fit=crop",
    rating: 4.8,
    speciality: "Premium Slow-Cooked Mandi",
    description:
      "Experience authentic Arabian cuisine at our flagship Vengara outlet. Our master chefs prepare traditional kuzhimandhi using time-honored techniques, slow-cooking meats to perfection over aromatic wood smoke.",
    features: [
      "Dine-in Service",
      "Takeaway Available",
      "Home Delivery",
      "Private Events",
      "Outdoor Seating",
      "Catering Services",
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6754537848403!2d75.9167!3d11.3183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43a8b1dc1dc1d%3A0x123456789!2sVengara%2C%20Malappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890123",
    reviews: [
      {
        author: "Ahmed M.",
        rating: 5,
        text: "Best mandi I've had outside Saudi Arabia! The slow cooking technique is authentic.",
        date: "2 weeks ago",
      },
      {
        author: "Nisha K.",
        rating: 5,
        text: "Wonderful ambience and incredibly delicious food. Highly recommended!",
        date: "1 week ago",
      },
      {
        author: "Fahad P.",
        rating: 4,
        text: "Great taste and generous portions. Service could be a bit faster during peak hours.",
        date: "3 days ago",
      },
    ],
  },
  malappuram: {
    id: "malappuram",
    name: "Saud Kuzhimandhi - Malappuram",
    location: "Malappuram",
    address: "Fort Road, Malappuram, Kerala 676505",
    phone: "+91 98765 43211",
    whatsapp: "+91 98765 43211",
    hours: "10:30 AM - 11:30 PM",
    image: "https://images.unsplash.com/photo-1517248135467-4d71bcdd2d59?w=1200&h=600&fit=crop",
    rating: 4.7,
    speciality: "Authentic Arabian Alfaham",
    description:
      "Our Malappuram outlet specializes in charcoal-grilled alfaham, finished with wild honey and premium spices. Located on the bustling Fort Road, it's the perfect spot for families and gatherings.",
    features: [
      "Dine-in Service",
      "Takeaway Available",
      "Home Delivery",
      "Family Events",
      "AC Interior",
      "Banquet Facilities",
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2754537848403!2d75.8333!3d11.0183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba434343434343!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890456",
    reviews: [
      {
        author: "Rashida T.",
        rating: 5,
        text: "The alfaham is absolutely divine. Perfect spice balance and so tender!",
        date: "1 week ago",
      },
      {
        author: "Karim A.",
        rating: 4,
        text: "Good quality food and friendly staff. Would definitely visit again.",
        date: "5 days ago",
      },
      {
        author: "Amina Z.",
        rating: 5,
        text: "Family loved the entire experience. Great hospitality!",
        date: "2 days ago",
      },
    ],
  },
};

function OutletDetail() {
  const { outletId } = useParams();
  const outlet = OUTLETS_DATA[outletId as keyof typeof OUTLETS_DATA];

  if (!outlet) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Outlet Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The outlet you're looking for doesn't exist.
          </p>
          <Link
            to="/outlets"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 py-2.5 transition-colors font-medium"
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
      {/* Back Button */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/outlets"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            All Outlets
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden bg-muted">
        <img
          src={outlet.image}
          alt={outlet.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                  {outlet.name}
                </h1>
                <p className="text-lg text-primary font-medium">
                  {outlet.speciality}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-xl font-bold">{outlet.rating}</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              {outlet.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact & Info Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Location */}
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {outlet.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(
                      outlet.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md py-2 transition-colors text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>

                {/* Hours */}
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Opening Hours
                  </h3>
                  <p className="text-sm font-medium">{outlet.hours}</p>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <a
                    href={`tel:${outlet.phone}`}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md py-3 transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${outlet.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-md py-3 transition-colors font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Facilities & Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {outlet.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-colors"
                    >
                      <Award className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Location Map</h2>
                <div className="rounded-lg overflow-hidden border border-border h-96">
                  <iframe
                    src={outlet.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Reviews */}
              {outlet.reviews && outlet.reviews.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                  <div className="space-y-4">
                    {outlet.reviews.map((review, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-lg border border-border bg-card/50"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold">{review.author}</p>
                            <p className="text-xs text-muted-foreground">
                              {review.date}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {review.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OutletDetail;
