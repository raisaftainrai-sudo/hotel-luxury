"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import BookingCTA from "../home/BookingCTA";

const rooms = [
  {
    name: "Luxury Room",
    image: "/breedomimg.png",
    price: "$250 / Night",
    description:
      "Elegant room with modern facilities and beautiful interior design.",
    facilities: [
      "King Size Bed",
      "Free WiFi",
      "Room Service",
      "City View",
    ],
    link: "/rooms/luxury-room",
  },

  {
    name: "Executive Suite",
    image: "/images (69).jpg",
    price: "$450 / Night",
    description:
      "Premium suite designed for guests who love comfort and luxury.",
    facilities: [
      "Private Lounge",
      "Breakfast Included",
      "Smart TV",
      "Mini Bar",
    ],
    link: "/rooms/executive-suite",
  },

  {
    name: "Presidential Suite",
    image: "/royalimg.png",
    price: "$800 / Night",
    description:
      "Experience royal hospitality with our most luxurious suite.",
    facilities: [
      "Private Balcony",
      "Luxury Bathroom",
      "VIP Service",
      "Ocean View",
    ],
    link: "/rooms/presidential-suite",
  },
];

export default function RoomSelection() {
  return (
    <section className="py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-orange-500 uppercase tracking-[4px] font-medium">
            Choose Your Room
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3">
            Luxury Rooms & Suites
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Select your perfect stay from our collection of premium rooms
            designed for ultimate comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
            >

              <div className="relative h-72 w-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute top-5 right-5 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {room.price}
                </div>
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  {room.name}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-6">
                  {room.description}
                </p>

                <div className="mt-5 space-y-3">
                  {room.facilities.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <Check
                        size={18}
                        className="text-orange-500"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <Link href="/gallery">
                  <button
                    className="mt-7 w-full py-3 rounded-full bg-black text-white hover:bg-orange-500 transition duration-300"
                  >
                    Select Room
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}