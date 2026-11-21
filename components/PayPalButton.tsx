"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";
import { Lock, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

interface Customer {
  name: string;
  email: string;
  phone: string;
  company: string;
  notes: string;
}

interface Props {
  amount: number;
  customer: Customer;
}

export default function PayPalButton({ amount, customer }: Props) {
  const router = useRouter();
  const valid = customer.name && customer.email && customer.phone && amount > 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <Lock className="text-blue-600" size={18} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Payment Method
          </h3>

          <p className="text-gray-500 text-sm">Securely processed by PayPal</p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 p-6 bg-gray-50">
        <div className="flex justify-between">
          <span className="text-gray-500">Amount</span>

          <span className="text-2xl font-semibold text-gray-900">
            ${amount.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-8">
        <PayPalButtons
          disabled={!valid}
          style={{
            layout: "vertical",
            color: "gold",
            shape: "rect",
            height: 50,
            label: "paypal",
          }}
          createOrder={async () => {
            const res = await fetch("/api/paypal/create-order", {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                amount,
                customer,
              }),
            });

            const data = await res.json();

            return data.id;
          }}
          onApprove={async (data) => {
            alert("onApprove started");

            console.log("onApprove", data);

            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            });

            alert("Capture request finished");

            const result = await res.json();

            // console.log("Capture Result:", result);
            // alert(JSON.stringify(result, null, 2));

            console.log("Capture Result:", result);

            alert(JSON.stringify(result));

            if (result.status === "COMPLETED") {
              alert("Redirecting");

              router.push(
                `/payment-success?transaction=${result.id}&amount=${amount}`,
              );
            } else {
              alert("Status: " + result.status);
            }
          }}
          onError={(err) => {
            console.error(err);
            alert("PayPal Error");
          }}
          onCancel={() => {
            alert("Payment Cancelled");
          }}
        />
      </div>

      <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
        <ShieldCheck className="text-green-500" size={18} />

        <span>SSL secured checkout • PCI DSS compliant</span>
      </div>
    </div>
  );
}
