"use client";

import {
  CalendarDays,
  Users,
  BedDouble,
  Sparkles,
  CreditCard,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function BookingSummaryPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#faf7f2] py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition mb-8"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-orange-500 uppercase tracking-[4px] font-medium">
            Booking Summary
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
            Review Your Stay
          </h1>

          <p className="text-gray-600 mt-4">
            Please review your booking details before confirmation.
          </p>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Room Details */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <BedDouble
                    size={24}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900">
                    Luxury King Room
                  </h2>

                  <p className="text-gray-500">
                    Premium luxury accommodation
                  </p>
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* Check In */}
                <div className="p-5 rounded-2xl bg-[#faf7f2]">
                  <div className="flex items-center gap-3">

                    <CalendarDays
                      size={22}
                      className="text-orange-500"
                    />

                    <div>
                      <p className="text-sm text-gray-500">
                        Check-in
                      </p>

                      <p className="font-semibold text-gray-900">
                        20 August 2026
                      </p>
                    </div>

                  </div>
                </div>

                {/* Check Out */}
                <div className="p-5 rounded-2xl bg-[#faf7f2]">
                  <div className="flex items-center gap-3">

                    <CalendarDays
                      size={22}
                      className="text-orange-500"
                    />

                    <div>
                      <p className="text-sm text-gray-500">
                        Check-out
                      </p>

                      <p className="font-semibold text-gray-900">
                        23 August 2026
                      </p>
                    </div>

                  </div>
                </div>

                {/* Guests */}
                <div className="p-5 rounded-2xl bg-[#faf7f2]">
                  <div className="flex items-center gap-3">

                    <Users
                      size={22}
                      className="text-orange-500"
                    />

                    <div>
                      <p className="text-sm text-gray-500">
                        Guests
                      </p>

                      <p className="font-semibold text-gray-900">
                        2 Guests
                      </p>
                    </div>

                  </div>
                </div>

                {/* Room */}
                <div className="p-5 rounded-2xl bg-[#faf7f2]">
                  <div className="flex items-center gap-3">

                    <BedDouble
                      size={22}
                      className="text-orange-500"
                    />

                    <div>
                      <p className="text-sm text-gray-500">
                        Room
                      </p>

                      <p className="font-semibold text-gray-900">
                        Luxury King Room
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {/* Guest Information */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Guest Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-gray-500">
                    Full Name
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    Your Name
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email Address
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    guest@example.com
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone Number
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    +92 300 1234567
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Number of Guests
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    2 Guests
                  </p>
                </div>

              </div>

            </div>

            {/* Extra Services */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Sparkles
                    size={24}
                    className="text-orange-500"
                  />
                </div>

                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Extra Services
                </h2>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between items-center p-4 rounded-2xl bg-[#faf7f2]">
                  <div>
                    <p className="font-semibold">
                      Breakfast
                    </p>

                    <p className="text-sm text-gray-500">
                      Daily breakfast included
                    </p>
                  </div>

                  <span className="font-semibold">
                    $30
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-2xl bg-[#faf7f2]">
                  <div>
                    <p className="font-semibold">
                      Airport Pickup
                    </p>

                    <p className="text-sm text-gray-500">
                      Private airport transfer
                    </p>
                  </div>

                  <span className="font-semibold">
                    $50
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT PRICE */}
          <div>

            <div className="bg-black text-white rounded-3xl p-8 shadow-xl lg:sticky lg:top-8">

              <div className="flex items-center gap-3 mb-8">

                <CreditCard
                  size={25}
                  className="text-orange-400"
                />

                <h2 className="text-2xl font-serif font-bold">
                  Price Summary
                </h2>

              </div>

              <div className="flex justify-between mb-4">
                <span className="text-gray-300">
                  Room
                </span>

                <span>
                  $450
                </span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="text-gray-300">
                  Extra Services
                </span>

                <span>
                  $80
                </span>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-gray-300">
                  Taxes & Fees
                </span>

                <span>
                  $53
                </span>
              </div>

              <div className="border-t border-gray-700 pt-6">

                <div className="flex justify-between items-center">

                  <span className="text-lg">
                    Total
                  </span>

                  <span className="text-3xl font-bold text-orange-400">
                    $583
                  </span>

                </div>

              </div>

              {/* Confirm Button */}
              <button
                onClick={() => router.push("/booking/confirmation")}
                className="
                  mt-8
                  w-full
                  py-4
                  rounded-full
                  bg-orange-500
                  text-white
                  font-semibold
                  hover:bg-white
                  hover:text-black
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                Confirm Booking
              </button>

              <div className="flex items-center justify-center gap-2 mt-5">

                <CheckCircle
                  size={16}
                  className="text-green-400"
                />

                <p className="text-sm text-gray-400">
                  Secure booking & payment
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}