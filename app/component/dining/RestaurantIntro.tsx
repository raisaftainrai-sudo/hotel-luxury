
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Star } from "lucide-react";

export default function RestaurantIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                relative
                h-[600px]
                rounded-3xl
                overflow-hidden
                shadow-2xl
                cursor-pointer
              "
            >
              <Image
                src="/imgintro.png"
                alt="Luxury Restaurant"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                absolute
                -bottom-8
                -right-6
                bg-white
                rounded-3xl
                shadow-xl
                p-6
                w-64
                border
                border-transparent
                hover:border-orange-500
                hover:shadow-orange-200
                hover:shadow-2xl
                cursor-pointer
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-orange-500
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Star className="text-white" size={28} />
                </motion.div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    5 Star
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Dining Experience
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
              Welcome To LUXORA
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Discover An Unforgettable{" "}
              <span className="text-orange-500">
                Culinary Journey
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              At LUXORA Hotel, every meal is crafted with passion and
              precision. Our chefs combine international flavors with fresh,
              locally sourced ingredients to create a memorable dining
              experience for every guest.
            </p>

            <div className="mt-10 space-y-6">

              {/* Cuisine Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  flex
                  gap-5
                  p-5
                  rounded-2xl
                  border
                  border-transparent
                  hover:border-orange-400
                  hover:bg-orange-50
                  hover:shadow-xl
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    group-hover:bg-orange-500
                    transition-all
                    duration-300
                  "
                >
                  <UtensilsCrossed
                    className="
                      text-orange-500
                      group-hover:text-white
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    World-Class Cuisine
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Enjoy carefully crafted international dishes prepared by
                    experienced chefs.
                  </p>
                </div>
              </motion.div>

              {/* Beverage Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  flex
                  gap-5
                  p-5
                  rounded-2xl
                  border
                  border-transparent
                  hover:border-orange-400
                  hover:bg-orange-50
                  hover:shadow-xl
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    group-hover:bg-orange-500
                    transition-all
                    duration-300
                  "
                >
                  <Wine
                    className="
                      text-orange-500
                      group-hover:text-white
                      group-hover:scale-110
                      transition-all
                      duration-300
                    "
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Premium Beverages
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Choose from our exclusive collection of premium wines,
                    cocktails and refreshing beverages.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Discover More Button */}
            <motion.div
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                duration: 0.3,
              }}
              className="inline-block mt-10"
            >
              <Link
                href="/booking"
                className="
                  inline-block
                  px-8
                  py-4
                  rounded-full
                  bg-orange-500
                  text-white
                  font-semibold
                  hover:bg-orange-600
                  shadow-lg
                  hover:shadow-orange-300
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                Discover More
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

