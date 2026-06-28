const dishChicken = "https://i.pinimg.com/736x/4d/5c/e9/4d5ce9f9917e6141979e5c9a24c5da28.jpg";
const dishAlfaham = "https://favhiker-production-public.s3.ap-south-1.amazonaws.com/items/1014.png";
const dishPeri = "https://b.zmtcdn.com/data/pictures/7/18874347/3b88ab47153f3d59a3011531fbc84cae_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*";
const dishHoney = "https://favhiker-dev-public.s3.amazonaws.com/items/102046.jpeg";
const dishBeef = "https://cdn.citymapia.com/kottayam/malabar-majlis/37895/Portfolio.jpg?biz=8363";
const dishMutton = "https://i.ytimg.com/vi/krs52rRGceY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA379qkajXOtgMFSJ0H7W2e2VhH7Q";

const DISH_IMAGES = {
  dishChicken,
  dishAlfaham,
  dishPeri,
  dishHoney,
  dishBeef,
  dishMutton
};

export type OutletReview = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

export type MenuPortion = { label: string; price: number };

export type MenuDish = {
  name: string;
  img?: string;
  tag?: string;
  portions: MenuPortion[];
};

export type MenuJuice = { name: string; price: number };

export type OutletMenu = {
  mandi: MenuDish[];
  pieces: MenuDish[];
  juices: MenuJuice[];
};

export type Outlet = {
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
  menu: OutletMenu;
  reviews?: OutletReview[];
};

/** @deprecated Use `Outlet` instead */
export type OutletData = Outlet;

