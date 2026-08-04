"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const rooms = [
  {
    title: "Luxury Suite",
    price: "$450 / Night",
    image: "/img13.png",
    desc: "Spacious suite with premium interiors and beautiful views."
  },
  {
    title: "Deluxe Room",
    price: "$250 / Night",
    image: "/images (66).jpg",
    desc: "Elegant room designed for comfort and relaxation."
  },
  {
    title: "Royal Villa",
    price: "$800 / Night",
    image: "/images (69).jpg",
    desc: "Private villa experience with exclusive luxury."
  }
];


export default function FeaturedRooms() {
  return (
    <section className="
    bg-black
    py-24
    ">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        {/* Heading */}
        <div className="text-center mb-14">

          <p className="
          text-orange-500
          uppercase
          tracking-[6px]
          mb-4
          ">
            Our Rooms
          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-serif
          font-bold
          text-white
          ">
            Luxury Rooms &
            <span className="text-orange-500">
              {" "}Suites
            </span>
          </h2>


          <p className="
          text-gray-400
          mt-5
          max-w-2xl
          mx-auto
          ">
            Experience elegant spaces designed with comfort,
            style and modern luxury.
          </p>

        </div>




        {/* Cards */}
        <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        ">


          {rooms.map((room,index)=>(
            
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
                duration:0.6,
                delay:index * 0.2
              }}
              className="
              bg-[#111111]
              rounded-3xl
              overflow-hidden
              border
              border-orange-500/20
              hover:border-orange-500
              transition
              group
              "
            >


              {/* Image */}
              <div className="
              relative
              h-[300px]
              overflow-hidden
              ">

                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                  "
                />

              </div>




              {/* Content */}
              <div className="p-6">


                <h3 className="
                text-2xl
                font-bold
                text-white
                ">
                  {room.title}
                </h3>


                <p className="
                text-orange-500
                font-semibold
                mt-2
                ">
                  {room.price}
                </p>


                <p className="
                text-gray-400
                mt-4
                ">
                  {room.desc}
                </p>



                <Link
                  href="/booking"
                  className="
                  inline-block
                  mt-6
                  bg-orange-500
                  text-black
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  hover:bg-orange-400
                  transition
                  "
                >
                  Book Now
                </Link>


              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}