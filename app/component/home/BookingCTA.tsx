"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";


export default function BookingCTA(){

  return (

    <section
      className="
      relative
      py-24
      bg-black
      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        top-10
        right-20
        w-72
        h-72
        bg-orange-500/20
        rounded-full
        blur-3xl
        "
      ></div>


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        relative
        z-10
        "
      >


        <motion.div

          initial={{
            opacity:0,
            y:50
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          className="
          bg-[#151515]
          border
          border-orange-500/30
          rounded-3xl
          p-10
          md:p-16
          text-center
          "
        >



          {/* Icon */}

          <div
            className="
            w-16
            h-16
            mx-auto
            rounded-full
            bg-orange-500
            flex
            items-center
            justify-center
            mb-6
            "
          >

            <CalendarCheck
              size={32}
              className="
              text-black
              "
            />

          </div>




          <p
            className="
            text-orange-500
            uppercase
            tracking-[6px]
            mb-5
            "
          >
            Reserve Your Stay
          </p>




          <h2
            className="
            text-4xl
            md:text-6xl
            font-serif
            font-bold
            text-white
            "
          >

            Ready For Your

            <span className="
            text-orange-500
            ">
              {" "}Luxury Escape?
            </span>

          </h2>




          <p
            className="
            text-gray-300
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            "
          >
            Book your perfect room today and enjoy
            premium comfort, unforgettable experiences
            and world-class hospitality.
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



            <Link
              href="/booking"
              className="
              flex
              items-center
              gap-2
              bg-orange-500
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-orange-400
              hover:scale-105
              transition
              "
            >

              <CalendarCheck size={20}/>

              Book Now

            </Link>





            <Link
              href="/contact"
              className="
              flex
              items-center
              gap-2
              border
              border-orange-500
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-orange-500
              hover:text-black
              transition
              "
            >

              <Phone size={20}/>

              Contact Us

            </Link>



          </div>



        </motion.div>


      </div>


    </section>

  );

}