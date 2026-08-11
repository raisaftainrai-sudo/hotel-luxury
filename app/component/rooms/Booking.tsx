
"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  BedDouble,
  Mail,
  Phone,
  User,
  Sparkles,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden bg-black py-28">

        {/* ================= BACKGROUND GLOW ================= */}

        <motion.div
          className="
            absolute
            top-20
            left-10
            w-[350px]
            h-[350px]
            bg-orange-500/20
            blur-[120px]
            rounded-full
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            bottom-0
            right-10
            w-[400px]
            h-[400px]
            bg-yellow-500/10
            blur-[150px]
            rounded-full
          "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ================= LEFT SIDE ================= */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >

              {/* Small Heading */}

              <motion.div
                className="
                  flex
                  items-center
                  gap-2
                  text-orange-400
                  uppercase
                  tracking-[5px]
                  font-semibold
                  cursor-default
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  letterSpacing: "6px",
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Sparkles size={18} />
                </motion.div>

                Luxury Booking
              </motion.div>

              {/* Main Heading */}

              <motion.h1
                className="
                  mt-6
                  text-5xl
                  md:text-7xl
                  font-serif
                  font-bold
                  text-white
                  leading-tight
                "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
              >
                Reserve Your
                <br />

                <motion.span
                  className="
                    text-orange-400
                    inline-block
                    cursor-default
                  "
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(251,146,60,0)",
                      "0 0 25px rgba(251,146,60,0.7)",
                      "0 0 0px rgba(251,146,60,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  whileHover={{
                    scale: 1.05,
                    letterSpacing: "2px",
                  }}
                >
                  Dream Stay
                </motion.span>
              </motion.h1>

              {/* Paragraph */}

              <motion.p
                className="
                  mt-6
                  text-gray-400
                  text-lg
                  leading-relaxed
                  max-w-lg
                "
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
              >
                Experience world-class comfort, luxury rooms
                and unforgettable hospitality designed specially
                for you.
              </motion.p>

              {/* ================= FEATURES ================= */}

              <div className="mt-10 space-y-5">

                {/* Feature 1 */}

                <motion.div
                  className="
                    flex
                    gap-4
                    items-center
                    text-white
                    p-3
                    rounded-2xl
                    cursor-pointer
                    border
                    border-transparent
                  "
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                    backgroundColor: "rgba(251,146,60,0.08)",
                    borderColor: "rgba(251,146,60,0.5)",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="
                      p-3
                      rounded-full
                      bg-orange-500/20
                      text-orange-400
                    "
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                      boxShadow:
                        "0 0 25px rgba(251,146,60,0.5)",
                    }}
                  >
                    <ShieldCheck />
                  </motion.div>

                  <span>Secure Reservation System</span>
                </motion.div>

                {/* Feature 2 */}

                <motion.div
                  className="
                    flex
                    gap-4
                    items-center
                    text-white
                    p-3
                    rounded-2xl
                    cursor-pointer
                    border
                    border-transparent
                  "
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                    backgroundColor: "rgba(251,146,60,0.08)",
                    borderColor: "rgba(251,146,60,0.5)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="
                      p-3
                      rounded-full
                      bg-orange-500/20
                      text-orange-400
                    "
                    whileHover={{
                      scale: 1.15,
                      rotate: -10,
                      boxShadow:
                        "0 0 25px rgba(251,146,60,0.5)",
                    }}
                  >
                    <Star />
                  </motion.div>

                  <span>5 Star Luxury Experience</span>
                </motion.div>

                {/* Feature 3 */}

                <motion.div
                  className="
                    flex
                    gap-4
                    items-center
                    text-white
                    p-3
                    rounded-2xl
                    cursor-pointer
                    border
                    border-transparent
                  "
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                    backgroundColor: "rgba(251,146,60,0.08)",
                    borderColor: "rgba(251,146,60,0.5)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="
                      p-3
                      rounded-full
                      bg-orange-500/20
                      text-orange-400
                    "
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                      boxShadow:
                        "0 0 25px rgba(251,146,60,0.5)",
                    }}
                  >
                    <BedDouble />
                  </motion.div>

                  <span>Premium Rooms & Suites</span>
                </motion.div>

              </div>
            </motion.div>

            {/* ================= BOOKING FORM ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 0 80px rgba(255,165,0,0.25)",
              }}
              className="
                bg-white/5
                border
                border-orange-400/30
                backdrop-blur-2xl
                rounded-[45px]
                p-8
                md:p-12
                shadow-[0_0_60px_rgba(255,165,0,0.15)]
                transition-all
                duration-500
              "
            >

              {/* Form Heading */}

              <motion.h2
                className="
                  text-3xl
                  font-bold
                  text-white
                  mb-8
                  cursor-default
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  color: "#fb923c",
                  x: 5,
                }}
              >
                Book Your Table
              </motion.h2>

              <form
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-5
                "
              >

                {/* ================= NAME ================= */}

                <motion.div
                  className="relative group"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                >
                  <User
                    className="
                      absolute
                      left-4
                      top-4
                      text-orange-400
                      z-10
                      transition-all
                      duration-300
                      group-hover:scale-125
                    "
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      w-full
                      bg-black/50
                      border
                      border-white/20
                      rounded-full
                      py-4
                      pl-12
                      pr-4
                      text-white
                      outline-none

                      transition-all
                      duration-300

                      hover:border-orange-400
                      hover:bg-orange-500/5
                      hover:shadow-[0_0_15px_rgba(251,146,60,0.35)]

                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-400/20
                      focus:shadow-[0_0_20px_rgba(251,146,60,0.25)]
                    "
                  />
                </motion.div>

                {/* ================= EMAIL ================= */}

                <motion.div
                  className="relative group"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                >
                  <Mail
                    className="
                      absolute
                      left-4
                      top-4
                      text-orange-400
                      z-10
                      transition-all
                      duration-300
                      group-hover:scale-125
                    "
                    size={20}
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      w-full
                      bg-black/50
                      border
                      border-white/20
                      rounded-full
                      py-4
                      pl-12
                      pr-4
                      text-white
                      outline-none

                      transition-all
                      duration-300

                      hover:border-orange-400
                      hover:bg-orange-500/5
                      hover:shadow-[0_0_15px_rgba(251,146,60,0.35)]

                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-400/20
                      focus:shadow-[0_0_20px_rgba(251,146,60,0.25)]
                    "
                  />
                </motion.div>

                {/* ================= PHONE ================= */}

                <motion.div
                  className="relative group"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                >
                  <Phone
                    className="
                      absolute
                      left-4
                      top-4
                      text-orange-400
                      z-10
                      transition-all
                      duration-300
                      group-hover:scale-125
                    "
                    size={20}
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      w-full
                      bg-black/50
                      border
                      border-white/20
                      rounded-full
                      py-4
                      pl-12
                      pr-4
                      text-white
                      outline-none

                      transition-all
                      duration-300

                      hover:border-orange-400
                      hover:bg-orange-500/5
                      hover:shadow-[0_0_15px_rgba(251,146,60,0.35)]

                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-400/20
                      focus:shadow-[0_0_20px_rgba(251,146,60,0.25)]
                    "
                  />
                </motion.div>

                {/* ================= ROOM ================= */}

                <motion.div
                  className="relative group"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                >
                  <BedDouble
                    className="
                      absolute
                      left-4
                      top-4
                      text-orange-400
                      z-10
                      transition-all
                      duration-300
                      group-hover:scale-125
                    "
                  />

                  <select
                    defaultValue=""
                    className="
                      w-full
                      bg-black/50
                      border
                      border-white/20
                      rounded-full
                      py-4
                      pl-12
                      pr-4
                      text-white
                      outline-none
                      cursor-pointer

                      transition-all
                      duration-300

                      hover:border-orange-400
                      hover:bg-orange-500/5
                      hover:shadow-[0_0_15px_rgba(251,146,60,0.35)]

                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-400/20
                    "
                  >
                    <option value="" disabled>
                      Select Room
                    </option>

                    <option>Deluxe Room</option>
                    <option>Luxury Suite</option>
                    <option>Royal Villa</option>
                  </select>
                </motion.div>

                {/* ================= DATE ================= */}

                <motion.div
                  className="relative group"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                >
                  <CalendarDays
                    className="
                      absolute
                      left-4
                      top-4
                      text-orange-400
                      z-10
                      transition-all
                      duration-300
                      group-hover:scale-125
                    "
                  />

                  <input
                    type="date"
                    className="
                      w-full
                      bg-black/50
                      border
                      border-white/20
                      rounded-full
                      py-4
                      pl-12
                      pr-4
                      text-white
                      outline-none
                      cursor-pointer

                      transition-all
                      duration-300

                      hover:border-orange-400
                      hover:bg-orange-500/5
                      hover:shadow-[0_0_15px_rgba(251,146,60,0.35)]

                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-400/20
                    "
                  />
                </motion.div>

                {/* ================= GUESTS ================= */}

                <motion.div
                  className="relative group"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                >
                  <Users
                    className="
                      absolute
                      left-4
                      top-4
                      text-orange-400
                      z-10
                      transition-all
                      duration-300
                      group-hover:scale-125
                    "
                  />

                  <select
                    defaultValue=""
                    className="
                      w-full
                      bg-black/50
                      border
                      border-white/20
                      rounded-full
                      py-4
                      pl-12
                      pr-4
                      text-white
                      outline-none
                      cursor-pointer

                      transition-all
                      duration-300

                      hover:border-orange-400
                      hover:bg-orange-500/5
                      hover:shadow-[0_0_15px_rgba(251,146,60,0.35)]

                      focus:border-orange-400
                      focus:ring-2
                      focus:ring-orange-400/20
                    "
                  >
                    <option value="" disabled>
                      Guests
                    </option>

                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>Family</option>
                  </select>
                </motion.div>

                {/* ================= BUTTON ================= */}

                <motion.button
                  type="submit"
                  className="
                    md:col-span-2
                    mt-4
                    bg-gradient-to-r
                    from-orange-400
                    to-yellow-500
                    text-black
                    font-bold
                    py-4
                    rounded-full
                    cursor-pointer

                    shadow-[0_0_30px_rgba(255,165,0,.5)]

                    transition-all
                    duration-300
                  "
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow:
                      "0 0 55px rgba(255,165,0,.85)",
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  <motion.span
                    whileHover={{
                      letterSpacing: "1px",
                    }}
                  >
                    Confirm Luxury Booking
                  </motion.span>
                </motion.button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}

