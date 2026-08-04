"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="bg-black py-24 overflow-hidden">

      <div className="
      max-w-7xl 
      mx-auto 
      px-6
      grid 
      lg:grid-cols-2 
      gap-12 
      items-center
      ">


        {/* Image */}
        <motion.div
          initial={{
            opacity:0,
            x:-50
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:0.8
          }}
          className="
          relative
          h-[500px]
          rounded-3xl
          overflow-hidden
          "
        >

          <Image
            src="/img11.png"
            alt="Luxury Room"
            fill
            className="
            object-cover
            "
          />

        </motion.div>




        {/* Content */}
        <motion.div
          initial={{
            opacity:0,
            x:50
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:0.8
          }}
        >


          <p
            className="
            text-orange-500
            uppercase
            tracking-[5px]
            mb-5
            "
          >
            About Our Hotel
          </p>



          <h2
            className="
            text-4xl
            md:text-5xl
            font-serif
            font-bold
            text-white
            leading-tight
            "
          >

            Where Luxury Meets
            <span className="text-orange-500">
              {" "}Comfort
            </span>

          </h2>



          <p
            className="
            text-gray-300
            mt-6
            text-lg
            leading-relaxed
            "
          >
            LUXORA Hotel offers a perfect blend of modern
            elegance and unforgettable hospitality. Enjoy
            luxurious rooms, exceptional services and
            beautiful experiences designed for every guest.
          </p>



          {/* Stats */}

          <div
            className="
            grid
            grid-cols-3
            gap-5
            mt-10
            "
          >

            <div>
              <h3 className="
              text-3xl
              font-bold
              text-orange-500
              ">
                120+
              </h3>

              <p className="text-gray-400">
                Rooms
              </p>
            </div>



            <div>
              <h3 className="
              text-3xl
              font-bold
              text-orange-500
              ">
                50K+
              </h3>

              <p className="text-gray-400">
                Guests
              </p>
            </div>



            <div>
              <h3 className="
              text-3xl
              font-bold
              text-orange-500
              ">
                15
              </h3>

              <p className="text-gray-400">
                Awards
              </p>
            </div>


          </div>



        </motion.div>


      </div>


    </section>
  );
}