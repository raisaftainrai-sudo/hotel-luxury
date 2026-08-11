
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BedDouble,
  Users,
  Wifi,
  Bath,
  Coffee,
  ArrowRight,
} from "lucide-react";

const details = [
  "King Size Luxury Bed",
  "Private Modern Bathroom",
  "High Speed WiFi",
  "Complimentary Breakfast",
  "24/7 Room Service",
];

export default function RoomDetails() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
          "
        >

          {/* Image */}

          <motion.div
            className="relative h-[500px] overflow-hidden rounded-[40px] group"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.02,
            }}
          >

            <Image
              src="/images (73).jpg"
              alt="Luxury Room"
              fill
              className="
                object-cover
                rounded-[40px]
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            <div
              className="
                absolute
                inset-0
                rounded-[40px]
                bg-gradient-to-t
                from-black
                via-transparent
                to-transparent
                transition-all
                duration-500
                group-hover:from-black/70
              "
            />

            {/* Image Hover Glow */}

            <motion.div
              className="
                absolute
                inset-0
                rounded-[40px]
                border
                border-transparent
                pointer-events-none
              "
              whileHover={{
                borderColor: "rgba(251,146,60,0.8)",
                boxShadow:
                  "0 0 35px rgba(251,146,60,0.35)",
              }}
            />
          </motion.div>

          {/* Content */}

          <motion.div
            className="
              bg-white/5
              border
              border-orange-400/30
              backdrop-blur-xl
              rounded-[40px]
              p-8
              md:p-10
              shadow-[0_0_40px_rgba(255,165,0,0.15)]
              transition-all
              duration-500
            "
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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -8,
              borderColor: "rgba(251,146,60,0.7)",
              boxShadow:
                "0 0 55px rgba(255,165,0,0.25)",
            }}
          >

            <motion.p
              className="
                text-orange-400
                uppercase
                tracking-[5px]
                font-semibold
                cursor-default
              "
              whileHover={{
                letterSpacing: "7px",
                scale: 1.02,
              }}
            >
              Premium Room
            </motion.p>

            <motion.h2
              className="
                text-white
                text-4xl
                md:text-5xl
                font-serif
                font-bold
                mt-5
                cursor-default
              "
              whileHover={{
                x: 5,
                color: "#fb923c",
              }}
              transition={{
                duration: 0.3,
              }}
            >
              Royal Deluxe Suite
            </motion.h2>

            <motion.p
              className="
                text-gray-400
                mt-5
                leading-7
              "
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              viewport={{
                once: true,
              }}
            >
              Experience ultimate comfort with elegant interiors,
              modern facilities and luxury services designed
              for an unforgettable stay.
            </motion.p>

            {/* Info */}

            <div
              className="
                grid
                grid-cols-2
                gap-5
                mt-8
              "
            >

              {/* Luxury Bed */}

              <motion.div
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-300
                  rounded-xl
                  p-2
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-orange-500/10
                  hover:text-white
                  hover:border-orange-400/40
                "
                whileHover={{
                  x: 6,
                  scale: 1.03,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 8,
                  }}
                >
                  <BedDouble className="text-orange-400" />
                </motion.div>

                Luxury Bed
              </motion.div>

              {/* Guests */}

              <motion.div
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-300
                  rounded-xl
                  p-2
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-orange-500/10
                  hover:text-white
                "
                whileHover={{
                  x: 6,
                  scale: 1.03,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: -8,
                  }}
                >
                  <Users className="text-orange-400" />
                </motion.div>

                2 Guests
              </motion.div>

              {/* WiFi */}

              <motion.div
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-300
                  rounded-xl
                  p-2
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-orange-500/10
                  hover:text-white
                "
                whileHover={{
                  x: 6,
                  scale: 1.03,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 8,
                  }}
                >
                  <Wifi className="text-orange-400" />
                </motion.div>

                Free WiFi
              </motion.div>

              {/* Bathroom */}

              <motion.div
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-300
                  rounded-xl
                  p-2
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-orange-500/10
                  hover:text-white
                "
                whileHover={{
                  x: 6,
                  scale: 1.03,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: -8,
                  }}
                >
                  <Bath className="text-orange-400" />
                </motion.div>

                Private Bath
              </motion.div>

            </div>

            {/* Features */}

            <ul className="mt-8 space-y-3">

              {details.map((item, index) => (
                <motion.li
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    text-gray-300
                    rounded-xl
                    px-3
                    py-2
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-orange-500/10
                    hover:text-white
                  "
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                    }}
                  >
                    <Coffee
                      size={18}
                      className="text-orange-400"
                    />
                  </motion.div>

                  {item}
                </motion.li>
              ))}

            </ul>

            {/* Price */}

            <motion.div
              className="
                mt-8
                flex
                items-center
                justify-between
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >

              <motion.h3
                className="
                  text-white
                  text-3xl
                  font-bold
                  cursor-default
                "
                whileHover={{
                  scale: 1.05,
                  color: "#fb923c",
                }}
              >
                $350

                <span
                  className="
                    text-gray-400
                    text-base
                  "
                >
                  / Night
                </span>
              </motion.h3>

              {/* Book Now */}

              <Link href="/booking">
                <motion.div
                  className="
                    bg-orange-500
                    hover:bg-orange-600
                    px-7
                    py-3
                    rounded-full
                    text-white
                    font-semibold
                    flex
                    items-center
                    gap-2
                    transition
                    cursor-pointer
                  "
                  whileHover={{
                    scale: 1.08,
                    x: 4,
                    boxShadow:
                      "0 0 30px rgba(251,146,60,0.6)",
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  Book Now

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.div>
              </Link>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

