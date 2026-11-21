"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import InvoiceSummary from "@/components/InvoiceSummary";
import CustomerForm from "@/components/CustomerForm";
import PayPalProvider from "@/components/PayPalProvider";
import PayPalButton from "@/components/PayPalButton";
import { ShieldCheck, LockKeyhole, BadgeCheck } from "lucide-react";

export default function PaymentsPage() {
  const [amount, setAmount] = useState(0);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });

  return (
    <>
      <main className="min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#f7f7f7] flex justify-center pt-20 px-16"
          >
            <div className="w-full max-w-lg">
              <InvoiceSummary amount={amount} setAmount={setAmount} />
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white flex justify-center pt-20 px-16"
          >
            <div className="w-full max-w-md space-y-8">
              <CustomerForm customer={customer} setCustomer={setCustomer} />

              <div>
                <PayPalProvider>
                  <PayPalButton amount={amount} customer={customer} />
                </PayPalProvider>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <ShieldCheck
                    className="mx-auto mb-2 text-green-600"
                    size={22}
                  />
                  <p className="text-sm font-medium">Secure</p>
                </div>

                <div className="text-center">
                  <LockKeyhole
                    className="mx-auto mb-2 text-blue-600"
                    size={22}
                  />
                  <p className="text-sm font-medium">SSL</p>
                </div>

                <div className="text-center">
                  <BadgeCheck
                    className="mx-auto mb-2 text-purple-600"
                    size={22}
                  />
                  <p className="text-sm font-medium">Verified</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
