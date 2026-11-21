"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PayPalProvider({ children }: Props) {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "",

        currency: "USD",

        intent: "capture",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}