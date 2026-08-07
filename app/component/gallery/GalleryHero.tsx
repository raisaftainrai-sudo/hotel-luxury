"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

export default function GalleryHero() {
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
        src="/mIN2I.png"
        alt="Luxury Hotel Gallery"
        fill
        priority
        className="object-cover"
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
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Small Heading */}
          <div
            className="
            flex
            items-center
            gap-3
            text-orange-500
            uppercase
            tracking-[5px]
            font-semibold
            "
          >
            <Camera size={22} />
            Gallery
          </div>

          {/* Main Heading */}
          <h1
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-serif
            font-bold
            text-white
            leading-tight
            drop-shadow-2xl
            "
          >
            Explore Luxury
            <br />
            Hotel Moments
          </h1>

          {/* Description */}
          <p
            className="
            mt-6
            text-white
            text-lg
            leading-8
            max-w-2xl
            drop-shadow-lg
            "
          >
            Discover our elegant rooms, premium suites, dining spaces and
            unforgettable luxury experiences through our gallery.
          </p>

          {/* Buttons */}
          <div
            className="
            mt-8
            flex
            flex-wrap
            gap-5
            "
          >
            <button
              className="
              px-8
              py-4
              rounded-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              flex
              items-center
              gap-2
              transition
              shadow-xl
              "
            >
              <Sparkles size={20} />
              View Gallery
            </button>

            <button
              className="
              px-8
              py-4
              rounded-full
              border
              border-white
              text-white
              hover:bg-white/20
              backdrop-blur-sm
              transition
              "
            >
              Explore Rooms
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}