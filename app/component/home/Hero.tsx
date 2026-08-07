"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">


      {/* Background Image Only */}
  
      <Image
        src="/imgluxora.png"
        alt="Luxury Hotel"
        fill
        priority
        className="object-cove"
       
      />

  {/* Overlay */}
  {/* Light Overlay */}
<div
  className="
    absolute
    inset-0
    bg-black/40
    z-0
  "
/>


      {/* Content */}
      <div
        className="
        relative
        z-10
        h-full
        flex
        items-center
        justify-center
        px-6
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
            duration: 1
          }}
          className="
          max-w-5xl
          text-center
          "
        >



          {/* Small Text */}
          <p
            className="
            text-orange-500
            uppercase
            tracking-[8px]
            text-sm
            md:text-base
            mb-6
            font-medium
            drop-shadow-lg
            "
          >
            Welcome To LUXORA HOTEL
          </p>




          {/* Main Heading */}
          <h1
            className="
            text-5xl
            md:text-7xl
            font-serif
            font-bold
            text-white
            leading-tight
            drop-shadow-2xl
            "
          >

            Experience

            <span
              className="
              text-orange-500
              "
            >
              {" "}Luxury{" "}
            </span>

            Beyond Expectations

          </h1>




          {/* Description */}
          <p
            className="
            mt-6
            text-white
            text-lg
            md:text-xl
            max-w-3xl
            mx-auto
            drop-shadow-lg
            "
          >
            Discover elegant rooms, world-class dining,
            relaxing spa experiences and unforgettable
            hospitality crafted for your perfect stay.
          </p>





          {/* Buttons */}
          <div
            className="
            flex
            justify-center
            gap-5
            mt-10
            flex-wrap
            "
          >



            {/* Book Button */}
            <Link
              href="/booking"
              className="
              bg-orange-500
              text-black
              px-9
              py-4
              rounded-full
              font-semibold
              hover:bg-orange-400
              hover:scale-105
              transition
              duration-300
              shadow-xl
              "
            >
              Book Your Stay
            </Link>




            {/* Explore Button */}
            <Link
              href="/rooms"
              className="
              border
              border-white
              text-white
              px-9
              py-4
              rounded-full
              font-semibold
              hover:bg-white
              hover:text-black
              transition
              duration-300
              "
            >
              Explore Rooms
            </Link>


          </div>


        </motion.div>


      </div>


    </section>
  );
}