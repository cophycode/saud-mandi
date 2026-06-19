import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Phone, ShoppingBag, Drumstick, Beef, GlassWater } from "lucide-react";
import heroMandi from "@/assets/hero-mandi.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishAlfaham from "@/assets/dish-alfaham.jpg";
import dishPeri from "@/assets/dish-peri.jpg";
import dishBeef from "@/assets/dish-beef.jpg";
import dishMutton from "@/assets/dish-mutton.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import { OUTLETS } from "../lib/outlets-data";

type Portion = { label: string; price: number };
type Dish = { name: string; img?: string; tag?: string; portions: Portion[] };
type Juice = { name: string; price: number };

const ASSETS = {
  dishChicken,
  dishAlfaham,
  dishPeri,
  dishBeef,
  dishMutton,
  dishFish,
};

// Vengara Menu Data
const VENGARA_MANDI: Dish[] = [
  { name: "Chicken Kuzhi Mandi", img: ASSETS.dishChicken, tag: "Wood-Fired Signature", portions: [
    { label: "Quarter", price: 180 }, { label: "Half", price: 340 },
    { label: "Half + Qtr", price: 520 }, { label: "Full", price: 660 },
  ]},
  { name: "Alfaham Mandi", img: ASSETS.dishAlfaham, tag: "Popular", portions: [
    { label: "Quarter", price: 200 }, { label: "Half", price: 360 },
    { label: "Half + Qtr", price: 560 }, { label: "Full", price: 700 },
  ]},
  { name: "Periperi Alfaham Mandi", img: ASSETS.dishPeri, tag: "Spicy Hot", portions: [
    { label: "Quarter", price: 200 }, { label: "Half", price: 370 },
    { label: "Half + Qtr", price: 570 }, { label: "Full", price: 720 },
  ]},
  { name: "Yemeni Mutton Mandi", img: ASSETS.dishMutton, tag: "Vengara Special", portions: [
    { label: "Quarter", price: 290 }, { label: "Half", price: 550 },
    { label: "Half + Qtr", price: 820 }, { label: "Full", price: 1080 },
  ]},
  { name: "Honey Chilly Alfaham Mandi", img: ASSETS.dishPeri, portions: [
    { label: "Quarter", price: 210 }, { label: "Half", price: 370 },
    { label: "Half + Qtr", price: 580 }, { label: "Full", price: 720 },
  ]},
  { name: "Beef Mandi", img: ASSETS.dishBeef, tag: "Smokey Beef", portions: [
    { label: "Quarter", price: 200 }, { label: "Half", price: 400 },
    { label: "Half + Qtr", price: 600 }, { label: "Full", price: 800 },
  ]},
];

const VENGARA_PIECES: Dish[] = [
  { name: "Mandi Chicken (Piece Only)", img: ASSETS.dishChicken, portions: [
    { label: "Quarter", price: 100 }, { label: "Half", price: 200 },
    { label: "Half + Qtr", price: 300 }, { label: "Full", price: 400 },
  ]},
  { name: "Alfaham (Piece Only)", img: ASSETS.dishAlfaham, portions: [
    { label: "Quarter", price: 130 }, { label: "Half", price: 240 },
    { label: "Half + Qtr", price: 370 }, { label: "Full", price: 460 },
  ]},
  { name: "Beef (Piece Only)", img: ASSETS.dishBeef, portions: [
    { label: "Quarter", price: 140 }, { label: "Half", price: 260 },
    { label: "Half + Qtr", price: 400 }, { label: "Full", price: 480 },
  ]},
];

const VENGARA_JUICES: Juice[] = [
  { name: "Fresh Lime", price: 25 },
  { name: "Mint Lime", price: 30 },
  { name: "Grape Juice", price: 50 },
  { name: "Mango Shake", price: 60 },
  { name: "Tender Coconut Shake", price: 70 },
  { name: "Pine Apple Juice", price: 50 },
  { name: "Butter Fruit Juice", price: 60 },
];

