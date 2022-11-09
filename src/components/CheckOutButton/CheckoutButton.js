import React from "react";

import "./CheckOutButton.css";

function CheckoutButton({ type = "button", children, ...props }) {
  return (
    <button type={type} {...props} className="btn btn-lg checkout">
      {children}
    </button>
  );
}

export default CheckoutButton;