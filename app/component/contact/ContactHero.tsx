"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/contacttimg.png"
        alt="Contact Luxury Hotel"
        fill
        priority
        quality={100}
        className="
          object-cover
          object-center
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/70
          via-black/40
          to-black/20
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
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-3xl"
        >

          <p
            className="
              text-orange-500
              tracking-[8px]
              uppercase
              font-semibold
              mb-8
            "
          >
            Contact Luxury Hotel
          </p>


          <h1
            className="
              text-5xl
              md:text-7xl
              font-serif
              font-bold
              text-white
              leading-tight
            "
          >
            We Are Here To
            <br />
            Welcome You
          </h1>


          <p
            className="
              mt-8
              text-gray-300
              text-lg
              leading-8
              max-w-2xl
            "
          >
            Have questions about reservations, rooms or our luxury services?
            Contact our team anytime.
          </p>


          <div className="flex gap-5 mt-10">

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
                gap-3
                transition
              "
            >
              <Phone size={20}/>
              Call Now
            </button>


            <button
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/30
                text-white
                hover:bg-white/10
                flex
                items-center
                gap-3
                transition
              "
            >
              Explore Hotel
              <ArrowRight size={20}/>
            </button>

          </div>


        </motion.div>

      </div>

    </section>
  );
}