"use client";

interface Props {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

export default function InvoiceSummary({
  amount,
  setAmount,
}: Props) {
  return (
    <div className="h-full flex flex-col">

      {/* Logo */}

      <div className="flex items-center gap-3">

        <div className="h-12 w-12 rounded-xl bg-black text-white flex items-center justify-center text-lg font-bold">
          Z
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Zentrok
          </h2>

          <p className="text-sm text-gray-500">
            Secure Checkout
          </p>
        </div>

      </div>

      {/* Spacer */}

      <div className="flex-1 mt-16">

        <p className="text-sm text-gray-500 uppercase tracking-wider">
          Digital Agency
        </p>

        <h1 className="mt-3 text-3xl font-semibold text-gray-900">
          Invoice Payment
        </h1>

        <p className="mt-2 text-gray-500 leading-7">
          Enter the payment amount and securely complete your
          transaction using PayPal.
        </p>

        {/* Amount */}

        <div className="mt-12">

          <label className="text-sm font-medium text-gray-600">
            Amount
          </label>

          <div className="mt-3 relative">

            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-4xl font-semibold text-gray-900">
              $
            </span>

            <input
              type="number"
              min={1}
              step="0.01"
              value={amount || ""}
              onChange={(e) =>
                setAmount(Number(e.target.value))
              }
              placeholder="0.00"
              className="
                h-20
                w-full
                rounded-2xl
                border
                border-gray-300
                bg-white
                pl-16
                pr-5
                text-4xl
                font-semibold
                text-gray-900
                outline-none
                transition
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
              "
            />

          </div>

        </div>

        {/* Summary */}

        <div className="mt-12 rounded-2xl border border-gray-200 p-6">

          <div className="flex justify-between py-3">

            <span className="text-gray-500">
              Service
            </span>

            <span className="font-medium text-gray-900">
              IT Services
            </span>

          </div>

          <div className="flex justify-between py-3">

            <span className="text-gray-500">
              Currency
            </span>

            <span className="font-medium text-gray-900">
              USD
            </span>

          </div>

          <div className="my-4 border-t border-gray-200" />

          <div className="flex justify-between">

            <span className="text-lg font-medium text-gray-700">
              Total
            </span>

            <span className="text-2xl font-bold text-gray-900">
              ${amount.toFixed(2)}
            </span>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-16">

        <div className="flex items-center gap-3 text-gray-500">

          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          </svg>

          <span>
            Payments are securely processed by PayPal.
          </span>

        </div>

      </div>

    </div>
  );
}