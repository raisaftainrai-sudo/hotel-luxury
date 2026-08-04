"use client";

import { motion } from "framer-motion";
import {
  Waves,
  Utensils,
  Dumbbell,
  Sparkles,
  ConciergeBell,
  Wifi
} from "lucide-react";


const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    desc: "Relax in our beautiful infinity pool with luxury surroundings."
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    desc: "Enjoy delicious international cuisine prepared by expert chefs."
  },
  {
    icon: Sparkles,
    title: "Luxury Spa",
    desc: "Experience peaceful spa treatments and wellness services."
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    desc: "Stay active with our modern gym facilities."
  },
  {
    icon: ConciergeBell,
    title: "24/7 Service",
    desc: "Our professional team is always ready to assist you."
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    desc: "Enjoy fast and secure internet throughout the hotel."
  }
];


export default function Amenities() {
  return (
    <section className="
    bg-[#0B0B0B]
    py-24
    ">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        {/* Heading */}
        <div className="
        text-center
        mb-14
        ">

          <p className="
          text-orange-500
          uppercase
          tracking-[6px]
          mb-4
          ">
            Hotel Facilities
          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-serif
          font-bold
          text-white
          ">
            Premium
            <span className="text-orange-500">
              {" "}Amenities
            </span>
          </h2>


          <p className="
          text-gray-400
          mt-5
          max-w-2xl
          mx-auto
          ">
            Everything you need for a comfortable,
            relaxing and unforgettable stay.
          </p>

        </div>





        {/* Amenities Cards */}
        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        ">


          {amenities.map((item,index)=>{

            const Icon = item.icon;

            return(

              <motion.div
                key={index}
                initial={{
                  opacity:0,
                  y:40
                }}
                whileInView={{
                  opacity:1,
                  y:0
                }}
                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}
                className="
                bg-[#151515]
                p-8
                rounded-3xl
                border
                border-orange-500/20
                hover:border-orange-500
                transition
                group
                "
              >


                {/* Icon */}
                <div className="
                w-16
                h-16
                rounded-full
                bg-orange-500/10
                flex
                items-center
                justify-center
                mb-6
                group-hover:bg-orange-500
                transition
                ">

                  <Icon
                    size={32}
                    className="
                    text-orange-500
                    group-hover:text-black
                    transition
                    "
                  />

                </div>




                {/* Text */}

                <h3 className="
                text-2xl
                font-bold
                text-white
                mb-3
                ">
                  {item.title}
                </h3>


                <p className="
                text-gray-400
                leading-relaxed
                ">
                  {item.desc}
                </p>



              </motion.div>

            )

          })}


        </div>


      </div>


    </section>
  );
}