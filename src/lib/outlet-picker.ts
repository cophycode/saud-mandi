export const OUTLET_PICKER_EVENT = "open-outlet-picker";

export const openOutletPicker = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(OUTLET_PICKER_EVENT));
};
