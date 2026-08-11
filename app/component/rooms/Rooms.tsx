"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, BedDouble, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  {
    name: "Royal Deluxe Room",
    price: "$250",
    guests: "2 Guests",
    image: "/images (76).jpg",
    description:
      "A luxurious room with elegant interiors and premium comfort.",
    features: ["King Size Bed", "Free WiFi", "Luxury Bathroom"],
  },
  {
    name: "Luxury Suite",
    price: "$400",
    guests: "4 Guests",
    image: "/images (68).jpg",
    description:
      "Spacious suite designed for a relaxing and unforgettable stay.",
    features: ["Private Lounge", "Ocean View", "Premium Services"],
  },
  {
    name: "Executive Room",
    price: "$300",
    guests: "3 Guests",
    image: "/images (64).jpg",
    description:
      "Modern room with stylish design and complete facilities.",
    features: ["Smart TV", "Fast Internet", "Room Service"],
  },
];

export default function Rooms() {
  return (
    <section className="min-h-screen bg-black px-4 py-16 md:px-8">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Our Accommodation
        </p>

        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
          Choose Your Perfect Room
        </h1>

        <p className="mt-4 text-gray-400">
          Experience comfort, elegance and luxury with our carefully designed
          rooms and suites.
        </p>
      </motion.div>

      {/* Rooms */}
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room, index) => (
          <motion.div
            key={room.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-[30px] border border-orange-500/40 bg-[#0d0d0d] shadow-[0_10px_40px_rgba(255,140,0,0.08)] transition-all duration-500 hover:border-orange-500 hover:shadow-[0_20px_60px_rgba(255,140,0,0.2)]"
          >
            {/* Image */}
            <div className="relative h-[260px] overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              {/* Image Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-orange-500/5" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Room Name */}
              <h2 className="font-serif text-2xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
                {room.name}
              </h2>

              {/* Price */}
              <p className="mt-3 text-xl font-semibold text-orange-500">
                {room.price}{" "}
                <span className="text-sm font-normal text-gray-400">
                  / Night
                </span>
              </p>

              {/* Guests */}
              <div className="mt-5 flex items-center gap-2 text-gray-300">
                <Users size={19} className="text-orange-500" />
                <span>{room.guests}</span>
              </div>

              {/* Description */}
              <p className="mt-5 min-h-[55px] leading-6 text-gray-400">
                {room.description}
              </p>

              {/* Features */}
              <div className="mt-6 space-y-4">
                {room.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-300 transition-colors duration-300 hover:text-white"
                  >
                    {featureIndex === 0 ? (
                      <BedDouble
                        size={19}
                        className="shrink-0 text-orange-500"
                      />
                    ) : (
                      <Wifi
                        size={19}
                        className="shrink-0 text-orange-500"
                      />
                    )}

                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Book Button */}
              <Link
                href={`/booking?room=${encodeURIComponent(room.name)}`}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.45)] active:scale-[0.98]"
              >
                <span>Book Room</span>

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}