import Link from "next/link";
import { CheckCircle2, ArrowRight, ReceiptText } from "lucide-react";

interface Props {
  searchParams: Promise<{
    transaction?: string;
    amount?: string;
  }>;
}

export default async function PaymentSuccessPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const transaction = params.transaction ?? "Unavailable";
  const amount = params.amount ?? "0.00";

  return (
    <main className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl rounded-3xl bg-white border border-gray-200 shadow-xl p-10">

        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="text-green-600" size={60} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-center text-4xl font-bold text-gray-900">
          Payment Successful
        </h1>

        <p className="mt-3 text-center text-gray-500 text-lg">
          Thank you! Your payment has been processed successfully.
        </p>

        {/* Receipt */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-6">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Transaction ID
              </p>

              <p className="font-semibold text-gray-900 break-all mt-1">
                {transaction}
              </p>
            </div>

            <ReceiptText
              size={30}
              className="text-gray-400"
            />
          </div>

          <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
            <span className="text-gray-500">
              Amount Paid
            </span>

            <span className="text-3xl font-bold text-gray-900">
              ${amount}
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <Link
            href="/"
            className="flex-1 rounded-xl bg-[#0070f3] hover:bg-[#005fd1] transition text-white text-center py-4 font-semibold"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="flex-1 rounded-xl border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition text-gray-900 text-center py-4 font-semibold flex items-center justify-center gap-2"
          >
            Contact Support
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Footer Note */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            A payment confirmation has been sent to your registered email address.
            If you have any questions, our support team is here to help.
          </p>
        </div>

      </div>
    </main>
  );
}