export const OUTLETS: Outlet[] = [
  {
    id: "vengara",
    name: "Saud Kuzhimandhi - Vengara",
    location: "Vengara",
    address: "Main Street, Vengara, Malappuram, Kerala 679337",
    phone: "+91 7902655501",
    whatsapp: "+91 7902655501",
    hours: "11:30 AM - 11:30 PM",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH0_GDn4w0xZ26SqmgF_PYMRKFnjzX5-ciL9qZteDQkbq11-M9Cp4ItH4EcNTww7eNy2IJV1ulh40rg37sHsiOQdot8wYEvjWBk2icIB9WKXd5NdWHGP43okRwtgHsnl0TOPCgbaX0LzQc=s680-w680-h510-rw",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.8999910245348!2d75.9614332215586!3d11.050121090161328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64d3780704ce3%3A0xff573e931002f78!2sSaud%20kuzhimandhi%20Restaurant!5e0!3m2!1sen!2sin!4v1781870628058!5m2!1sen!2sin",
    menu: {
      mandi: [
        {
          name: "Chicken Kuzhi Mandi",
          img: DISH_IMAGES.dishChicken,
          tag: "Wood-Fired Signature",
          portions: [
            { label: "Quarter", price: 180 },
            { label: "Half", price: 340 },
            { label: "Half + Qtr", price: 520 },
            { label: "Full", price: 660 },
          ],
        },
        {
          name: "Alfaham Mandi",
          img: DISH_IMAGES.dishAlfaham,
          tag: "Popular",
          portions: [
            { label: "Quarter", price: 200 },
            { label: "Half", price: 360 },
            { label: "Half + Qtr", price: 560 },
            { label: "Full", price: 700 },
          ],
        },
        {
          name: "Periperi Alfaham Mandi",
          img: DISH_IMAGES.dishPeri,
          tag: "Spicy Hot",
          portions: [
            { label: "Quarter", price: 200 },
            { label: "Half", price: 370 },
            { label: "Half + Qtr", price: 570 },
            { label: "Full", price: 720 },
          ],
        },
        {
          name: "Yemeni Mutton Mandi",
          img: DISH_IMAGES.dishMutton,
          tag: "Vengara Special",
          portions: [
            { label: "Quarter", price: 290 },
            { label: "Half", price: 550 },
            { label: "Half + Qtr", price: 820 },
            { label: "Full", price: 1080 },
          ],
        },
        {
          name: "Honey Chilly Alfaham Mandi",
          img: DISH_IMAGES.dishHoney,
          portions: [
            { label: "Quarter", price: 210 },
            { label: "Half", price: 370 },
            { label: "Half + Qtr", price: 580 },
            { label: "Full", price: 720 },
          ],
        },
        {
          name: "Beef Mandi",
          img: DISH_IMAGES.dishBeef,
          tag: "Smokey Beef",
          portions: [
            { label: "Quarter", price: 200 },
            { label: "Half", price: 400 },
            { label: "Half + Qtr", price: 600 },
            { label: "Full", price: 800 },
          ],
        },
      ],
      pieces: [
        {
          name: "Mandi Chicken (Piece Only)",
          img: DISH_IMAGES.dishChicken,
          portions: [
            { label: "Quarter", price: 100 },
            { label: "Half", price: 200 },
            { label: "Half + Qtr", price: 300 },
            { label: "Full", price: 400 },
          ],
        },
        {
          name: "Alfaham (Piece Only)",
          img: DISH_IMAGES.dishAlfaham,
          portions: [
            { label: "Quarter", price: 130 },
            { label: "Half", price: 240 },
            { label: "Half + Qtr", price: 370 },
            { label: "Full", price: 460 },
          ],
        },
        {
          name: "Beef (Piece Only)",
          img: DISH_IMAGES.dishBeef,
          portions: [
            { label: "Quarter", price: 140 },
            { label: "Half", price: 260 },
            { label: "Half + Qtr", price: 400 },
            { label: "Full", price: 480 },
          ],
        },
      ],
      juices: [
        { name: "Fresh Lime", price: 25 },
        { name: "Mint Lime", price: 30 },
        { name: "Grape Juice", price: 50 },
        { name: "Mango Shake", price: 60 },
        { name: "Tender Coconut Shake", price: 70 },
        { name: "Pine Apple Juice", price: 50 },
        { name: "Butter Fruit Juice", price: 60 },
      ],
    },
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
    id: "payyanakkal",
    name: "Saud Kuzhimandhi - Payyanakkal",
    location: "Payyanakkal",
    address: "Old Military Rd, Payyanakkal, Kozhikode, Kerala 673003",
    phone: "+91 9946345834",
    whatsapp: "+91 9946345834",
    hours: "11:30 AM - 11:30 PM",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFORRaM2_ohINyYAe-buJRBzn2yBoSH05rQwuzZeIlVYJYnGdvesFyWMJkeTEtveuLK1e93TXY3D7V2MyeNUome-fvfYK71rdKdd38lEzkbsQRqYOaGru4-F719MZ0Adtlt5xdo7A=s680-w680-h510-rw",
    rating: 4.7,
    speciality: "Authentic Arabian Alfaham",
    description:
      "Our Payyanakkal outlet specializes in charcoal-grilled alfaham, finished with wild honey and premium spices. Located on Old Military Road in Kozhikode, it's the perfect spot for families and gatherings.",
    features: [
      "Dine-in Service",
      "Takeaway Available",
      "Home Delivery",
      "Family Events",
      "AC Interior",
      "Banquet Facilities",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250460.08697633765!2d75.48152879453129!3d11.229092000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6592e7076709d%3A0x7b6150edfc14a0c7!2sSaud!5e0!3m2!1sen!2sin!4v1781870663190!5m2!1sen!2sin",
    menu: {
      mandi: [
        {
          name: "Chicken Kuzhi Mandi",
          img: DISH_IMAGES.dishChicken,
          tag: "Signature",
          portions: [
            { label: "Quarter", price: 185 },
            { label: "Half", price: 345 },
            { label: "Half + Qtr", price: 525 },
            { label: "Full", price: 670 },
          ],
        },
        {
          name: "Honey Chilly Alfaham Mandi",
          img: DISH_IMAGES.dishPeri,
          tag: "Payyanakkal Special",
          portions: [
            { label: "Quarter", price: 220 },
            { label: "Half", price: 390 },
            { label: "Half + Qtr", price: 590 },
            { label: "Full", price: 750 },
          ],
        },
        {
          name: "Kandhari Alfaham Mandi",
          img: DISH_IMAGES.dishPeri,
          tag: "Fiery Kandhari",
          portions: [
            { label: "Quarter", price: 210 },
            { label: "Half", price: 380 },
            { label: "Half + Qtr", price: 580 },
            { label: "Full", price: 740 },
          ],
        },
        {
          name: "Alfaham Mandi",
          img: DISH_IMAGES.dishAlfaham,
          tag: "Popular",
          portions: [
            { label: "Quarter", price: 205 },
            { label: "Half", price: 365 },
            { label: "Half + Qtr", price: 565 },
            { label: "Full", price: 710 },
          ],
        },
        {
          name: "Periperi Alfaham Mandi",
          img: DISH_IMAGES.dishPeri,
          tag: "Spicy",
          portions: [
            { label: "Quarter", price: 205 },
            { label: "Half", price: 375 },
            { label: "Half + Qtr", price: 575 },
            { label: "Full", price: 730 },
          ],
        },
        {
          name: "Beef Mandi",
          img: DISH_IMAGES.dishBeef,
          tag: "Chef's Choice",
          portions: [
            { label: "Quarter", price: 210 },
            { label: "Half", price: 410 },
            { label: "Half + Qtr", price: 610 },
            { label: "Full", price: 810 },
          ],
        },
      ],
      pieces: [
        {
          name: "Mandi Chicken (Piece Only)",
          img: DISH_IMAGES.dishChicken,
          portions: [
            { label: "Quarter", price: 105 },
            { label: "Half", price: 205 },
            { label: "Half + Qtr", price: 305 },
            { label: "Full", price: 405 },
          ],
        },
        {
          name: "Alfaham (Piece Only)",
          img: DISH_IMAGES.dishAlfaham,
          portions: [
            { label: "Quarter", price: 135 },
            { label: "Half", price: 245 },
            { label: "Half + Qtr", price: 375 },
            { label: "Full", price: 470 },
          ],
        },
        {
          name: "Periperi / Kandhari / Honey (Piece Only)",
          img: DISH_IMAGES.dishPeri,
          portions: [
            { label: "Quarter", price: 145 },
            { label: "Half", price: 265 },
            { label: "Half + Qtr", price: 405 },
            { label: "Full", price: 485 },
          ],
        },
        {
          name: "Beef (Piece Only)",
          img: DISH_IMAGES.dishBeef,
          portions: [
            { label: "Quarter", price: 145 },
            { label: "Half", price: 270 },
            { label: "Half + Qtr", price: 410 },
            { label: "Full", price: 495 },
          ],
        },
      ],
      juices: [
        { name: "Fresh Lime", price: 25 },
        { name: "Mint Lime", price: 30 },
        { name: "Grape Juice", price: 50 },
        { name: "Avacado Shake", price: 80 },
        { name: "Dates Shake", price: 80 },
        { name: "Special Arabian Shake", price: 95 },
        { name: "Pine Apple Juice", price: 55 },
      ],
    },
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

export const getOutletById = (outletId: string) => OUTLETS.find((outlet) => outlet.id === outletId);