// Malappuram Menu Data
const MALAPPURAM_MANDI: Dish[] = [
  { name: "Chicken Kuzhi Mandi", img: ASSETS.dishChicken, tag: "Signature", portions: [
    { label: "Quarter", price: 185 }, { label: "Half", price: 345 },
    { label: "Half + Qtr", price: 525 }, { label: "Full", price: 670 },
  ]},
  { name: "Honey Chilly Alfaham Mandi", img: ASSETS.dishPeri, tag: "Malappuram Special", portions: [
    { label: "Quarter", price: 220 }, { label: "Half", price: 390 },
    { label: "Half + Qtr", price: 590 }, { label: "Full", price: 750 },
  ]},
  { name: "Kandhari Alfaham Mandi", img: ASSETS.dishPeri, tag: "Fiery Kandhari", portions: [
    { label: "Quarter", price: 210 }, { label: "Half", price: 380 },
    { label: "Half + Qtr", price: 580 }, { label: "Full", price: 740 },
  ]},
  { name: "Alfaham Mandi", img: ASSETS.dishAlfaham, tag: "Popular", portions: [
    { label: "Quarter", price: 205 }, { label: "Half", price: 365 },
    { label: "Half + Qtr", price: 565 }, { label: "Full", price: 710 },
  ]},
  { name: "Periperi Alfaham Mandi", img: ASSETS.dishPeri, tag: "Spicy", portions: [
    { label: "Quarter", price: 205 }, { label: "Half", price: 375 },
    { label: "Half + Qtr", price: 575 }, { label: "Full", price: 730 },
  ]},
  { name: "Beef Mandi", img: ASSETS.dishBeef, tag: "Chef's Choice", portions: [
    { label: "Quarter", price: 210 }, { label: "Half", price: 410 },
    { label: "Half + Qtr", price: 610 }, { label: "Full", price: 810 },
  ]},
  { name: "Fish Mandi", img: ASSETS.dishFish, tag: "Fresh Grill", portions: [
    { label: "Quarter", price: 240 }, { label: "Half", price: 450 },
    { label: "Half + Qtr", price: 680 }, { label: "Full", price: 890 },
  ]},
];

const MALAPPURAM_PIECES: Dish[] = [
  { name: "Mandi Chicken (Piece Only)", img: ASSETS.dishChicken, portions: [
    { label: "Quarter", price: 105 }, { label: "Half", price: 205 },
    { label: "Half + Qtr", price: 305 }, { label: "Full", price: 405 },
  ]},
  { name: "Alfaham (Piece Only)", img: ASSETS.dishAlfaham, portions: [
    { label: "Quarter", price: 135 }, { label: "Half", price: 245 },
    { label: "Half + Qtr", price: 375 }, { label: "Full", price: 470 },
  ]},
  { name: "Periperi / Kandhari / Honey (Piece Only)", img: ASSETS.dishPeri, portions: [
    { label: "Quarter", price: 145 }, { label: "Half", price: 265 },
    { label: "Half + Qtr", price: 405 }, { label: "Full", price: 485 },
  ]},
  { name: "Beef (Piece Only)", img: ASSETS.dishBeef, portions: [
    { label: "Quarter", price: 145 }, { label: "Half", price: 270 },
    { label: "Half + Qtr", price: 410 }, { label: "Full", price: 495 },
  ]},
];

const MALAPPURAM_JUICES: Juice[] = [
  { name: "Fresh Lime", price: 25 },
  { name: "Mint Lime", price: 30 },
  { name: "Grape Juice", price: 50 },
  { name: "Avacado Shake", price: 80 },
  { name: "Dates Shake", price: 80 },
  { name: "Special Arabian Shake", price: 95 },
  { name: "Pine Apple Juice", price: 55 },
];

type SectionKey = "mandi" | "pieces" | "juice";

