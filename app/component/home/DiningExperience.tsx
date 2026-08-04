"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DiningExperience() {
  return (
    <section className="
    bg-black
    py-24
    overflow-hidden
    ">


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
          h-[550px]
          rounded-3xl
          overflow-hidden
          "
        >

          <Image
            src="/img5.avif"
            alt="Luxury Restaurant"
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
            tracking-[6px]
            mb-5
            "
          >
            Fine Dining
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

            Taste The Art Of

            <span className="
            text-orange-500
            ">
              {" "}Luxury Cuisine
            </span>

          </h2>




          <p
            className="
            text-gray-300
            text-lg
            mt-6
            leading-relaxed
            "
          >
            Experience unforgettable dining moments with
            world-class chefs, premium ingredients and
            carefully crafted dishes in an elegant atmosphere.
          </p>




          {/* Features */}
          <div className="
          mt-8
          space-y-4
          ">


            <div className="
            flex
            items-center
            gap-4
            text-white
            ">
              <span className="
              w-3
              h-3
              bg-orange-500
              rounded-full
              ">
              </span>

              International Cuisine
            </div>



            <div className="
            flex
            items-center
            gap-4
            text-white
            ">
              <span className="
              w-3
              h-3
              bg-orange-500
              rounded-full
              ">
              </span>

              Professional Chefs
            </div>



            <div className="
            flex
            items-center
            gap-4
            text-white
            ">
              <span className="
              w-3
              h-3
              bg-orange-500
              rounded-full
              ">
              </span>

              Private Dining Experience
            </div>


          </div>





          {/* Button */}
          <Link
            href="/dining"
            className="
            inline-block
            mt-10
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
            Explore Dining
          </Link>



        </motion.div>


      </div>


    </section>
  );
}