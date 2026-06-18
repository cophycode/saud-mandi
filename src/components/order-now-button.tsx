import type { ButtonHTMLAttributes, ReactNode } from "react";

import { openOutletPicker } from "../lib/outlet-picker";

type OrderNowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

function OrderNowButton({ children, className, onClick, ...props }: OrderNowButtonProps) {
  return (
    <button
      type="button"
      {...props}
      onClick={(event) => {
        openOutletPicker();
        onClick?.(event);
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export default OrderNowButton;
