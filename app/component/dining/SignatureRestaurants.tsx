"use client";

import Image from "next/image";
import { Star, MapPin, ChefHat, ArrowRight } from "lucide-react";

const restaurants = [
  {
    name: "Royal Garden",
    image: "/imggarden.png",
    cuisine: "International Cuisine",
    chef: "Chef Daniel",
    rating: "4.9",
    location: "Level 1",
  },
  {
    name: "Skyline Rooftop",
    image: "/imgsunlike.png",
    cuisine: "Mediterranean",
    chef: "Chef Olivia",
    rating: "4.8",
    location: "Rooftop",
  },
  {
    name: "The Grand Lounge",
    image: "/imglounge.png",
    cuisine: "Asian Fusion",
    chef: "Chef Ethan",
    rating: "5.0",
    location: "Ground Floor",
  },
];

export default function SignatureRestaurants() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Signature Restaurants
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Discover Our Premium Restaurants
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-7">
            Every restaurant at LUXORA offers a unique atmosphere,
            world-class cuisine and unforgettable dining experiences.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {restaurants.map((item, index) => (

            <div
              key={index}
              className="group bg-[#faf7f2] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Image */}

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-5 right-5 bg-white rounded-full px-3 py-2 flex items-center gap-1 shadow-lg">

                  <Star
                    size={16}
                    className="text-yellow-500 fill-yellow-500"
                  />

                  <span className="font-semibold text-sm">
                    {item.rating}
                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-3 text-orange-500 font-medium">
                  {item.cuisine}
                </p>

                <div className="mt-6 space-y-4">

                  <div className="flex items-center gap-3 text-gray-600">

                    <ChefHat
                      size={20}
                      className="text-orange-500"
                    />

                    <span>{item.chef}</span>

                  </div>

                  <div className="flex items-center gap-3 text-gray-600">

                    <MapPin
                      size={20}
                      className="text-orange-500"
                    />

                    <span>{item.location}</span>

                  </div>

                </div>

                <button
                  className="
                    mt-8
                    w-full
                    py-3
                    rounded-full
                    bg-black
                    text-white
                    hover:bg-orange-500
                    transition
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  Reserve Table

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}