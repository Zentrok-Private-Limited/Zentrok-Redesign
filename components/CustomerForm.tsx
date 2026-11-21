"use client";

import { Dispatch, SetStateAction } from "react";

interface Customer {
  name: string;
  email: string;
  phone: string;
  company: string;
  notes: string;
}

interface Props {
  customer: Customer;
  setCustomer: Dispatch<SetStateAction<Customer>>;
}

export default function CustomerForm({
  customer,
  setCustomer,
}: Props) {
  const update = (key: keyof Customer, value: string) => {
    setCustomer((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const inputStyle =
  "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black";

  return (
    <div className="max-w-xl">

      <h2 className="text-3xl font-semibold text-gray-900">
        Contact Information
      </h2>

      <p className="mt-2 text-gray-500">
        Enter your details below.
      </p>

      <div className="mt-10 space-y-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            value={customer.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="john@example.com"
            className={inputStyle}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            value={customer.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="John Doe"
            className={inputStyle}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            value={customer.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 234 567 890"
            className={inputStyle}
          />
        </div>

      </div>

      {/* Divider */}

      <div className="my-5 border-t border-gray-200" />

      {/* Payment Heading */}

      <h3 className="text-xl font-semibold text-gray-900">
        Payment
      </h3>

      <p className="mt-2 text-gray-500">
        Complete your payment securely using PayPal.
      </p>

    </div>
  );
}