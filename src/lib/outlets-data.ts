export type OutletReview = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

export type OutletData = {
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
  reviews?: OutletReview[];
};

export const OUTLETS: OutletData[] = [
  {
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
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6754537848403!2d75.9167!3d11.3183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43a8b1dc1dc1d%3A0x123456789!2sVengara%2C%20Malappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890123",
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
  {
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
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2754537848403!2d75.8333!3d11.0183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba434343434343!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890456",
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
];

export const getOutletById = (outletId: string) =>
  OUTLETS.find((outlet) => outlet.id === outletId);
