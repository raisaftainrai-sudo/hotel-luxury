"use client";

import { useState } from "react";
import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function DatePicker() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-orange-500 uppercase tracking-[4px] font-medium">
            Select Dates
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
            Choose Your Stay Dates
          </h2>

          <p className="text-gray-600 mt-4">
            Select check-in and check-out dates for your luxury stay.
          </p>

        </div>

        {/* Date Card */}

        <div className="bg-[#faf7f2] rounded-3xl shadow-xl p-8">

          <div className="grid md:grid-cols-2 gap-8">

            {/* Check In */}

            <div>

              <label className="text-gray-700 font-medium">
                Check In
              </label>

              <div className="relative mt-3">

                <CalendarDays
                  size={22}
                  className="absolute left-4 top-4 text-orange-500"
                />

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full py-4 pl-12 rounded-xl border border-gray-200 outline-none focus:border-orange-500 bg-white"
                />

              </div>

            </div>

            {/* Check Out */}

            <div>

              <label className="text-gray-700 font-medium">
                Check Out
              </label>

              <div className="relative mt-3">

                <CalendarDays
                  size={22}
                  className="absolute left-4 top-4 text-orange-500"
                />

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full py-4 pl-12 rounded-xl border border-gray-200 outline-none focus:border-orange-500 bg-white"
                />

              </div>

            </div>

          </div>

          {/* Selected Dates */}

          <div className="mt-8 bg-black text-white rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">

            <div>

              <p className="text-gray-300 text-sm">
                Your Selected Stay
              </p>

              <div className="flex items-center gap-3 mt-2 font-semibold">

                <span>
                  {checkIn || "Check In"}
                </span>

                <ArrowRight
                  size={20}
                  className="text-orange-500"
                />

                <span>
                  {checkOut || "Check Out"}
                </span>

              </div>

            </div>

            <button
              className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition"
            >
              Continue
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}