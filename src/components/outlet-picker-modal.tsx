import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, MapPin, Phone, X } from "lucide-react";

import { OUTLETS } from "../lib/outlets-data";
import { OUTLET_PICKER_EVENT } from "../lib/outlet-picker";

function OutletPickerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(OUTLET_PICKER_EVENT, handleOpen as EventListener);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(OUTLET_PICKER_EVENT, handleOpen as EventListener);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close outlet picker"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      <div className="relative z-[81] w-full max-w-2xl rounded-3xl border border-border bg-background/95 p-5 sm:p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-2">
              Choose Outlet
            </div>
            <h2 className="font-display text-3xl sm:text-4xl leading-none">
              Select where to order
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Pick an outlet and we’ll call that branch directly.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid gap-3">
          {OUTLETS.map((outlet) => (
            <a
              key={outlet.id}
              href={`tel:${outlet.phone}`}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-4 py-4 hover:border-accent/60 hover:bg-secondary/60 transition-colors"
            >
              <div className="min-w-0">
                <div className="font-display text-xl leading-tight">{outlet.name}</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span className="truncate">{outlet.address}</span>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="hidden sm:block text-right">
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Call now</div>
                  <div className="font-semibold text-sm">{outlet.phone}</div>
                </div>
                <div className="w-11 h-11 rounded-full gold-grad text-black flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default OutletPickerModal;
