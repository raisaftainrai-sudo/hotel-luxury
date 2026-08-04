"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  PhoneCall,
  ArrowRight,
  Star,
} from "lucide-react";

export default function ReservationCTA() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-[#120805] via-black to-[#2b1205]">

      {/* Premium Background Glow */}

      <div className="absolute -top-40 left-10 h-96 w-96 rounded-full bg-orange-500/30 blur-[140px]" />

      <div className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[160px]" />

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-600/20 blur-[120px]" />


      {/* Pattern Overlay */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.15),transparent_40%)]" />


      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.8}}
          viewport={{once:true}}
          className="max-w-4xl mx-auto text-center"
        >

          <div className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-orange-500/10
          border
          border-orange-400/30
          backdrop-blur-xl
          text-orange-300
          ">

            <Star size={18} className="fill-orange-400"/>

            Premium Dining Experience

          </div>


          <h2 className="
          mt-8
          text-5xl
          md:text-7xl
          font-serif
          font-bold
          text-white
          ">

            Reserve Your
            <span className="text-orange-400">
              {" "}Perfect Table
            </span>

          </h2>


          <p className="
          mt-8
          text-lg
          text-gray-300
          leading-8
          max-w-3xl
          mx-auto
          ">

            Enjoy an unforgettable dining experience at LUXORA Hotel.
            Reserve your table today and indulge in exceptional cuisine,
            elegant ambiance and world-class hospitality.

          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">


            {[
              ["25+","Signature Dishes"],
              ["5★","Guest Rating"],
              ["24/7","Reservation Desk"]
            ].map((item,index)=>(

              <motion.div
              key={index}
              whileHover={{y:-10}}
              className="
              rounded-3xl
              border
              border-orange-400/20
              bg-white/5
              backdrop-blur-xl
              p-6
              hover:bg-orange-500/10
              transition
              "
              >

                <h3 className="text-4xl font-bold text-orange-400">
                  {item[0]}
                </h3>

                <p className="text-gray-300 mt-2">
                  {item[1]}
                </p>


              </motion.div>

            ))}

          </div>


          <div className="
          mt-14
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-5
          ">


            <Link
            href="/booking"
            className="
            flex
            items-center
            gap-3
            rounded-full
            bg-orange-500
            px-8
            py-4
            text-white
            font-semibold
            hover:bg-orange-600
            hover:scale-105
            transition
            "
            >

              <CalendarCheck size={22}/>

              Book A Table

              <ArrowRight size={18}/>

            </Link>



            <Link
            href="tel:+123456789"
            className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/20
            bg-white/10
            px-8
            py-4
            text-white
            hover:bg-white/20
            hover:scale-105
            transition
            "
            >

              <PhoneCall size={22}/>

              Call Restaurant

            </Link>


          </div>


        </motion.div>

      </div>

    </section>
  );
}