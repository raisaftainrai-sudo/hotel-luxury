"use client";

import { useState, useMemo } from "react";
import {
  CalendarDays,
  ArrowRight,
  Star,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DatePicker() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diff = end.getTime() - start.getTime();

    return diff > 0
      ? Math.ceil(diff / (1000 * 60 * 60 * 24))
      : 0;
  }, [checkIn, checkOut]);

  const pricePerNight = 220;
  const totalPrice = nights * pricePerNight;

  return (
    <section className="py-24 bg-gradient-to-b from-[#fffaf5] via-[#faf7f2] to-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Select Dates
          </p>

          <h2 className="text-5xl font-serif font-bold mt-4">
            Reserve Your Luxury Stay
          </h2>

          <p className="text-gray-500 mt-4">
            Select your stay dates and continue your booking.
          </p>

        </div>


        {/* ================= DATE PICKER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            bg-white
            rounded-3xl
            shadow-2xl
            p-8
            border
            border-gray-100
          "
        >

          <div className="grid md:grid-cols-2 gap-8">

            {/* CHECK IN */}

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >

              <label className="font-semibold">
                Check In
              </label>

              <div className="relative mt-3">

                <CalendarDays
                  size={22}
                  className="
                    absolute
                    left-4
                    top-4
                    text-orange-500
                    transition-all
                    duration-300
                  "
                />

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="
                    w-full
                    pl-12
                    py-4
                    rounded-xl
                    border
                    border-gray-200
                    focus:ring-2
                    focus:ring-orange-400
                    focus:border-orange-400
                    outline-none
                    transition-all
                    duration-300
                    hover:border-orange-300
                    hover:shadow-md
                  "
                />

              </div>

            </motion.div>


            {/* CHECK OUT */}

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >

              <label className="font-semibold">
                Check Out
              </label>

              <div className="relative mt-3">

                <CalendarDays
                  size={22}
                  className="
                    absolute
                    left-4
                    top-4
                    text-orange-500
                    transition-all
                    duration-300
                  "
                />

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="
                    w-full
                    pl-12
                    py-4
                    rounded-xl
                    border
                    border-gray-200
                    focus:ring-2
                    focus:ring-orange-400
                    focus:border-orange-400
                    outline-none
                    transition-all
                    duration-300
                    hover:border-orange-300
                    hover:shadow-md
                  "
                />

              </div>

            </motion.div>

          </div>


          {/* ================= BOOKING INFO ================= */}

          <div className="
            mt-10
            bg-black
            text-white
            rounded-3xl
            p-8
            transition-all
            duration-500
            hover:shadow-2xl
          ">

            <div className="grid md:grid-cols-4 gap-8 items-center">

              {/* CHECK IN */}

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >

                <p className="text-gray-400 text-sm">
                  Check In
                </p>

                <h3 className="font-semibold mt-2">
                  {checkIn || "--"}
                </h3>

              </motion.div>


              {/* CHECK OUT */}

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >

                <p className="text-gray-400 text-sm">
                  Check Out
                </p>

                <h3 className="font-semibold mt-2">
                  {checkOut || "--"}
                </h3>

              </motion.div>


              {/* STAY */}

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >

                <p className="text-gray-400 text-sm">
                  Stay
                </p>

                <h3 className="font-semibold mt-2">
                  {nights} Night{nights !== 1 && "s"}
                </h3>

                <p className="text-orange-400">
                  ${totalPrice}
                </p>

              </motion.div>


              {/* CONTINUE BUTTON */}

              <div className="flex justify-end">

                <button
                  onClick={() => setShowSummary(true)}
                  className="
                    group
                    bg-orange-500
                    hover:bg-orange-600
                    hover:scale-105
                    active:scale-95
                    transition-all
                    duration-300
                    px-8
                    py-4
                    rounded-full
                    flex
                    items-center
                    gap-2
                    shadow-lg
                    hover:shadow-orange-500/50
                  "
                >

                  Continue

                  <ArrowRight
                    className="
                      group-hover:translate-x-2
                      transition-transform
                      duration-300
                    "
                    size={18}
                  />

                </button>

              </div>

            </div>

          </div>


          {/* ================= SUMMARY ================= */}

          <AnimatePresence>

            {showSummary && (

              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="
                  mt-8
                  bg-gradient-to-r
                  from-orange-500
                  to-orange-600
                  rounded-3xl
                  p-8
                  text-white
                  shadow-2xl
                "
              >

                <h2 className="text-3xl font-bold mb-6">
                  Booking Summary
                </h2>


                <div className="grid md:grid-cols-2 gap-5">

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="
                      transition-all
                      duration-300
                    "
                  >
                    📅 Check In: {checkIn || "--"}
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="
                      transition-all
                      duration-300
                    "
                  >
                    📅 Check Out: {checkOut || "--"}
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="
                      transition-all
                      duration-300
                    "
                  >
                    🌙 Nights: {nights}
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="
                      transition-all
                      duration-300
                    "
                  >
                    💰 Total: ${totalPrice}
                  </motion.div>

                </div>


                <button
                  className="
                    mt-8
                    bg-black
                    hover:bg-gray-900
                    hover:scale-105
                    active:scale-95
                    transition-all
                    duration-300
                    px-8
                    py-4
                    rounded-full
                    shadow-lg
                  "
                >
                  Confirm Booking
                </button>

              </motion.div>

            )}

          </AnimatePresence>

        </motion.div>


        {/* ================================================= */}
        {/* PREMIUM FEATURES CARDS */}
        {/* ================================================= */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">


          {/* ================= RATING ================= */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              group
              bg-white
              shadow-xl
              rounded-2xl
              p-6
              text-center
              border
              border-transparent
              transition-all
              duration-500
              hover:shadow-2xl
              hover:border-orange-400
              cursor-pointer
            "
          >

            <Star
              className="
                mx-auto
                text-orange-500
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:rotate-12
              "
              size={34}
            />

            <h3
              className="
                font-bold
                mt-4
                transition-all
                duration-500
                group-hover:text-orange-500
              "
            >
              4.9 Rating
            </h3>

            <p className="
              text-gray-500
              mt-2
              transition-all
              duration-500
              group-hover:text-gray-700
            ">
              Trusted by thousands of guests.
            </p>

          </motion.div>


          {/* ================= CANCELLATION ================= */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              group
              bg-white
              shadow-xl
              rounded-2xl
              p-6
              text-center
              border
              border-transparent
              transition-all
              duration-500
              hover:shadow-2xl
              hover:border-orange-400
              cursor-pointer
            "
          >

            <BadgeCheck
              className="
                mx-auto
                text-orange-500
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:rotate-6
              "
              size={34}
            />

            <h3
              className="
                font-bold
                mt-4
                transition-all
                duration-500
                group-hover:text-orange-500
              "
            >
              Free Cancellation
            </h3>

            <p className="
              text-gray-500
              mt-2
              transition-all
              duration-500
              group-hover:text-gray-700
            ">
              Flexible cancellation policy.
            </p>

          </motion.div>


          {/* ================= SECURE BOOKING ================= */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              group
              bg-white
              shadow-xl
              rounded-2xl
              p-6
              text-center
              border
              border-transparent
              transition-all
              duration-500
              hover:shadow-2xl
              hover:border-orange-400
              cursor-pointer
            "
          >

            <ShieldCheck
              className="
                mx-auto
                text-orange-500
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:rotate-6
              "
              size={34}
            />

            <h3
              className="
                font-bold
                mt-4
                transition-all
                duration-500
                group-hover:text-orange-500
              "
            >
              Secure Booking
            </h3>

            <p className="
              text-gray-500
              mt-2
              transition-all
              duration-500
              group-hover:text-gray-700
            ">
              100% encrypted payment security.
            </p>

          </motion.div>


        </div>

      </div>

    </section>
  );
}