function MenuPage() {
  const { outletId = "vengara" } = useParams<{ outletId: string }>();
  const [active, setActive] = useState<SectionKey>("mandi");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [outletId]);

  // Find outlet details
  const currentOutlet = OUTLETS.find((o) => o.id === outletId) || OUTLETS[0];

  // Load outlet specific menus
  const mandiList = outletId === "malappuram" ? MALAPPURAM_MANDI : VENGARA_MANDI;
  const piecesList = outletId === "malappuram" ? MALAPPURAM_PIECES : VENGARA_PIECES;
  const juiceList = outletId === "malappuram" ? MALAPPURAM_JUICES : VENGARA_JUICES;

  const sections: { key: SectionKey; label: string; sub: string; Icon: typeof Drumstick; count: number }[] = [
    { key: "mandi", label: "Mandi Dishes", sub: "Aromatically Smoked Classics", Icon: Drumstick, count: mandiList.length },
    { key: "pieces", label: "Pieces Only", sub: "Just the Meat", Icon: Beef, count: piecesList.length },
    { key: "juice", label: "Juices & Shakes", sub: "Fresh & Chilled Shakes", Icon: GlassWater, count: juiceList.length },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-32">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link to="/menu" className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors" title="Back to Outlet Selection">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="text-center">
            <div className="font-display text-xl tracking-[0.25em]">{currentOutlet.location.toUpperCase()} MENU</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Saud Kuzhimandhi</div>
          </div>
          <a href={`tel:${currentOutlet.phone}`} className="w-10 h-10 grid place-items-center rounded-full gold-grad text-black">
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-6">
          <div className="relative rounded-3xl overflow-hidden border border-border">
            <img src={heroMandi} alt="Mandi platter" className="w-full h-52 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">{currentOutlet.speciality}</div>
              <h1 className="font-display text-5xl leading-none mt-1 text-white">
                {currentOutlet.location.toUpperCase()} <span className="text-gold">KITCHEN</span>
              </h1>
              <div className="mt-2 flex items-center gap-2 text-white/70 text-xs">
                <span className="h-px w-6 bg-accent" /> Wood-fired · Hand-crafted · Fresh Daily
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="max-w-3xl mx-auto px-5">
        <div className="text-center text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
          — Choose a Section —
        </div>
        <div className="grid grid-cols-3 gap-3">
          {sections.map(({ key, label, Icon, count }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`group relative rounded-2xl border p-4 flex flex-col items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? "border-accent bg-accent/10 shadow-[0_0_0_1px_var(--color-accent)]"
                    : "border-border bg-card hover:border-accent/60"
                }`}
              >
                <div className={`w-11 h-11 grid place-items-center rounded-full border ${isActive ? "border-accent text-accent" : "border-border text-foreground"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`text-[11px] font-bold uppercase tracking-wider text-center leading-tight ${isActive ? "text-accent" : ""}`}>
                  {label}
                </div>
                <div className="text-[10px] text-muted-foreground">{count} items</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Section Content */}
      <section className="max-w-3xl mx-auto px-5 mt-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px flex-1 bg-border" />
          <h2 className="font-display text-2xl tracking-wider text-gold">
            {sections.find((s) => s.key === active)?.label}
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        {active === "juice" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {juiceList.map((j) => (
              <div key={j.name} className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-4 card-shadow">
                <div>
                  <div className="font-semibold">{j.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">Fresh & Chilled</div>
                </div>
                <div className="shrink-0 px-3 py-1 rounded-full gold-grad text-black text-sm font-bold">₹{j.price}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {(active === "mandi" ? mandiList : piecesList).map((d) => (
              <article key={d.name} className="rounded-3xl border border-border bg-card overflow-hidden card-shadow">
                <div className="flex gap-4 p-3">
                  {d.img && (
                    <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-muted">
                      <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg leading-tight tracking-wide">{d.name}</h3>
                      {d.tag && (
                        <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
                          {d.tag}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">
                      {d.portions.length} portions available
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 border-t border-border">
                  {d.portions.map((p, i) => (
                    <div
                      key={p.label}
                      className={`p-3 text-center ${i < 3 ? "border-r border-border" : ""}`}
                    >
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.label}</div>
                      <div className="font-display text-lg text-gold mt-1">₹{p.price}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Bottom Order Bar */}
      <div className="fixed bottom-4 inset-x-4 z-40 max-w-3xl mx-auto">
        <div className="rounded-full gold-grad text-black flex items-center justify-between pl-5 pr-2 py-2 shadow-2xl">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <div className="leading-tight">
              <div className="font-bold text-sm">ORDER FROM {currentOutlet.location.toUpperCase()}</div>
              <div className="text-[10px] opacity-80">Call to place your order</div>
            </div>
          </div>
          <a
            href={`tel:${currentOutlet.phone}`}
            className="w-12 h-12 grid place-items-center rounded-full bg-black text-accent cursor-pointer hover:scale-105 transition-transform"
            aria-label="Call to order"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
