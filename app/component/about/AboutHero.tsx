"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Image */}
      <Image
        src="/img888.png"
        alt="Luxury Hotel About"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Orange Glow */}
      <div
        className="
          absolute
          right-0
          top-20
          w-[400px]
          h-[400px]
          bg-orange-500/20
          blur-[130px]
          rounded-full
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          w-full
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-white/10
              border
              border-orange-400/30
              backdrop-blur-xl
              text-orange-300
              text-sm
              uppercase
              tracking-[4px]
            "
          >
            <Sparkles size={16} />
            About LUXORA
          </div>

          {/* Heading */}
          <h1
            className="
              mt-8
              text-5xl
              md:text-7xl
              font-serif
              font-bold
              leading-tight
              text-white
            "
          >
            A Story Of
            <span className="block text-orange-400">
              Luxury & Elegance
            </span>
          </h1>

          {/* Paragraph */}
          <p
            className="
              mt-6
              text-gray-200
              text-lg
              md:text-xl
              leading-8
              max-w-2xl
            "
          >
            At LUXORA, we create unforgettable experiences with elegant
            rooms, exceptional dining and world-class hospitality designed
            for every guest.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            {/* Discover More */}
            <Link href="/contact">
              <button
                className="
                  group
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  rounded-full
                  bg-orange-500
                  text-white
                  font-semibold
                  transition-all
                  duration-500
                  hover:bg-orange-600
                  hover:scale-110
                  hover:shadow-[0_20px_45px_rgba(249,115,22,0.45)]
                  active:scale-95
                "
              >
                {/* Shine Effect */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10 flex items-center gap-3">
                  Discover More

                  <ArrowRight
                    size={20}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                    "
                  />
                </span>
              </button>
            </Link>

            {/* View Rooms */}
            <Link href="/rooms">
              <button
                className="
                  group
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-xl
                  text-white
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-black
                  hover:border-orange-400
                  hover:scale-110
                  hover:shadow-[0_20px_45px_rgba(255,255,255,0.35)]
                  active:scale-95
                "
              >
                {/* Shine Effect */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">
                  View Rooms
                </span>
              </button>
            </Link>

          </div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          gap-6
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          px-8
          py-5
          z-10
        "
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white">15+</h3>
          <p className="text-gray-300 text-sm">
            Years Experience
          </p>
        </div>

        <div className="w-px bg-white/20" />

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white">100+</h3>
          <p className="text-gray-300 text-sm">
            Luxury Rooms
          </p>
        </div>

        <div className="w-px bg-white/20" />

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white">50k+</h3>
          <p className="text-gray-300 text-sm">
            Happy Guests
          </p>
        </div>
      </div>
    </section>
  );
}