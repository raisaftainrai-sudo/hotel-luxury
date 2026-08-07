"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const gallery = [
  {
    image: "/lounde12img.png",
    title: "Luxury Spa Lounge",
    desc: "Elegant interiors designed for complete relaxation and comfort.",
  },
  {
    image: "/relation1img.jpg",
    title: "Relaxation Room",
    desc: "A peaceful space for calm and refreshing wellness moments.",
  },
  {
    image: "/mange1img.jpg",
    title: "Massage Experience",
    desc: "Premium massage treatments by professional therapists.",
  },
  {
    image: "/images (88).jpg",
    title: "Beauty Treatment",
    desc: "Luxury beauty services with advanced techniques.",
  },
  {
    image: "/wellnessimg.jpg",
    title: "Wellness Corner",
    desc: "A beautiful wellness area for mind and body balance.",
  },
  {
    image: "/parivate12img.jpg",
    title: "Private Spa Suite",
    desc: "Exclusive private suites for a luxury spa journey.",
  },
];

export default function SpaGallery() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 uppercase tracking-[6px] font-semibold">
            Our Gallery
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-serif font-bold text-white">
            Luxury Spa Moments
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400">
            Discover our elegant interiors, peaceful spaces and premium wellness
            experience.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                overflow-hidden
                rounded-[35px]
                bg-[#2B221D]
                border
                border-orange-400/20
                shadow-[0_10px_40px_rgba(255,165,0,0.15)]
                hover:shadow-[0_20px_70px_rgba(255,165,0,0.35)]
                hover:border-orange-400/60
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2 text-orange-300 text-sm">
                      <Sparkles size={15} />
                      Premium Experience
                    </div>
                  </div>

                  <button
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-orange-500
                      hover:bg-orange-600
                      flex
                      items-center
                      justify-center
                      transition
                      duration-300
                      hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                <button
                  onClick={() =>
                    setActiveCard(
                      activeCard === index ? null : index
                    )
                  }
                  className="
                    mt-6
                    w-full
                    py-3
                    rounded-full
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-semibold
                    transition
                    duration-300
                  "
                >
                  {activeCard === index
                    ? "Hide Details"
                    : "View Details"}
                </button>

                {activeCard === index && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      mt-4
                      text-gray-300
                      leading-7
                    "
                  >
                    {item.desc}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}