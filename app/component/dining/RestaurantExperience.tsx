"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { Clock3, ChefHat, Star } from "lucide-react";

const experiences = [
  {
    title: "Fine Dining Restaurant",
    image: "/imgfinfdin.png",
    time: "7:00 AM - 11:00 PM",
    description:
      "Enjoy gourmet dishes crafted with premium ingredients in an elegant atmosphere.",
  },
  {
    title: "Rooftop Restaurant",
    image: "/imgrooftop.png",
    time: "5:00 PM - 12:00 AM",
    description:
      "Experience breathtaking skyline views while enjoying signature international cuisine.",
  },
  {
    title: "Private Dining",
    image: "/imgparivate.png",
    time: "By Reservation",
    description:
      "Celebrate special occasions with a personalized luxury dining experience.",
  },
];

export default function RestaurantExperience() {
  return (
    <section className="py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-orange-500 font-medium">
            Restaurant Experience
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Discover Exceptional Dining
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            From elegant fine dining to exclusive private experiences,
            every meal at LUXORA is crafted to create unforgettable memories.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8">

          {experiences.map((item, index) => (


            <motion.div

              key={index}

              whileHover={{
                y: -10,
                scale: 1.03
              }}

              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}

              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                border
                border-transparent
                hover:border-orange-400
                hover:shadow-orange-200
                hover:shadow-2xl
                transition-all
                duration-500
                cursor-pointer
              "

            >


              {/* Image */}

              <div className="relative h-72 overflow-hidden">


                <motion.div

                  whileHover={{
                    scale: 1.08
                  }}

                  transition={{
                    duration: 0.5
                  }}

                  className="relative h-full w-full"

                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                </motion.div>



                <div className="
                  absolute
                  top-5
                  left-5
                  bg-orange-500
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  flex
                  items-center
                  gap-2
                ">

                  <Star size={16} />
                  Premium

                </div>


              </div>



              {/* Content */}

              <div className="p-6">


                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  {item.title}
                </h3>



                <div className="flex items-center gap-2 mt-4 text-orange-500">

                  <Clock3 size={18} />

                  <span className="text-gray-700 text-sm">
                    {item.time}
                  </span>

                </div>



                <p className="mt-5 text-gray-600 leading-7">
                  {item.description}
                </p>





                  <Link href="/booking">
                    <button className="mt-6 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition">
                      <ChefHat size={20} />
                      Reserve Table
                    </button>
                  </Link>
             
              </div>

            </motion.div>


          ))}


        </div>


      </div>
    </section>
  );
}